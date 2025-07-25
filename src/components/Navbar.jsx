import React from "react";
import { FaWhatsapp, FaSun, FaMoon } from "react-icons/fa";
import DarkMode from "./DarkMode";
const Navbar = () => {
  // const [thame, setThame] = useTheme();
  const [colorTheme, setTheme] = DarkMode();
  return (
    <div>
      <nav className="flex items-center drop-shadow-lg fixed w-screen justify-around bg-white dark:bg-dark py-5">
        <div className="nav-logo flex flex-row gap-3 items-center">
          <FaWhatsapp className="text-green-light text-2xl" />
          <p className="text-green-light dark:text-white">WhatsApp Helper</p>
        </div>
        <div className="theme ">
          <div onClick={() => setTheme(colorTheme)} className="theme-toggle">
            {colorTheme === "light" ? <FaSun className="text-white text-2xl" /> : <FaMoon className="text-xl" />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
