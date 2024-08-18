import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../utils/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const [isSeller, setIsSeller] = useState(false);
  const [navigate, useNavigate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bir formdata örneği oluştur
    const formData = new FormData(e.target);

    // Bütün inputlardaki verileri nesne haline getir
    const newUser = Object.fromEntries(formData.entries());

    // Satıcı hesabı ise nesne içerisine bunu kaydet
    newUser.isSeller = isSeller;

    // Kullanıcı hesabı oluşturmak için api isteği
    api
      .post("auth/register", newUser)
      .then((res) => {
        toast.success("Hesabınız başarıyla oluşturuldu. Giriş yapabilirsiniz.");
        navigate("/login");
      })
      .catch((err) => console.log(err));

    console.log(newUser);
  };
  return (
    <div className="max-w-[900px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="md:pt-24 grid md:grid-cols-2 md:gap-10"
      >
        <div>
          <h1 className="text-xl md:text-2xl text-gray-500 font-bold mb-5">
            Yeni Ehsap Oluştur
          </h1>
          <Input label="İsim" isReq={true} name="userName" />
          <Input label="Email" isReq={true} name="email" />
          <Input
            label="Fotoğraf"
            isReq={true}
            name="email"
            type="text"
            placeholder="Merhaba"
          />
          <Input label="Ülke" isReq={true} name="country" />
          <Input label="Şifre" isReq={true} name="password" type="password" />

          <h1 className="text-xl md:text-2xl text-gray-500 font-bold mb-5">
            Satıcı Olmak İstiyorum
          </h1>
        </div>
        <div className="flex gap-5 items-center mb-5">
          <p>Satıcı Hesabını Etkinleştir</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onChange={() => {}}
              className="sr-only peer"
              value=""
              type="checkbox"
            />
            <div className="group peer ring-2  bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-10 after:w-10 after:top-1 after:left-1   peer-checked:after:translate-x-12 peer-hover:after:scale-125"></div>
          </label>
          <Input
            label="Telefon"
            type="number"
            name="phone"
            disabled={!isSeller}
            isReq={isSeller}
          />
          <Input label="Açıklama" type="text" name="desc" />
          <Button text="Kaydol" />
          <p>
            Hesabınız var mı?
            <Link className="ms-3 text-blue-500" to="/login">
              Giriş Yap
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
