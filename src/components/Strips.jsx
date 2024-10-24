import React from "react";
import Mover from "./Mover";
function Strips() {


  return (
    <>
    <div className="mb-[30vw] md:mb-[30vw] md:mt-0">
      <div className="">
        <div className="opacity-30 overflow-hidden absolute origin-center -rotate-[4deg] w-[110%] -left-4 ">
          <Mover
          className="strip1"
            item1={" CODE - COFFEE - REPEAT"}
            item2={" CODE - COFFEE - REPEAT"}
            item3={" CODE - COFFEE - REPEAT"}
          />
        </div>
        <div className="origin-center overflow-clip  absolute -left-4 rotate-[6deg] w-[110%]">
          <Mover
            item1={" CODE - COFFEE - REPEAT"}
            item3={" CODE - COFFEE - REPEAT"}
            item2={" CODE - COFFEE - REPEAT"}
          />
        </div>
      </div>
    </div>
    <div>
      
    </div>
    </>
  );
}

export default Strips;
