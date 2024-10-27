import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Linkedin, Phone, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import a from "../assets/a.jpeg"
import b from "../assets/b.jpeg"
import bh from "../assets/bhaskar.jpeg"
import de from "../assets/devs-w.png"
import rec from "../assets/rec-logo.png"
import tec from "../assets/tec-logo-white.png"
import iic from "../assets/iic-logo.png"
import { Footer } from '../components/Footer';

const CyberpunkCard = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-[#c3ff00] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? 'translate(-2px, -2px)' : 'none',
        boxShadow: isHovered ? '6px 6px 0px 0px rgba(0,0,0,1)' : '4px 4px 0px 0px rgba(0,0,0,1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

const GlitchText = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <>
          <span className="absolute top-0 left-0 -ml-0.5 -mt-0.5 text-[#ff00ff] opacity-70 animate-glitch1">{children}</span>
          <span className="absolute top-0 left-0 ml-0.5 mt-0.5 text-[#00ffff] opacity-70 animate-glitch2">{children}</span>
        </>
      )}
    </span>
  );
};

const CyberpunkImage = ({ src, alt, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      <div className={`absolute inset-0 bg-[#c3ff00] opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-30' : ''}`}></div>
    </div>
  );
};

const CyberpunkOrganizers = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2
      });
    }

    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.fillStyle = '#c3ff00';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-[#c3ff00] min-h-screen text-black font-mono">
      <canvas ref={canvasRef} className="fixed inset-0 z-0"></canvas>
      <Navbar />
      <div className="relative z-10 container mx-auto max-w-4xl p-4">
        <style jsx>{`
          @keyframes glitch1 {
            0% { clip-path: inset(40% 0 61% 0); }
            20% { clip-path: inset(92% 0 1% 0); }
            40% { clip-path: inset(43% 0 1% 0); }
            60% { clip-path: inset(25% 0 58% 0); }
            80% { clip-path: inset(54% 0 7% 0); }
            100% { clip-path: inset(58% 0 43% 0); }
          }
          @keyframes glitch2 {
            0% { clip-path: inset(24% 0 29% 0); }
            20% { clip-path: inset(54% 0 21% 0); }
            40% { clip-path: inset(9% 0 38% 0); }
            60% { clip-path: inset(61% 0 4% 0); }
            80% { clip-path: inset(13% 0 14% 0); }
            100% { clip-path: inset(1% 0 88% 0); }
          }
          .animate-glitch1 {
            animation: glitch1 0.3s infinite linear alternate-reverse;
          }
          .animate-glitch2 {
            animation: glitch2 0.3s infinite linear alternate-reverse;
          }
        `}</style>

        <CyberpunkCard className="mb-8 hover:bg-black hover:text-[#c3ff00] transition-colors duration-300">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            <GlitchText>Organized By</GlitchText>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-items-center">
            {[de, rec, iic, tec].map((logo, index) => (
              <CyberpunkImage
                key={index}
                src={logo}
                alt={logo}
                className="max-h-16 sm:max-h-20 w-auto rounded-lg overflow-hidden"
              />
            ))}
          </div>
        </CyberpunkCard>

        <CyberpunkCard className="mb-8 hover:bg-black hover:text-[#c3ff00] transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            <GlitchText>Club Coordinators</GlitchText>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Dr P Revathy", title: "HoD, CSD", image: a },
              { name: "Ms. Sorna Shanthi", title: "AOP, CSE", image: b },
              { name: "Dr. K. Bhaskar", title: "HOD, AUTOMOBILE", image: bh }
            ].map((coordinator, index) => (
              <div key={index} className="text-center group">
                <CyberpunkImage
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="rounded-lg w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-2 object-cover"
                />
                <p className="text-lg sm:text-xl font-bold"><GlitchText>{coordinator.name}</GlitchText></p>
                <p className="text-sm sm:text-base group-hover:text-[#ff00ff] transition-colors duration-300">{coordinator.title}</p>
              </div>
            ))}
          </div>
        </CyberpunkCard>

        <CyberpunkCard className="hover:bg-black hover:text-[#c3ff00] transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            <GlitchText>Contact Us</GlitchText>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff00ff] transition-colors group">
              <Instagram className="w-6 h-6 group-hover:animate-pulse" />
              <span>@devs_rec</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00ffff] transition-colors group">
              <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
              <span>DevsREC</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#ff00ff] transition-colors group">
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </CyberpunkCard>
      </div>
      <div className="fixed bottom-4 right-4 z-20">
        <Zap className="w-8 h-8 text-[#c3ff00] animate-pulse" />
      </div>
      <Footer />
    </div>
  );
};

export default CyberpunkOrganizers;