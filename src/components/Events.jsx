'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

const CyberpunkRow = ({ number, children, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center p-4 transition-all duration-300 border-b-2 border-black cursor-pointer relative overflow-hidden ${
        isHovered ? 'bg-black text-[#c3ff00]' : 'bg-[#c3ff00] text-black'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`mr-4 font-mono relative z-10 ${isHovered ? 'text-[#c3ff00]' : 'text-black'}`}>{number}</span>
      <span className="flex-grow font-semibold relative z-10">{children}</span>
      {type && <span className="text-xs uppercase tracking-wider relative z-10">{type}</span>}
      <div className={`absolute inset-0 bg-black transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
    </div>
  );
};

function Projects() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: 1,
      },
    })

    timeline.from("section", {
      clipPath: "circle(0% at 50% 50%)",
      stagger: 1,
    })

    gsap.to(titleRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "10% top",
        scrub: true,
      },
    })

    const title = titleRef.current
    title.addEventListener('mouseenter', () => {
      gsap.to(title, {
        duration: 0.1,
        x: "random(-5, 5)",
        y: "random(-5, 5)",
        repeat: -1,
        yoyo: true,
      })
    })
    title.addEventListener('mouseleave', () => {
      gsap.to(title, {
        duration: 0.1,
        x: 0,
        y: 0,
      })
    })
  }, [])

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[#c3ff00]" id="container" ref={containerRef}>
      <div className="flex justify-center items-center h-screen relative z-10">
        <h1 ref={titleRef} className="text-[10vw] font-bold text-black cyberpunk-glitch relative" data-text="EVENTS">
          EVENTS
        </h1>
        <section className="flex items-center justify-center bg-transparent h-screen w-screen">
          <div className="absolute inset-0 bg-[#c3ff00]">
            <div className="absolute inset-0 bg-[url('https://imgs.search.brave.com/nHz8pLBiCMm_yM0Pz33ff1l7dFWbpRoUf3Iq9K7OJAU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzQxMC8xMDE0/LzQ0OC9uaWdodC1j/eWJlcnB1bmstZnV0/dXJpc3RpYy1jaXR5/LWFydHdvcmstd2Fs/bHBhcGVyLXByZXZp/ZXcuanBn')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
          </div>
          <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] mx-auto relative">
            <div className="cyberpunk-scanner absolute inset-0"></div>
            <div className="overflow-hidden bg-[#c3ff00] border-4 border-black shadow-lg shadow-black/50 relative">
              <div className="cyberpunk-grid absolute inset-0 pointer-events-none"></div>
              <div className="pb-6 md:pb-12 relative">
                <div className="cyberpunk-lines"></div>
                <h1 className="text-2xl md:text-[3vw] pt-4 md:pt-8 px-4 md:px-6 text-black font-bold relative z-10 border-b-2 pb-1 border-black">Technical Events</h1>
                <div className="mt-4 md:mt-6 relative z-10">
                  <CyberpunkRow number="/1.">Mini-Hackathon</CyberpunkRow>
                  <CyberpunkRow number="/2.">CodeClash</CyberpunkRow>
                  <CyberpunkRow number="/3.">TechnoQuest</CyberpunkRow>
                  <CyberpunkRow number="/4.">UI/UX Showdown</CyberpunkRow>
                </div>
              </div> 
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center h-screen w-screen">
          <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] mx-auto relative">
            <div className="cyberpunk-scanner absolute inset-0"></div>
            <div className="overflow-hidden bg-[#c3ff00] border-4 border-black shadow-lg shadow-black/50 relative">
              <div className="cyberpunk-grid absolute inset-0 pointer-events-none"></div>
              <div className="pb-6 md:pb-12 relative">
                <div className="cyberpunk-lines"></div>
                <h1 className="text-2xl md:text-[3vw] pt-4 md:pt-8 px-4 md:px-6 text-black font-bold relative z-10 border-b-2 pb-1 border-black">Non-Technical Events & Workshops</h1>
                <div className="mt-4 md:mt-6 relative z-10">
                  <CyberpunkRow number="/1." type="Workshop">Google Gemini LLM Workshop</CyberpunkRow>
                  <CyberpunkRow number="/2." type="Workshop">Quantum Computing Workshop</CyberpunkRow>
                  <CyberpunkRow number="/3." type="Workshop">3D Printing Workshop</CyberpunkRow>
                  <CyberpunkRow number="/4." type="Non-Technical">Product Photography</CyberpunkRow>
                  <CyberpunkRow number="/5." type="Non-Technical">TechFlix Event</CyberpunkRow>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .cyberpunk-scanner {
          background: linear-gradient(to bottom, transparent, #00000044, transparent);
          height: 100%;
          animation: scan 3s ease-in-out infinite;
        }
        @keyframes scan {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
        .cyberpunk-lines::before,
        .cyberpunk-lines::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, #000000, transparent);
          animation: glitch 2s linear infinite;
        }
        .cyberpunk-lines::after {
          top: auto;
          bottom: 0;
        }
        @keyframes glitch {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .cyberpunk-glitch {
          position: relative;
          animation: glitch-anim 1s infinite linear alternate-reverse;
        }
        .cyberpunk-glitch::before,
        .cyberpunk-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .cyberpunk-glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00ff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim-1 5s infinite linear alternate-reverse;
        }
        .cyberpunk-glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim-2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
          0% { clip: rect(19px, 9999px, 36px, 0); }
          25% { clip: rect(71px, 9999px, 86px, 0); }
          50% { clip: rect(31px, 9999px, 97px, 0); }
          75% { clip: rect(26px, 9999px, 3px, 0); }
          100% { clip: rect(90px, 9999px, 92px, 0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip: rect(66px, 9999px, 45px, 0); }
          25% { clip: rect(25px, 9999px, 39px, 0); }
          50% { clip: rect(54px, 9999px, 73px, 0); }
          75% { clip: rect(95px, 9999px, 23px, 0); }
          100% { clip: rect(76px, 9999px, 83px, 0); }
        }
        .cyberpunk-grid {
          background-image: 
            linear-gradient(to right, #00000022 1px, transparent 1px),
            linear-gradient(to bottom, #00000022 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .cyberpunk-text {
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 2px solid #000000;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

export default Projects