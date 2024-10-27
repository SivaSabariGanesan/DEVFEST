import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import image from "../components/devs.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Loader() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();
    t1.to("#layout", {
      duration: 0.1,
      css: { height: "100vh", overflowY: "hidden" },
      ease: "power3.inOut",
    })
      .from(["#title1", "#title2", "#title3"], {
        duration: 1,
        y: "100%",
        // opacity: 0,
        stagger: 0.5,
        ease: "power1.inOut",
      })
      .to(["#title1", "#title2", "#title3"], {
        duration: 1,
        // opacity: 0,
        y: "-100%",
        delay: 0.5,
        stagger: 0.5,
      })
      // .to("#intro-slider", {
      //   duration: 1,
      //   // height: 0,
      //   // y: "-100%",
      //   // opacity: 0,
      //   ease: "power1.inOut", why this is here? 
      // })
      .to("#intro-slider", {
        duration: 0.5,
        y: "-100%",
      })
      .to("#layout", {
        duration: 0.1,
        css: { height: "100%", overflowY: "auto" },
        ease: "power3.inOut",
      })
      .to(".strip", {
        scrollTrigger: {
          toggleActions: "play none none none",
          trigger: ".strip",
          start: "50vw 100%",
          end: "300% top ",
          scrub: true,
          // markers: true,
        },
        // x: "-50vw",
        // delay: 10,
        translateX: "-20%",
      });
  });

  return (
    <>
      <div className="relative m-0 p-0">
        <div
          id="intro-slider"
          className="m-0 p-0 absolute h-screen w-full z-50 flex flex-col justify-center items-center bg-[#c3ff00] border-b-2 border-[#c3ff00]"
        >
          {/* <h1 className="text-[9vw] bg-transparent text-[#c3ff00]" id="title1">
            Gamer
          </h1>
          <h1 className="text-9xl bg-transparent text-[#c3ff00]" id="title2">
            Web Developer
          </h1> */}
          <div className="overflow-hidden">
            <h1 className="text-[9vw] bg-transparent text-[#111]" id="title3">
              {/* <img className="max-w-xl" src={image} alt="" /> */}
              DEVS REC
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
