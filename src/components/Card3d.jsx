import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Zap, Terminal, Cpu } from 'lucide-react';
import imge from '@/assets/quiz-background.jpg';

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

const CyberpunkEventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`./${event.id}`} className="block w-full">
      <div 
        className={`bg-[#c3ff00] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 transition-all duration-300 h-[400px] flex flex-col ${isHovered ? 'translate-x-[-2px] translate-y-[-2px]' : ''}`}
        style={{
          boxShadow: isHovered ? '6px 6px 0px 0px rgba(0,0,0,1)' : '4px 4px 0px 0px rgba(0,0,0,1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold truncate flex-1 mr-2">
            <GlitchText>{event.eventName}</GlitchText>
          </h3>
          {event.type === "Technical" ? (
            <Cpu className="w-6 h-6 flex-shrink-0" />
          ) : (
            <Terminal className="w-6 h-6 flex-shrink-0" />
          )}
        </div>
        <div className="relative h-40 mb-4 overflow-hidden">
          <img
            src={imge}
            alt={event.eventName}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />
          <div className={`absolute inset-0 bg-[#c3ff00] opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-30' : ''}`}></div>
        </div>
        <p className="text-sm mb-4 flex-grow overflow-hidden">
          <span className="line-clamp-3">{event.rounds[0].objective}</span>
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-semibold uppercase tracking-wider">{event.type}</span>
          <div className="flex items-center gap-2 group">
            <Clock className="w-5 h-5 group-hover:text-[#00ffff] transition-colors duration-300" />
            <span className="group-hover:text-[#00ffff] transition-colors duration-300">{event.duration}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t-2 border-black pt-2">
          <span className="text-sm font-semibold">{event.eventType}</span>
          <Zap className="w-5 h-5 animate-pulse" />
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
    </Link>
  );
};

const CyberpunkEventGrid = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map(event => (
        <CyberpunkEventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export { CyberpunkEventCard, CyberpunkEventGrid };