import React from "react";
import Hover2 from "./Hover2";
function Social() {
  return (
    <div className="w-screen bg-[#dcddd9d3] h-[80vh] px-[5vw] md:px-[10vw] md:pt-20 py-[18vw] relative rounded-t-[50px]">
      {/* <h1 className="text-[10vw]">Contact</h1> */}
      <div className="h-[60vh] md:pt-6 border-2 rounded-3xl bg-[#ddd]">
        <h1 className="md:text-[3vw] p-6  text-3xl text-black">Socials</h1>
        <div>
          <Hover2 number='/1.'> Github </Hover2>
          <Hover2 number='/2.'> LinkedIn </Hover2>
          <Hover2 number='/3.'> Twitter </Hover2>
        </div>
      </div>
    </div>
  );
}

export default Social;
