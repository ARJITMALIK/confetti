import { createLogger, format, transports } from "winston";
import dotenv from "dotenv";

dotenv.config();

const customFormat = format.printf(({ level, message, timestamp, meta }) => {
  return `[${timestamp}] [${level}] (${meta.method}): ${message}`;
});

export const devLogger = createLogger({
  transports: [new transports.Console()],
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    format.errors({ stack: true }),
    customFormat
  ),
});

export const prodLogger = createLogger({
  transports: [new transports.Console()],
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: false }),
    format.prettyPrint()
  ),
});

let logger = null;

if (process.env.ENVIRONMENT == "development") {
  logger = devLogger;
} else {
  logger = prodLogger;
}

export { logger };
