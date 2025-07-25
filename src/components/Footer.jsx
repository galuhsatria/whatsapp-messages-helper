import React from "react";
import { FaHeart, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-dark  flex justify-center p-5  w-full border-t-2">
      <div>
        <div className="sosial-media flex text-slate-500 gap-4 mb-3 items-center justify-center">
          <a href="#">
            <FaInstagram className="text-2xl hover:text-red-500" />
          </a>

          <a href="#">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="#">
            <FaGithub className="text-2xl hover:text-black" />
          </a>
        </div>
        <p className="flex items-center gap-1 text-black dark:text-white">
          Galuh Satria | Make With <FaHeart className="text-red-600" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
