'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from "react"
import Hover2 from "./NewHover"

gsap.registerPlugin(ScrollTrigger)

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
        start: "top",
        end: "bottom",
        scrub: 1,
      },
    })

    timeline.from("section", {
      clipPath: "circle(0% at 50% 50%)",
      stagger: 1,
    })

    // Hide the "EVENTS" text when entering a section
    gsap.to(titleRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "10% top",
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="w-screen h-screen relative overflow-hidden" id="container" ref={containerRef}>
      {/* Cyberpunk background */}
      
      <div className="flex justify-center items-center h-screen relative z-10">
        <h1 ref={titleRef} className="text-[10vw] font-bold text-white  cyberpunk-glitch" data-text="EVENTS">EVENTS</h1>
        <section className="flex items-center justify-center bg-transparent h-screen w-screen">
        <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('/cyberpunk-grid.svg')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-blue-900/30 to-cyan-900/30"></div>
      </div>
          <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] mx-auto relative">
            <div className="cyberpunk-scanner absolute inset-0"></div>
            <div className="rounded-[25px] md:rounded-[50px] overflow-hidden backdrop-blur-xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-cyan-500/50 shadow-lg shadow-cyan-500/50">
              <div className="pb-6 md:pb-12 rounded-2xl md:rounded-3xl relative">
                <div className="cyberpunk-lines"></div>
                <h1 className="text-2xl md:text-[3vw] pt-4 md:pt-8 px-4 md:px-6 text-cyan-400 font-bold relative z-10">Technical Events</h1>
                <div className="mt-4 md:mt-6 relative z-10">
                  <Hover2 number='/1.'> Mini-Hackathon </Hover2>
                  <Hover2 number='/2.'> CodeClash </Hover2>
                  <Hover2 number='/3.'> TechnoQuest </Hover2>
                  <Hover2 number='/4.'> UI/UX Showdown </Hover2>
                </div>
              </div> 
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center h-screen w-screen">
          <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] mx-auto relative">
            <div className="cyberpunk-scanner absolute inset-0"></div>
            <div className="rounded-[25px] md:rounded-[50px] overflow-hidden backdrop-blur-xl bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/50 shadow-lg shadow-pink-500/50">
              <div className="pb-6 md:pb-12 rounded-2xl md:rounded-3xl relative">
                <div className="cyberpunk-lines"></div>
                <h1 className="text-2xl md:text-[3vw] pt-4 md:pt-8 px-4 md:px-6 text-pink-400 font-bold relative z-10">Non-Technical Events & Workshops</h1>
                <div className="mt-4 md:mt-6 relative z-10">
                  <Hover2 number='/1.' type="Workshop"> Google Gemini LLM Workshop </Hover2>
                  <Hover2 number='/2.' type="Workshop"> Quantum Computing Workshop </Hover2>
                  <Hover2 number='/3.' type="Workshop"> 3D Printing Workshop </Hover2>
                  <Hover2 number='/4.' type="Non-Technical"> Product Photography </Hover2>
                  <Hover2 number='/5.' type="Non-Technical"> TechFlix Event </Hover2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects