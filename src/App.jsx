import "./App.css";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import Layout from "./components/Layout";
import Hover from "./components/Hover";
function App() {
  const lenis = useLenis(({ scroll }) => {
    duration: 2.5;
    // called every scroll
  });
  MouseFollower.registerGSAP(gsap);
  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 0.8,
      skewing: 3,
      skewingText: 0.1,
      stickDelta: 0.15,
    });
  }, []);

  return (
    <>
      <ReactLenis root  className="lenisroot">
        <Layout />        
      </ReactLenis>
    </>
  );
}

export default App;
