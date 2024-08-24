// Clint tarafından çerezler veya header ile gönderilen jwt tokeninin geçerliliğini kontrol edeceğiz. Eğer geçersiz ise hata gönderecek. Geçerli ise kullanıcı bilgilerini req nesnesi içine kaydedecek.

import error from "../utils/error.js";
import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  // 1) Çerezler /headers ile gelen tokene eriş
  //   console.log("çerez", req.cookies.token);
  //   console.log("headers", req.headers.authorization.split(" "[1]));
  const token = req.cookies.token || req.headers.authorization.split(" "[1]);

  // 2) Token yoksa hata ver
  if (!token) return next(error(423, "Yetkiniz yok token bulunamadı"));

  // 3) Token geçerli mi kontrol et
  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    // 4) Token geçersiz ise hata gönder
    if (err) {
      return next(error(423, "Tokeniniz geçerisz veya süresi dolmuştur"));
    }

    // 5) Geçerliyse req nesnesi içerisini kullanıcı bilgilerini ekle
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });

  // 6) sonraki adıma devam et
  next();
};
