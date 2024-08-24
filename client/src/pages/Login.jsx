import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import api from "../utils/api";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData.entries());

    api
      .post("/auth/login", user)
      .then((res) => {
        // Bildirim gönder
        toast.success(res.data.message);

        // Kullanıcı bilgilerini locale kaydet
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // jvt tokenini local'e kaydet
        localStorage.setItem("token", res.data.token);

        // Kullanıcıyı ana sayfaya yönlendir
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="pt-24 max-w-[700px] mx-auto sm:min-w-[400px] max-sm:w-full">
      <h1 className="text-xl md:text-2xl font-bold mb-10 text-gray-500">
        Hesabınıza Giriş Yapın
      </h1>
      <form onSubmit={handleSubmit}>
        <Input label="isim" name="username" isReq={true} />
        <Input label="Şifre" name="password" isReq={true} />
        <Button text="Giriş Yapın" />
      </form>
      <p className="mt-5 text-gray-500">
        Hesabınız Yok mu?
        <Link className="text-blue-500" to="/register">
          Kaydol
        </Link>
      </p>
    </div>
  );
};

export default Login;
