import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const [time, setTime] = useState(new Date());
  const titleRef = useRef(null); // Reference for the title
  const subTitleRef = useRef(null); // Reference for the subtitle
  const glitchLayers = useRef([]); // Reference for glitch layers

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Initial fade-in animation for the title
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 4, ease: "power3.out" }
    );

    // Flicker effect for the subtitle
    const flickerTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    flickerTimeline
      .to(subTitleRef.current, {
        opacity: 0.3,
        y: -10, // Slight upward movement
        color: "#ff0000", // Change color to red
        duration: 0.1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 2,
      })
      .to(subTitleRef.current, {
        opacity: 1,
        y: 0, // Reset position
        color: "#ffffff", // Reset color to white
        duration: 0.2,
        ease: "power2.inOut",
        delay: 0.2, // Delay before resetting
      });

    // Flicker effect with yoyo for the main title
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

    // Glitch effect with color noise and transformation for both layers (red and blue)
    const glitchTimeline = gsap.timeline({ repeat: -1 });
    glitchTimeline
      .set(glitchLayers.current, { opacity: 0 }) // Initially hide glitch layers
      .to(glitchLayers.current, {
        duration: 0.1,
        opacity: 1,
        x: () => Math.random() * 20 - 10, // Random horizontal shifts
        scaleX: () => 1 + Math.random() * 0.2, // Small distortion in width
        scaleY: () => 1 + Math.random() * 0.1, // Small distortion in height
        color: () => (Math.random() > 0.5 ? "#00ff00" : "#ff0000"), // Random color shift
        repeat: 1,
        yoyo: true,
        stagger: 0.05, // Add a slight stagger to create independent flickers
      })
      .to(glitchLayers.current, {
        opacity: 0,
        duration: 0.1,
        delay: Math.random() * 1.2 + 0.5, // Random delay between glitches
      });

    // Random character substitution for 0 and 1
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
          titleElement.innerText = originalText; // Reset to original text after glitch
        }, 50); // Short glitch duration
      }, 2000); // Glitch every 2 seconds

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
    <div className="min-h-screen" id="home">
      <div className="mx-[5vw] md:mx-[10vw] md:my-36 my-[18vw] md:flex relative">
        <div className="grow">
          <div className="relative">
            {/* Main Title */}
            <h1
              ref={titleRef}
              className="font-black text-7xl md:text-[12vw] z-10 relative glitch-text"
            >
              DEVFEST'24
            </h1>
            {/* Glitch Layers */}
            <div
              ref={(el) => (glitchLayers.current[0] = el)}
              className="glitch-layer text-7xl md:text-[12vw] text-red-500 absolute top-0 left-0"
            >
              DEVFEST'24
            </div>
            <div
              ref={(el) => (glitchLayers.current[1] = el)}
              className="glitch-layer text-7xl md:text-[12vw] text-blue-500 absolute top-0 left-0"
            >
              DEVFEST'24
            </div>
          </div>
          {/* Subtitle Animation */}
          <p
            ref={subTitleRef} // Reference for the subtitle
            className="md:text-4xl opacity-50 w-[80%] md:w-[70%] lg:w-[50%]"
          >
            Brought to you by DEVS REC
          </p>
        </div>
        <div className="flex md:inline gap-[15vw] text-sm mt-20 md:mt-0">
          <p className="md:mt-80 mt-40 md:text-right md:w-44">
            {formatTime(time)} <br /> <span>{time.getFullYear()}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
