import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Hover2 from "./NewHover";


gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        start: "top",
        end: "bottom",
        scrub: 1,
        // markers: true,
      },
    });

    timeline.from("section", {
      clipPath: "circle(0% at 50% 50%)",
      stagger: 1,
    });
  });

  return (
    
    <div className="w-screen relative " id="container">
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-[10vw] y ">EVENTS</h1>
        <section className="">
          <div className="h-screen w-full text-9xl">
            <div className="w-screen bg-[#dcddd9d3] h-screen px-[5vw] pt-2 md:px-[10vw] md:pt-12 py-[18vw] relative rounded-[50px]">
              <div className="h-[85vh] md:h-[82vh] mt-8 md:mt-0 md:pt-2 border-2 rounded-3xl bg-[#ddd]">
                <h1 className="md:text-[3vw] pt-6 md:pt-8 p-3 text-3xl text-black">Technicl Events</h1>
                <div>
                  <Hover2 number='/1.'> Event 1 </Hover2>
                  <Hover2 number='/2.'> Event 2 </Hover2>
                  <Hover2 number='/3.'> Event 3 </Hover2>
                  <Hover2 number='/4.'> Event 4 </Hover2>
                  <Hover2 number='/5.'> Event 5 </Hover2>
                  <Hover2 number='/6.'> Event 6 </Hover2>
                  <Hover2 number='/7.'> Event 7 </Hover2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="h-screen bg-zinc-500 w-screen py-[6vw] rounded-[50px]">
            <div className="px-[5vw] md:px-[10vw]  relative ">
              <div className="h-[75vh] md:h-[80vh] md:pt-2 border-2 rounded-3xl bg-[#ddd]">
                <h1 className="md:text-[3vw] pt-8 p-3 text-3xl text-black">Non - Technicl Events & Workshops</h1>
                <div>
                  <Hover2 number='/1.' type="Non - Technical"> Event 1 </Hover2>
                  <Hover2 number='/2.' type="Non - Technical"> Event 2 </Hover2>
                  <Hover2 number='/3.' type="Non - Technical"> Event 3 </Hover2>
                  <Hover2 number='/4.' type="Workshop"> Workshop 1 </Hover2>
                  <Hover2 number='/5.' type="Workshop"> Workshop 2 </Hover2>
                  <Hover2 number='/6.' type="Workshop"> Workshop 3 </Hover2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
