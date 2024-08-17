import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//* env dosyasındaki verilere erişmek için kurulum
dotenv.config();

//* Express Uygulaması oluştur
const app = express();

//* Veritabanı ile bağlantı kur
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Veri tabanı ile bağlantı kuruldu"))
  .catch((err) => console.log("Veri tabanına bağlanamadık", err));

app.route("/health").get((req, res) => {
  res.json("Server çalışıyor...");
});

//* Hangi portun dinleneceğini belirtelim
app.listen(process.env.PORT, () => {
  console.log(`API ${process.env.PORT} portunu dinlemeye başladı ✅`);
});
