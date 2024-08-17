import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import morgan from "morgan";

//* env dosyasındaki verilere erişmek için kurulum
dotenv.config();

//* Veritabanı ile bağlantı kur
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Veri tabanı ile bağlantı kuruldu"))
  .catch((err) => console.log("Veri tabanına bağlanamadık", err));

//* Express Uygulaması oluştur
const app = express();

//* Konsola istek bilgilerini yazan middleware
app.use(morgan("dev"));

//* middlewares (ara yazılımlar)
//* a) body/query alanlarındaki json içeriğinin okunmasını/işlenmesini sağlar
app.use(express.json());

//* Kontrol route'u
app.route("/health").get((req, res) => {
  res.json("Server çalışıyor...");
});

//* routerları tanımla
app.use("/api/auth", authRoutes);

//* Hata yönetimi için middleware
//* controller'lardan yapılacak tüm yönlendirmelerde bu middleware çalışacak
app.use((err, req, res, next) => {
  console.log("Hata merydana geldi 🥲");
  console.log(err);

  const errStatus = err.status || 500;
  const errMessage = err.message || "500";

  return res.status(errStatus).json({
    message: errMessage,
  });
});

//* Hangi portun dinleneceğini belirtelim
app.listen(process.env.PORT, () => {
  console.log(`API ${process.env.PORT} portunu dinlemeye başladı ✅`);
});
