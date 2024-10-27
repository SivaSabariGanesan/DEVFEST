import React, { useEffect, useRef } from "react";

const Mover = ({ item1, item2, item3 }) => {
  return (
    <>
      <div className="">
        <div className=" h-[10vw] bg-[#000] text-left flex items-center w-[280vw] strip ">
          <div className="text-[10vw] text-[#c3ff00] font-black">{item1} -</div>
          <div className="text-[10vw] text-[#c3ff00]  font-black">
            {" "}
            &nbsp;{item2} -{" "}
          </div>
          {/* <div className="text-9xl text-black font-black"> &nbsp;{item3} - </div> */}
          {/* <div className="text-9xl text-black font-black"> &nbsp;{item2} </div> */}
        </div>
      </div>
    </>
  );
};

export default Mover;
