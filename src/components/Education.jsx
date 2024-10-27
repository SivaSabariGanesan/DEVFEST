import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Zap } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          <span className="absolute top-0 left-0 z-0 -ml-0.5 -mt-0.5 text-[#ff00ff] opacity-70 animate-glitch1">{children}</span>
          <span className="absolute top-0 left-0 z-0 ml-0.5 mt-0.5 text-[#00ffff] opacity-70 animate-glitch2">{children}</span>
        </>
      )}
    </span>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick, className }) => (
  <div className={`mb-4 ${className}`}>
    <button
      className="flex justify-between items-center w-full text-left p-4 bg-[#c3ff00] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:bg-black hover:text-[#c3ff00]"
      onClick={onClick}
    >
      <GlitchText>{question}</GlitchText>
      {isOpen ? <ChevronUp className="flex-shrink-0 ml-2" /> : <ChevronDown className="flex-shrink-0 ml-2" />}
    </button>
    {isOpen && (
      <div className="p-4 bg-black text-[#c3ff00] border-2 border-t-0 border-[#c3ff00]">
        {answer}
      </div>
    )}
  </div>
);

const Education = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".faq",
        start: "40% 100%",
        end: "70% 80%",
        scrub: true,
      },
    });
    t1.from([".faq1, .faq2, .faq3, .faq4, .faq5"], {
      duration: 0.3,
      scrub: "true",
      translateY: "150",
      stagger: 0.05,
      ease: "power1.inOut",
    });
  });

  const [currentOpenIndex, setCurrentOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is DEVS?",
      answer: "DEVS (Digital Empowerment Via Software) is a student-run club at REC focused on fostering technological innovation and skill development in software engineering."
    },
    {
      question: "How can I join DEVS?",
      answer: "You can join DEVS by attending our orientation sessions at the beginning of each academic year or by reaching out to our club coordinators via email or social media."
    },
    {
      question: "What kind of events does DEVS organize?",
      answer: "DEVS organizes a variety of events including hackathons, coding competitions, workshops, tech talks, and networking sessions with industry professionals."
    },
    {
      question: "Do I need to be a computer science student to join DEVS?",
      answer: "Not at all! DEVS welcomes students from all disciplines who are interested in technology and software development."
    },
    {
      question: "How can I stay updated about DEVS events?",
      answer: "You can follow our social media accounts, join our mailing list, or check our website regularly for updates on upcoming events and activities."
    }
  ];

  return (
    <div className="bg-[#c3ff00] min-h-screen text-black font-mono">
      <div className="mx-[5vw] md:mx-[10vw] min-h-screen flex flex-col justify-center">
        <div className="mb-10 faq h-[11vw] overflow-hidden flex">
          <span className="text-[10vw] inline-block faq1">F</span>
          <span className="text-[10vw] inline-block faq1">A</span>
          <span className="text-[10vw] inline-block faq2">Q</span>
          <span className="text-[10vw] inline-block faq3">s</span>
        </div>

        <div className="mx-auto w-full">
          {faqData.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              isOpen={currentOpenIndex === index}
              onClick={() => setCurrentOpenIndex(currentOpenIndex === index ? null : index)}
              className={`faq${index + 1}`}
            />
          ))}
        </div>

        <div className="fixed bottom-4 right-4 z-20">
          <Zap className="w-8 h-8 text-black animate-pulse" />
        </div>
      </div>

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
    </div>
  );
};

export default Education;
