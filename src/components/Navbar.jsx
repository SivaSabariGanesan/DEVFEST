import React, { useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      gsap.to(".mobile-menu", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(".mobile-menu", {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <>
      <nav className="mx-4 md:mx-24 py-8 flex justify-between border-b-2 border-black text-black items-center relative z-40">
        <Link to="/" className="logo text-4xl font-semibold">DEVS REC</Link>

        <ul className="hidden md:flex gap-12">
          <Link to={'/'} key='12' className="group transition duration-300 text-lg">
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
          </Link>
          {["Events", "Contact Us"].map((item, index) => (
            <Link to={`/${item.toLowerCase().replace(" ", "-")}`} key={index} className="group transition duration-300 text-lg">
              {item}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
            </Link>
          ))}
        </ul>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none text-3xl text-black">
            <i className={`bi ${isMobileMenuOpen ? "bi-x-lg" : "bi-list"}`} size={30} />
          </button>
        </div>

        <div
          className={`mobile-menu z-50 fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center transform transition-transform ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <button onClick={toggleMobileMenu} className="absolute top-8 right-8 text-cyan-500 text-4xl focus:outline-none">
            <i className="bi bi-x-lg"></i>
          </button>
          <ul className="flex flex-col gap-8 text-center text-cyan-500 text-3xl">
            {["Home", "About", "Events", "Contact Us"].map((item, index) => (
              <Link to={`/${item.toLowerCase().replace(" ", "-")}`} onClick={toggleMobileMenu} key={index} className="cyber-hover">
                {item}
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      <style>
        {`
          .cyber-hover:hover {
            text-shadow: 0 0 8px cyan, 0 0 20px cyan, 0 0 30px cyan;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
