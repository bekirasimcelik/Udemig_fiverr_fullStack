import bcrypt from "bcrypt";
import User from "../models/user.model.js";

//* Kayıt ol: yeni hesap oluştur
export const register = async (req, res) => {
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
    res.status(400).json({
      message: "İstek başarısız",
      err: error.message,
    });
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
