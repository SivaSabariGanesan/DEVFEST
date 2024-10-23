import React, { useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
// import { Icon } from 'bootstrap-icons-react'; // Ensure Bootstrap icons are installed

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      // Animate when opening
      gsap.to(".mobile-menu", {
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    } else {
      // Animate when closing
      gsap.to(".mobile-menu", {
        y: "-100%",
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <>
      <nav className="mx-[5vw] md:mx-[10vw] max-w-7xl py-16 flex justify-between items-center z-[10] relative">
        {/* Logo */}
        <Link to="/" className="logo text-3xl">DEVS REC</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12">
          <a href="#home" className="group transition duration-300">
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="#about" className="group transition duration-300">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="#events" className="group transition duration-300">
            Events
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="#contact" className="group transition duration-300">
            Contact Us
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <i className={isMobileMenuOpen ? "bi-x-lg" : "bi-list"} size={30} />
          </button>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <div
          className={`mobile-menu z-50 absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transform transition-transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col gap-8 text-center text-white text-3xl">
            <a href="#home" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" onClick={toggleMobileMenu}>About</a>
            <a href="#events" onClick={toggleMobileMenu}>Events</a>
            <a href="#contact" onClick={toggleMobileMenu}>Contact Us</a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
