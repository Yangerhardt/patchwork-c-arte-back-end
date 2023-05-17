import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
};

export default config;
