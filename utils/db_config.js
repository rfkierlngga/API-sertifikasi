import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Memastikan variabel environment bisa dibaca

const sequelize = new Sequelize(
  process.env.DB_NAME,     // nama database
  process.env.DB_USER,     // user database
  process.env.DB_PASS,     // password user
  {
    host: process.env.DB_HOST, // host database
    dialect: "mysql",
  }
);

export default sequelize;
