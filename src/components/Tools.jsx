import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

import Hover from "./Hover";

function Tools() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".tool",
        start: "40% 90%",
        end: "80% 70% ",
        scrub: true,

        // markers: true,
      },
    });
    t1.from([".tool1, .tool2, .tool3, .tool4, .tool5"], {
      duration: 1,
      //   opacity: 0,
      //   delay: 0.4,
      scrub: "true",
      translateX: "120",
      // stagger: 0.2,
      ease: "power1.Out",
    });
  });
  return (
    <div className="mx-[5vw] md:mx-[10vw] my-[1vw] md:flex flex-col relative overflow-hidden">
      <div className="flex flex-col ">
        <div className="mb-10 tool h-[11vw] overflow-hidden flex bf ">
          <div className="z-2 overflow-hidden">
            <span className="text-[10vw] inline-block y tool1 z-1">S</span>
          </div>
          <div className="z-2 overflow-hidden">
            <span className="text-[10vw] inline-block y tool2 ">k</span>
          </div>
          <div className="z-2 overflow-hidden">
            <span className="text-[10vw] inline-block y tool3 ">i</span>
          </div>
          <div className="z-2 overflow-hidden">
            <span className="text-[10vw] inline-block y tool4 ">l</span>
          </div>
          <div className="z-2 overflow-hidden">
            <span className="text-[10vw] inline-block y tool5 ">l</span>
          </div>
          <div className="z-2 overflow-hidden">
            <span className="text-[10vw] inline-block y tool5 ">s</span>
          </div>
        </div>
      </div>
      <div className="my-4 md:flex md:gap-8 flex gap-5  flex-col ">
        {/* <div className="text-2xl md:text-[3vw] mb-2">Javascript </div> */}
        <Hover front=' React | JavaScript | HTML | CSS | Tailwind CSS | Styled Components'>FrontEnd </Hover>
        <Hover front='Node.js | Express.js | MongoDB | MySQL | PostgreSQL'>BackEnd</Hover>
        <Hover front='Docker | Kubernetes | CI/CD | AWS '>DevOps</Hover>
        <Hover front='Git | GitHub'> Version Control </Hover>
        <Hover front='Figma | Canva '>UI/UX</Hover>


      </div>
    </div>
  );
}

export default Tools;
