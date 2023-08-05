import { MongoClient } from "mongodb";
import { logger } from "../logger/logger.controller.js";

export const dbConnection = async (URI) => {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    logger.info(`Successfully connected to database`, {
      meta: { method: "dbConnection" },
    });
  } catch (err) {
    logger.error(`err`, { meta: { method: "dbConnection" } });
  }
};
