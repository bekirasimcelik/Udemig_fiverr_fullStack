import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="p-5 shadow">
      <div className="max-w-[1440px] mx-auto flex justify-between gap-4 md:gap-8">
        <Link to="/">
          <img
            src="../../public/fiverr.png"
            alt="fiverr"
            className="w-[100px]"
          />
        </Link>
        <form className="flex-1 flex border rounded overflow-hidden max-w-[600px]">
          <input
            className="w-full h-full px-3 outline-none"
            type="text"
            placeholder="Hizmetleri ara..."
          />
          <button className="bg-black p-2 text-white text-xl max-md:hidden">
            <IoSearch />
          </button>
        </form>

        <div className="flex items-center gap-2 relative">
          <Link
            className="transition hover:text-green-500"
            rel="stylesheet"
            to="/login"
          >
            Giriş Yap
          </Link>
          <Link
            className="transition border border-green-500 p-1 hover:bg-green-500 hover:text-white"
            to="/register"
          >
            Kaydol
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
