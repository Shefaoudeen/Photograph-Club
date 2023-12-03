import React from "react";

const Navbar = () => {
  return (
    <section className="p-2 w-full">
      <div className="bg-slate-500  h-[50px] items-center">
        <ul className="flex justify-around gap-5 items-center">
          <li>
            <a>Home</a>
          </li>
          <li>About PTU</li>
          <li>Office Bearers</li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
