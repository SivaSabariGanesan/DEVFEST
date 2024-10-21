import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

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
          <div className="h-screen w-full bg-[#eee] md:text-5xl p-10">
             UNDER CONSTRUCTION 🔨🔨🔨🔨 visit <a href="https://www.github.com/thexro" className="underline y">Github</a> for projects  
          </div>
        </section>
        <section className="">
          <div className="h-screen w-full bg-zinc-500 text-9xl
          ">
            Prject 2
          </div>
        </section>
        <section className="">
          <div className="h-screen w-full bg-violet-500 text-yellow-400 text-9xl">Project 3 </div>
          
        </section>
      </div>
    </div>
  );
}

export default Projects;
