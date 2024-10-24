import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { Link } from "react-router-dom";
import { Terminal, Zap, Cpu } from "lucide-react";
import image from './quiz-background.jpg'

export function AnimatedPinDemo({ evnt, obj, type, idh }) {
  return (
    <Link to={`./${idh}`} className="m-2 flex items-center justify-center">
      <PinContainer title={type}>
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[24rem] h-[32rem] bg-black border-2 border-[#c3ff00] rounded-lg overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-[#c3ff00]">{evnt}</h3>
            {type === "Technical" ? (
              <Cpu className="w-6 h-6 text-[#c3ff00]" />
            ) : (
              <Terminal className="w-6 h-6 text-[#c3ff00]" />
            )}
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={evnt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          <div className="mt-4">
            {/* <p className="text-sm text-[#c3ff00] mb-2">{type}</p> */}
            <p className="text-base font-normal text-white">{obj}</p>
          </div>
          {/* <div className="mt-auto flex items-center justify-between pt-4">
            <span className="text-xs text-[#c3ff00]"></span>
            <Zap className="w-5 h-5 text-[#c3ff00] animate-pulse" />
          </div> */}
        </div>
      </PinContainer>
    </Link>
  );
}