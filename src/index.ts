import "reflect-metadata";
import express from "express";
import { userRouter } from "./routes/user.routes";
import cors from "cors";
import winston from "winston";
import sequelize from "./config/sequelize";
import { productRouter } from "./routes/product.routes";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs.log" }),
  ],
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/products", productRouter);

async function startServer() {
  try {
    await sequelize.authenticate();

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      logger.info(`Server starting at port ${port}`);
    });
  } catch (error) {
    logger.info("Error conecting to server: ", error);
  }
}

startServer();
