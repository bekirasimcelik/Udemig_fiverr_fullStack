import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import error from "../utils/error.js";
import jwt from "jsonwebtoken";

//* Kayıt ol: yeni hesap oluştur
export const register = async (req, res, next) => {
  try {
    console.log(req.body);

    //* şifreyi hashle ve saltla
    const hashedPass = bcrypt.hashSync(req.body.password, 12);

    //* veri tabanına kaydedilecek kullanıcıyı oluştur ve kaydet
    //? User.create();
    const newUser = await User.create({ ...req.body, password: hashedPass });

    //* client'a cevap gönder
    res.status(200).json({
      message: "Kullanıcı hesabı oluşturuldu",
      user: newUser,
    });
  } catch (err) {
    //* client'a hata varsa detayları gönder
    //? 1 yol
    // const err = new Error(error);
    // err.status = 404;

    // next(err);

    //? 2.yol client'a hata mesajını gönder
    next(error(404, err));
  }
};

//* Giriş Yap: oturum aç
export const login = async (req, res, next) => {
  try {
    //* 1) İsmine göre kullanıcıyı ara
    const user = await User.findOne({ username: req.body.username });

    //* 2) Kullanıcı bulunamazsa hata gönder
    if (!user) return error(404, "Kullanıcı bulunamadı");

    //* 3) Kullanıcı bulunursa şifresi doğru mu kontrol et (db deki hashlenmiş şifre ile isteğin body'sinden gelen normal şifreyi karşılaştır)
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    //* 4) Şifre yanlışsa hata gönder
    if (!isCorrect) return next(error(404, "Şifreniz yanlış"));

    //* 5) şifre doğruysa jwt tokeni oluştur
    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY,
      {
        expiresIn: "7d",
      }
    );

    //* Şifre alanını kaldır
    user.password = null;

    //* 6) Tokeni client'a gönder

    res.cookie("token", token).status(200).json({
      message: "Hesaba Giriş Yapıldı",
      user,
    });
  } catch (err) {
    next(error(400, "Giriş yağarken sorun oluştu"));
  }
};

export const logout = (req, res) => {
  res.status(200).json({
    message: "İstek başarılı",
  });
};
