import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import error from "../utils/error.js";

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
  } catch (error) {
    //* client'a hata varsa detayları gönder
    //? 1 yol
    // const err = new Error(error);
    // err.status = 404;

    // next(err);

    //? 2.yol client'a hata mesajını gönder
    next(error(404, err));
  }
};

export const login = (req, res) => {
  res.status(200).json({
    message: "İstek başarılı",
  });
};

export const logout = (req, res) => {
  res.status(200).json({
    message: "İstek başarılı",
  });
};
