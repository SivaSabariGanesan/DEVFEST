import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

let uniqueId = 0; // Global counter for generating unique IDs

function String() {
  const [path, setPath] = useState("M 50 50 Q 250 50 950 50");
  const ref = useRef(null);
  const id = useRef(`path-${uniqueId++}`); // Generate unique ID for each instance

  useEffect(() => {
    // Animation for path change
    gsap.to(`#${id.current}`, {
      attr: { d: path },
      duration: 1,
      fill: "none",
      stroke: "white",
      strokeWidth: "1",
      ease: "elastic.out(.5,0.1)",
    });
  }, [path]); // Depend on `path`

  const handleMouseEnter = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // Calculate x relative to the element
      const y = e.clientY - rect.top;  // Calculate y relative to the element
      const newPath = `M 50 50 Q ${x>1000 ? x/2 : x} ${y} 950 50`;
      setPath(newPath);
    }
  };

  const handleMouseLeave = () => {
    const newPath = `M 50 50 Q 250 50 950 50`;
    setPath(newPath);
  };

  return (
    <div
      ref={ref}
      className="h-40 w-screen flex justify-center items-center"
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path id={id.current} d={path} fill="none" stroke="white" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default String;
