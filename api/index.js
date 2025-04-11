import express from "express";
import sequelize from "../utils/db_config.js";
import cors from "cors";
import pendaftarRoutes from "../routes/pendaftaranRoute.js";

// INI HARUS DITAMBAH UNTUK VERSEL
import { createServer } from "http";
import { parse } from "url";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/pendaftar", pendaftarRoutes);

sequelize.authenticate()
  .then(() => {
    console.log("Terhubung ke MySQL");
    return sequelize.sync();
  })
  .then(() => console.log("Model sinkron dengan database"))
  .catch(err => console.error("Gagal koneksi:", err));

// Vercel akan men-*handle* ini sebagai serverless function
export default app;
