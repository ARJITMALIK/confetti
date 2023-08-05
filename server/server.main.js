import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

// controller imports
import { logger } from "./controllers/logger/logger.controller.js";
import { dbConnection } from "./controllers/db/db.controller.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  logger.info(`Server successfully started at port ${PORT}`, {
    meta: {
      method: "app.listen",
    },
  });

  dbConnection(process.env.MONGO_DB_URI);
});

app.get("/", (req, res) => {
  console.log("Endpoint hitted");
  res.status(200).json({
    msg: "aight",
  });
});
