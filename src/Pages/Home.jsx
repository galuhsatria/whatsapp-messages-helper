import React, { useEffect, useState } from 'react';
import { FaPaperPlane, FaTrash } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';
import countryData from '../data/country-code.json';

const Home = () => {
  const CHARACTER_LIMIT = 100;

  const [formData, setFormData] = useState({
    countryCode: '+62',
    mobileNumber: '',
    message: '',
  });

  const [countryList, setCountryList] = useState([]);

  const { countryCode, mobileNumber, message } = formData;

  useEffect(() => {
    const sortedData = countryData.sort((a, b) => a.name.localeCompare(b.name));
    setCountryList(sortedData);
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const cleanedNumber = mobileNumber.replace(/[^\d]/g, '');
    const fullNumber = `${countryCode.replace('+', '')}${cleanedNumber}`;

    const mobileUrl = `https://api.whatsapp.com/send?phone=${fullNumber}${message ? `&text=${encodeURIComponent(message)}` : ''}`;
    const browserUrl = `https://web.whatsapp.com/send?phone=${fullNumber}&text=${encodeURIComponent(message)}&app_absent=0`;

    window.open(isMobile ? mobileUrl : browserUrl, '_blank');
  };

  const handleClear = () => {
    setFormData({ countryCode: '+62', mobileNumber: '', message: '' });
  };

  return (
    <div className="flex justify-center home h-max py-10">
      <div className="flex flex-col items-center border border-green w-96 mt-16 px-4 py-6 rounded-md shadow-md">
        <h1 className="dark:text-white text-2xl font-semibold text-green-600 mb-6">WhatsApp Helper</h1>

        <div className="w-full mb-4">
          <p className="text-sm mb-2 text-black dark:text-white">
            Phone Number <span className="text-red-700">*</span>
          </p>
          <div className="flex gap-2">
            <input list="country-codes" name="countryCode" value={countryCode} onChange={onChange} className="input-field max-w-[4.5rem] text-sm" />
            <datalist id="country-codes">
              {countryList.map((c, idx) => (
                <option key={idx} value={c.dial_code}>
                  {c.dial_code} ({c.name})
                </option>
              ))}
            </datalist>
            <input type="number" name="mobileNumber" value={mobileNumber} onChange={onChange} required className="input-field flex-1 border px-3 py-2 rounded-md text-sm" placeholder="81234567890" />
          </div>
        </div>

        <div className="w-full mb-4">
          <p className="text-sm mb-2 text-black dark:text-white">Message (optional)</p>
          <textarea name="message" value={message} onChange={onChange} className="input-field w-full h-24 resize-none border px-3 py-2 rounded-md text-sm" placeholder="Message" maxLength={CHARACTER_LIMIT} />
          <p className="text-black dark:text-white text-right text-xs mt-1">
            {message.length} / {CHARACTER_LIMIT}
          </p>
        </div>

        <div className="flex gap-4 w-full justify-center">
          <button onClick={handleClear} className="border-red-500 border px-10 py-2 rounded-md flex items-center gap-2 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
            Clear <FaTrash />
          </button>
          <button onClick={onSubmit} disabled={mobileNumber.length < 6} className="bg-green-600 hover:bg-green-700 text-white py-2 px-10 font-semibold rounded-md disabled:opacity-30 flex items-center gap-2">
            Send <FaPaperPlane />
          </button>
        </div>

        <p className="text-center mt-6 text-sm font-medium dark:text-white">Chat on WhatsApp without saving the number!</p>
      </div>
    </div>
  );
};

export default Home;
