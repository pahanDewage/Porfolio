import React from "react";
import Image from "next/image";
import logo from '@/assets/images/logo.png'


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>  <Image src={logo} alt="" className="h-10 md:h-16 w-10 md:w-16"/> </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
