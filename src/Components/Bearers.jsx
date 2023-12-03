import React from "react";

const Bearers = (props) => {
  return (
    <div className="w-[250px] text-center bg-gradient-to-tr from-rose-500 to-slate-100 rounded-3xl">
      <img
        src={props.image}
        width={250}
        height={200}
        className="h-[250px] object-cover rounded-t-3xl"
      />
      <h1 className="text-[30px] font-bold text-white py-2">{props.name}</h1>
      <p className="text-xl font-semibold text-gray-100">{props.role}</p>
      <p className="text-lg mb-2 font-semibold text-gray-100">
        {props.department}
      </p>
      <a href={props.insta} target="_blank">
        <button
          className="border-2 text-black p-1 w-[40%] bg-gradient-to-tr from-white to-slate-100
        my-2 rounded-xl"
        >
          <i className="fa fa-instagram text-black mr-2"></i>
          Insta
        </button>
      </a>
    </div>
  );
};

export default Bearers;
