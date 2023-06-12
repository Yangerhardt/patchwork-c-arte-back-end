import "reflect-metadata";
import express from "express";
import cors from "cors";
import winston from "winston";
import sequelize from "./config/sequelize";
import { userRouter } from "./routes/user.route";
import { productRouter } from "./routes/product.route";
import authRouter from "./routes/auth.route";
import { orderRouter } from "./routes/order.route";
import Redis from "ioredis";
import nodemailer from "nodemailer"

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs.log" }),
  ],
});

const redisClient = new Redis();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/auth", authRouter);

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      logger.info(`Server starting at port ${port}`);
    });
  } catch (error) {
    logger.info("Error conecting to server: ", error);
  }
}

startServer();

export { redisClient, transporter };
