import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Ensure GSAP ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, id }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to split text and create animation
    const runSplit = () => {
      const typeSplit = new SplitType(containerRef.current, {
        types: "lines, words"
      });

      // Add line-mask to each word
      containerRef.current.querySelectorAll(".word").forEach(word => {
        const mask = document.createElement('div');
        mask.className = 'line-mask';
        word.appendChild(mask);
      });

      createAnimation();
    };

    // Function to create the GSAP animation
    const createAnimation = () => {
      const allMasks = Array.from(containerRef.current.querySelectorAll(".line-mask"));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "150% 80%",
          scrub: 1,
          // markers: true, 
        }
      });

      tl.to(allMasks, {
        width: "0%",
        height: "0%",
        duration: 2,
        stagger: 0.5,
        display: "inline",
      });
    };

    runSplit(); // Run the split and animation functions
  }, [text, id]); // Dependencies array includes text and id

  return (
    <div className="" ref={containerRef}>
      <div className="split-word">{text}</div>
    </div>
  );
};

export default AnimatedText;
