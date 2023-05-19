import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const customLogger = (query) => {
  console.log("SQL Query:", query);
};

const sequelize = new Sequelize(
  process.env.DB_DEV,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: customLogger,
  }
);

export default sequelize;
