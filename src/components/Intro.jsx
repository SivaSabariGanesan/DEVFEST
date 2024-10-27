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
        className="mx-[5vw] md:mx-[9vw] md:mt-[4vw] md:flex md:flex-col gap-24 "
        id="about"
      >
        <div className="flex flex-col">
          <div className="mb-10 about h-[11vw] w-[18 overflow-hidden flex bf ">
            <span className="text-[7vw] my-auto inline-block text-black y about1 ">A</span>
            <span className="text-[7vw] my-auto inline-block text-black y about2 ">b</span>
            <span className="text-[7vw] my-auto inline-block text-black y about3 ">o</span>
            <span className="text-[7vw] my-auto inline-block text-black y about4 ">u</span>
            <span className="text-[7vw] my-auto inline-block text-black y about5 ">t</span>
            <span className="text-[10vw] inline-block text-black y about6 md:ml-[2rem] ml-[1rem]">D</span>
            <span className="text-[10vw] inline-block text-black y about7 ">E</span>
            <span className="text-[10vw] inline-block text-black y about8 ">V</span>
            <span className="text-[10vw] inline-block text-black y about9 ">F</span>
            <span className="text-[10vw] inline-block text-black y about9 ">E</span>
            <span className="text-[10vw] inline-block text-black y about9 ">S</span>
            <span className="text-[10vw] inline-block text-black y about9 ">T</span>
            <span className="text-[10vw] inline-block text-black y about9 ">'</span>
            <span className="text-[10vw] inline-block text-black y about9 ">24</span>
          </div>
        </div>

    <div className="flex items-center mt-6 para md:flex-row">
      <div className="text-[5vw] md:text-[3vw] leading-none text-black para">
        <AnimatedText
          text={`To create a dynamic community of developers who are passionate about technology and innovation, and who collaborate to solve real-world problems and create value for society`}
          id={3}
        />
      </div>
    </div>

    <div className="leading-5 tracking-wide flex my-6 md:my-2 overflow-hidden">
    <div className="text-[5vw] md:text-[3vw] leading-none text-black para">
        <AnimatedText
          text={`Whether I’m designing intuitive interfaces or crafting robust server-side logic, I thrive on challenges that push my creativity and technical skills. Explore my projects below to see how I can help bring your vision to life!`}
          id={1}
        />
      </div>
    </div>
  </div>
</>

  );
};

export default Intro;
