import React from "react";
import Marquee from "react-fast-marquee";

function Hover({ front, children }) {
  return (
    <div className="group relative font-black w-full">
      {" "}
      {/* Use w-full here */}
      <div className="flex justify-between w-full items-center">
        <h1 className="duration-150 text-white text-xs md:text-xl ">
           {front}
        </h1>
        <div className="hidden md:inline-block text-center">+++</div>
      </div>
      <div className="absolute top-0 scale-y-0 items-center justify-center bg-white font-black duration-500 ease-in-out group-hover:scale-y-100 hidden md:block w-full">
        <Marquee className="duration-500 text-[#111] text-xl opacity-0 group-hover:opacity-100">
          {children} <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
          {children}
          <span className="mx-10"></span>
        </Marquee>
      </div>
      <div className="md:hidden text-xl inline-block"><span> --- </span>{children}</div>
    </div>
  );
}

export default Hover;
