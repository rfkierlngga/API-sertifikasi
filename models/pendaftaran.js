import { DataTypes } from "sequelize";
import sequelize from "../utils/db_config.js";

const Pendaftar = sequelize.define(
    "Pendaftar", {
  Id_pendaftar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nm_pendaftar: {
    type: DataTypes.STRING(35),
    allowNull: false
  },
  Alamat: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Jenis_kelamin: {
    type: DataTypes.ENUM("Laki-laki", "Perempuan"),
    allowNull: false
  },
  No_hp: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  Asal_Sekolah: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Jurusan: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Tgl_lahir: {
    type: DataTypes.DATE,
    allowNull: false
  },
  NISN: {
    type: DataTypes.STRING(20),
    allowNull: false

  }
});

export default Pendaftar;
