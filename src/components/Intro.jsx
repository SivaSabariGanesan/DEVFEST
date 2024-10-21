import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
const Intro = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".about",
        start: "40% 100%",
        end: "70% 80% ",
        scrub: true,

        // markers: true,
      },
    });
    t1.from([".about1, .about2, .about3, .about4, .about5, .about6, .about7, .about8, .about9"], {
      duration: 0.3,
      //   opacity: 0,
      //   delay: 0.4,
      scrub: "true",
      translateY: "150",
      stagger: 0.05,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <div
        className="mx-[5vw] md:mx-[10vw] my-[12vh] md:mt-[5vw] md:flex md:flex-col gap-24 "
        id="about"
      >
        <div className="flex flex-col">
          <div className="mb-10 about h-[11vw] w-[18 overflow-hidden flex bf ">
            <span className="text-[10vw] inline-block y about1 ">A</span>
            <span className="text-[10vw] inline-block y about2 ">b</span>
            <span className="text-[10vw] inline-block y about3 ">o</span>
            <span className="text-[10vw] inline-block y about4 ">u</span>
            <span className="text-[10vw] inline-block y about5 ">t</span>
            <span className="text-[10vw] inline-block y about6 md:ml-[2rem] ml-[1rem]">D</span>
            <span className="text-[10vw] inline-block y about7 ">E</span>
            <span className="text-[10vw] inline-block y about8 ">V</span>
            <span className="text-[10vw] inline-block y about9 ">S</span>
          </div>
        </div>

        <div className="flex items-center para md:flex-row  ">
          <div className="text-2xl md:text-[3vw] leading-none para ">
            <AnimatedText
              text={`To create a dynamic community of developers who are passionate about technology and innovation, and who collaborate to solve real-world problems and create value for society`}
              id={3}
            />
          </div>
        </div>
        {/* <div className="leading-5 tracking-wide flex my-10 overflow-hidden ">
          <p className="w-1/2"></p>
          <p className="md:w-1/2 w-100 text-right md:text-xl">
            <AnimatedText
              text={`Whether I’m designing intuitive interfaces or crafting robust server-side logic, I thrive on challenges that push my creativity and technical skills. Explore my projects below to see how I can help bring your vision to life!`}
              id={1}
            />
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Intro;
