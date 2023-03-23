import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import PropTypes from "prop-types";

const Home = () => {
  const CHARACTER_LIMIT = 100;

  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  });

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

   

    window.open(isMobile ? ``https://wa.me/${number}&text=${message}` : `https://web.whatsapp.com/send?phone=${number}&text=${message}&app_absent=0`);
  };

  return (
    <div className="flex justify-center  font-poppins home h-screen">
      <div className="justify-center items-center flex flex-col border-solid border- border-green w-96  mt-16">
        <h1 className="dark:text-white text-2xl font-semibold text-green-light mb-10 ">WhatsApp Helper</h1>
        <div className="whatsapp-card app">
          <p className="text-sm mb-2 text-black dark:text-white">
            Phone Number <span className="text-red-700">*</span>
          </p>
          <input type="number" id="" name="mobileNumber" value={mobileNumber} onChange={onChange} required className="input-field" placeholder="Ex 6285237683757" />
        </div>
        <div>
          <p className="text-sm mb-2 text-black dark:text-white">
            Message <span className="text-red-700">*</span>
          </p>
          <textarea cols="30" rows="10" placeholder="Message" name="message" value={message} onChange={onChange} required className="input-field h-28 top-0 resize-none mb-0 " maxLength={CHARACTER_LIMIT}></textarea>
          <p className="tex-black dark:text-white">
            {message.length} / {CHARACTER_LIMIT}
          </p>
        </div>
        <div className="mt-4">
          <button
            onClick={onSubmit}
            disabled={mobileNumber.length < 12 || message.length > CHARACTER_LIMIT || message.length < 1}
            className="bg-green-light text-white py-2 px-10 font-semibold rounded-md disabled:opacity-30 flex items-center gap-2"
          >
            Send <FaPaperPlane />
          </button>
        </div>
        <p className="text-center mt-9 font-medium dark:text-white">With Whatsapp helper you can easily chat without saving the phone number</p>
      </div>
    </div>
  );
};

Home.propTypes = {
  number: PropTypes.string.isRequired,
  message: PropTypes.string,
};
export default Home;
