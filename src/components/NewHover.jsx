import React, { useState, useEffect } from "react";

function Hover2({ children, number, type }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Adjust the breakpoint if needed
    };

    checkMobile(); // Check on initial render
    window.addEventListener("resize", checkMobile); // Add resize event listener
    return () => window.removeEventListener("resize", checkMobile); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="group relative bg-yellow-300 transition-all duration-500 h-16 md:h-18 border-b-2 border-white">
        <div className="flex justify-between items-center h-full px-4 md:px-8">
          {/* Number (Hidden on hover in mobile view) */}
          <div className="flex items-center">
            {!isMobile ? (
              <div className="text-lg md:text-3xl transition-transform duration-300 z-10 group-hover:translate-x-5 group-hover:text-black group-hover:scale-90">
                {number}
              </div>
            ) : (
              <div className="text-lg md:text-3xl transition-opacity duration-300 z-10 group-hover:opacity-0">
                {number}
              </div>
            )}

            {/* On mobile, show event name when not hovered, show event type centered on hover */}
            <div className={`mx-4 md:mx-8 text-lg md:text-3xl transition-transform duration-300 z-10 group-hover:text-black group-hover:scale-90`}>
              {isMobile ? (
                <>
                  {/* Event name visible, hidden on hover */}
                  <span className={`${isMobile && "group-hover:opacity-0"}`}>{children}</span>
                  {/* Event type visible on hover */}
                  <span className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300">
                    {(!type)?children:type}
                  </span>
                </>
              ) : (
                <>{children}</>
              )}
            </div>
          </div>

          {/* Show event type only on larger screens */}
          {!isMobile && (
            <div className="ml-auto text-lg md:text-3xl transition-transform duration-300 z-10 group-hover:text-black group-hover:scale-90">
              {type}
            </div>
          )}

          {/* Icon (Arrow) */}
          <div className="icon ml-8 transition-transform duration-200 z-10 group-hover:-translate-x-5 group-hover:-rotate-45 rounded-full bg-white w-6 h-6 md:w-8 md:h-8 flex justify-center items-center group-hover:scale-90 group-hover:border-none group-hover:bg-transparent">
            <div className="w-4 md:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="black"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover background effect */}
        <span className="absolute top-0 left-0 right-0 bottom-0 bg-black duration-300 h-full z-[7] group-hover:h-0"></span>
      </div>
    </div>
  );
}

export default Hover2;
