import express from "express";
import Pendaftar from "../models/pendaftaran.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Pendaftar.findAll();
  res.json(data);
});

router.post("/", async (req, res) => {
    try {
      const pendaftarBaru = await Pendaftar.create(req.body);
      res.status(201).json(pendaftarBaru);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Gagal menambahkan data" });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const [updated] = await Pendaftar.update(req.body, {
        where: { Id_pendaftar: id },
      });
      if (updated) {
        res.json({ message: "Data berhasil diupdate" });
      } else {
        res.status(404).json({ message: "Data tidak ditemukan" });
      }
    } catch (error) {
      console.error("Error update:", error);
      res.status(500).json({ error: "Terjadi kesalahan saat mengupdate data" });
    }
  });
  
  

// GANTI YANG INI
// app.delete("/pendaftar/:id", async (req, res) => {

// JADI BEGINI
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Pendaftar.destroy({
        where: { Id_pendaftar: id },
      });
  
      if (deleted === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }
  
      res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Gagal menghapus data" });
    }
  });
  

export default router;
