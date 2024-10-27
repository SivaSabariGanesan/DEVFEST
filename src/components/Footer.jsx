import React from 'react';
import { Instagram, Twitter, Facebook, Github, Zap } from 'lucide-react';
import gsap from 'gsap';
import { useEffect } from 'react';

export const Footer = () => {
  const FooterLink = ({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="footer-icon">
      <Icon className="h-8 w-8 text-[#c3ff00] hover:text-[#ff00ff] transition duration-300" />
    </a>
  );

  return (
    <footer className="bg-black text-[#c3ff00] py-8 font-mono">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex gap-4">
          <FooterLink icon={Instagram} link="https://instagram.com" />
          <FooterLink icon={Twitter} link="https://twitter.com" />
          <FooterLink icon={Facebook} link="https://facebook.com" />
          <FooterLink icon={Github} link="https://github.com" />
        </div>
        <p className="text-sm glitch-text mb-6">
          © 2024 DEVS Club. All rights reserved.
        </p>
        <Zap className="h-10 w-10 text-[#c3ff00] animate-pulse" />
      </div>

      
    </footer>
  );
};

// export default Footer;
// 