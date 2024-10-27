import React from "react";
import Strips from "./Strips";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "./Loader";
import Intro from "./Intro";
import String from "./String";
import Projects from "./Events";
import Education from "./Education";
import { Footer } from "./Footer";

function Layout() {
  return (
    <div id="layout" className="cursor-none h-screen">
      <div className="relative">
        <Navbar />
        <Hero />
        <Strips />
        <div className="pt-[20vw] md:py-0 relative">
          <String />{" "}
          {/* <div className="absolute md:hidden top-[55%] text-center w-full capitalize text-[4vw]">
            results that exceeds expectations
          </div> */}
        </div>
      </div>
      <Intro />
      <String />
      {/* <Tools /> */}
      <Projects />
      {/* <Social /> */}
      <Education/>
      <Footer />
    </div>
  );
}

export default Layout;
