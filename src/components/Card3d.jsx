import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
 
export function AnimatedPinDemo({evnt, obj, type}) {
  return (
    <div  className="m-2 flex items-center justify-center ">
      <PinContainer
        title={type}
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs text-lg text-black">
            {evnt}
          </h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <div className="text-base mt-6 font-normal">
            <span className="text-gray-700">
              {obj}
            </span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}