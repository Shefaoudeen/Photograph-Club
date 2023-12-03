import React from "react";
import { Logo, ShefaLogo } from "../assets";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-black via-slate-700 to-black ">
      <div
        className="flex justify-center
       h-[25vh] items-center"
      >
        <div className="text-white w-[60%] h-[50%] flex justify-center items-center flex-col">
          <h1 className="text-xl font-bold">DEVELOPED BY: </h1>
          <h1 className="text-3xl font-extrabold">SHEFAOUDEEN Z</h1>
          <div className="w-[50%] flex justify-around text-3xl mt-4">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-github"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
