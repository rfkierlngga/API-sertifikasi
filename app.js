import express from "express";
import sequelize from "./utils/db_config.js";
import cors from "cors";
import Pendaftar from "./models/pendaftaran.js";
import pendaftarRoutes from "./routes/pendaftaranRoute.js";

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());

// Tes koneksi DB
sequelize.authenticate()
  .then(() => {
    console.log("Terhubung ke MySQL");
    return sequelize.sync(); // Buat tabel jika belum ada
  })
  .then(() => console.log("Model sinkron dengan database"))
  .catch(err => console.error("Gagal koneksi:", err));

// Gunakan routing
app.use("/pendaftar", pendaftarRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
