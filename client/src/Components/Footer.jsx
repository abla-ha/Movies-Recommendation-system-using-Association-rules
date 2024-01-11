// Footer.js

import React from 'react';
import { FaHeart, FaCoffee } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-16 text-center">
      <div className="flex items-center justify-center">
        <span className="mr-2">Made with</span>
        <FaHeart className="text-red-500" />
        <span className="mx-2">and</span>
        <FaCoffee className="text-yellow-500" />
      
      </div>
    </footer>
  );
};

export default Footer;
