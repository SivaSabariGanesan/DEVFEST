'use client'

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const [time, setTime] = useState(new Date());
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const glitchLayers = useRef([]);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 4, ease: "power3.out" }
    );

    const flickerTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    flickerTimeline
      .to(subTitleRef.current, {
        opacity: 0.3,
        y: -10,
        color: "#111",
        duration: 0.1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 2,
      })
      .to(subTitleRef.current, {
        opacity: 1,
        y: 0,
        color: "#111",
        duration: 0.2,
        ease: "power2.inOut",
        delay: 0.2,
      });

    const flickerMainTitle = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    flickerMainTitle
      .to(titleRef.current, {
        opacity: 0.8,
        duration: 0.1,
        ease: "power2.inOut",
        repeat: 3,
        yoyo: true,
        delay: Math.random() * 2,
      })
      .to(titleRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.inOut",
        delay: Math.random() * 3 + 1,
      });

    const glitchTimeline = gsap.timeline({ repeat: -1 });
    glitchTimeline
      .set(glitchLayers.current, { opacity: 0 })
      .to(glitchLayers.current, {
        duration: 0.1,
        opacity: 1,
        x: () => Math.random() * 20 - 10,
        scaleX: () => 1 + Math.random() * 0.2,
        scaleY: () => 1 + Math.random() * 0.1,
        color: () => (Math.random() > 0.5 ? "#111" : "#111"),
        repeat: 1,
        yoyo: true,
        stagger: 0.05,
      })
      .to(glitchLayers.current, {
        opacity: 0,
        duration: 0.1,
        delay: Math.random() * 1.2 + 0.5,
      });

    const glitchChars = () => {
      const titleElement = titleRef.current;
      let originalText = titleElement.innerText;
      const glitchInterval = setInterval(() => {
        const chars = originalText.split("");
        for (let i = 0; i < chars.length; i++) {
          if (Math.random() > 0.7) {
            chars[i] = Math.random() > 0.5 ? "0" : "1";
          }
        }
        titleElement.innerText = chars.join("");
        setTimeout(() => {
          titleElement.innerText = originalText;
        }, 50);
      }, 2000);

      return () => clearInterval(glitchInterval);
    };

    glitchChars();
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="h-[70vh] md:min-h-screen flex flex-col justify-between" id="home">
      <div className="mx-[5vw] md:mx-[10vw] my-[5vh] md:my-[10vw] flex flex-col items-center md:flex-row relative flex-grow">
        <div className="grow text-center md:text-left">
          <div className="relative">
            <h1
              ref={titleRef}
              className="font-black text-4xl md:text-5xl lg:text-6xl xl:text-[10vw] text-black z-10 relative glitch-text leading-tight"
            >
              DEVFEST'24
            </h1>
            <div
              ref={(el) => (glitchLayers.current[0] = el)}
              className="glitch-layer text-4xl md:text-5xl lg:text-6xl xl:text-[10vw] text-red-500 absolute top-0 left-0"
            >
              DEVFEST'24
            </div>
            <div
              ref={(el) => (glitchLayers.current[1] = el)}
              className="glitch-layer text-4xl md:text-5xl lg:text-6xl xl:text-[10vw] text-blue-500 absolute top-0 left-0"
            >
              DEVFEST'24
            </div>
          </div>
          <p
            ref={subTitleRef}
            className="text-xs md:text-sm lg:text-lg xl:text-4xl opacity-50 w-[80%] md:w-[70%] lg:w-[50%] mx-auto md:mx-0 mt-4 text-black"
          >
            Brought to you by DEVS REC
          </p>
        </div>
        <div className="hidden  flex-col md:mt-0 items-center md:inline gap-[10vw] text-xs sm:text-sm mt-20">
          <p className="md:mt-80 mt-10 text-black text-center md:text-right md:w-44">
            {formatTime(time)} <br /> <span>{time.getFullYear()}</span>
          </p>
        </div>
      </div>
      <div className="md:hidden text-center pb-4">
        <p className="text-black text-sm">
          {formatTime(time)} <br /> <span>{time.getFullYear()}</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;