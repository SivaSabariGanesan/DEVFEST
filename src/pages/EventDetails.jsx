import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, User, Zap } from "lucide-react";
import Navbar from '@/components/Navbar';

// Event data (unchanged)
const eventsWithId = [
    {
      id: "1",
      eventName: "Front End Competition",
      type: "Technical",
      eventType: "Team (2-3)",
      duration: "2 hours",
      rounds: [
        {
          roundNumber: 1,
          roundDescription: "Creating a Website for the DEVS Club",
          timeLimit: "1 hour 45 mins",
          objective: "Participants will design a functional and visually appealing website for the DEVS club, showcasing the club's events, activities, and initiatives.",
          sections: [
            "Home: Overview of the DEVS club and its mission",
            "Events: Information about upcoming and past events",
            "Members: A section highlighting key members of the club",
            "Contact: A simple contact form or details for reaching out"
          ]
        }
      ],
      hosts: ["Manovikram K", "Kaviya"],
      callManager: "Lithesh"
    },
    {
      id: "2",
      type: "Technical",
      eventName: "Tech Quiz",
      eventType: "Individual",
      duration: "1 hour",
      rounds: [
        {
          roundNumber: 1,
          roundDescription: "Tech knowledge quiz",
          timeLimit: "1 hour",
          objective: "Test participants' knowledge of various tech-related topics."
        }
      ],
      hosts: ["John Doe", "Alice"],
      callManager: "Sophia"
    },
    {
      id: "3",
      type: "Technical",
      eventName: "AI Hackathon",
      eventType: "Team (2-4)",
      duration: "24 hours",
      rounds: [
        {
          roundNumber: 1,
          roundDescription: "Develop an AI solution for a real-world problem",
          timeLimit: "24 hours",
          objective: "Build an AI-powered solution to tackle a specific problem."
        }
      ],
      hosts: ["David", "Emily"],
      callManager: "Anita"
    },
    {
      id: "4",
      type: "Technical",
      eventName: "UI/UX Design Challenge",
      eventType: "Individual",
      duration: "3 hours",
      rounds: [
        {
          roundNumber: 1,
          roundDescription: "Design a mobile app interface",
          timeLimit: "2 hours 30 mins",
          objective: "Create a user-friendly and visually appealing mobile app design."
        }
      ],
      hosts: ["Lucas", "Sophia"],
      callManager: "Henry"
    },
    {
      id: "5",
      type: "Non - Technical",
      eventName: "Coding Marathon",
      eventType: "Team (1-3)",
      duration: "12 hours",
      rounds: [
        {
          roundNumber: 1,
          roundDescription: "Solve algorithmic challenges",
          timeLimit: "12 hours",
          objective: "Solve a series of algorithmic challenges of increasing difficulty."
        }
      ],
      hosts: ["Brian", "Grace"],
      callManager: "Daniel"
    },
    {
      id: "6",
      type: "Workshop",
      eventName: "Cybersecurity Workshop",
      eventType: "Workshop",
      duration: "6 hours",
      rounds: [
        {
          roundNumber: 1,
          roundDescription: "Hands-on cybersecurity session",
          timeLimit: "6 hours",
          objective: "Learn and implement real-world cybersecurity measures."
        }
      ],
      hosts: ["William", "Jessica"],
      callManager: "Ethan"
    }
  ];

  const CyberpunkButton = ({ children, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <button
        className="bg-[#c3ff00] text-black px-4 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#c3ff00] hover:border-[#c3ff00] transition-all duration-300"
        style={{
          transform: isHovered ? 'translate(-2px, -2px)' : 'none',
          boxShadow: isHovered ? '6px 6px 0px 0px rgba(0,0,0,1)' : '4px 4px 0px 0px rgba(0,0,0,1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const handleRegister = () => {
    // Add registration logic here
    alert('Registration functionality to be implemented');
  };

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

const CyberpunkBadge = ({ children }) => (
  <span className="inline-block bg-black text-[#c3ff00] px-3 py-1 text-sm font-bold border border-[#c3ff00] shadow-[2px_2px_0px_0px_#c3ff00] hover:bg-[#c3ff00] hover:text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
    {children}
  </span>
);

const GlitchText = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className="relative inline-block"
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

export default function EventDetails() {
  const { id } = useParams();
  const event = eventsWithId.find(e => e.id === id);

  if (!event) {
    return (
      <div className='text-black'>
        <Navbar />
        <div className="container mx-auto mt-8 text-center text-[#c3ff00]">Event not found</div>
      </div>
    );
  }

  const img = 'https://imgs.search.brave.com/JplYfuWptHtOq9vJVICw5EVoQp2gf4Ao_LSg-nQuwog/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzc3LzY3LzAy/LzM2MF9GXzc3NzY3/MDI4N19xYU5mWnBn/akYwMFd4eUY4V2ti/RFc3S245YkcxSmRv/cS5qcGc';

  return (
    // <div className="text-black absolute inset-0 bg-[url('https://imgs.search.brave.com/BV1c5Y4eiL2bZjbJ6IfDmRVCSpmp7InWjAp1u6MPYmU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg3MTMw/OTEuanBn')] bg-cover bg-center ">
    <div className={` absolute inset-0 bg-[url(https://img.freepik.com/premium-photo/abstract-circuit-board-with-yellow-lines_332713-26461.jpg?semt=ais_hybrid)] bg-cover bg-center`}>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
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
        <CyberpunkCard className="max-w-4xl mx-auto">
          <div className="border-b-2 border-black pb-4 mb-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center">
                  <Zap className="mr-2 animate-pulse" />
                  <GlitchText>{event.eventName}</GlitchText>
                </h1>
                <p className="text-lg">{event.type}</p>
              </div>
              <CyberpunkButton onClick={handleRegister}>Register Now</CyberpunkButton>
            </div>
            <div className="flex items-center gap-4">
                <CyberpunkBadge>{event.eventType}</CyberpunkBadge>
              </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 animate-spin" />
              <span>{event.duration}</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                {/* <Circuit className="mr-2 animate-pulse" /> */}
                <GlitchText>Rounds</GlitchText>
              </h3>
              {event.rounds.map((round, index) => (
                <CyberpunkCard key={index} className="mt-4 hover:bg-black hover:text-[#c3ff00] transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2">Round {round.roundNumber}</h4>
                  <p className="mb-2">{round.roundDescription}</p>
                  <p><strong>Time Limit:</strong> {round.timeLimit}</p>
                  <p><strong>Objective:</strong> {round.objective}</p>
                  {round.sections && (
                    <div className="mt-4">
                      <strong>Sections:</strong>
                      <ul className="list-disc list-inside mt-2">
                        {round.sections.map((section, idx) => (
                          <li key={idx} className="hover:text-[#ff00ff] transition-colors duration-300">{section}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CyberpunkCard>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t-2 border-black pt-4">
              <div className="flex items-center gap-2 group">
                <Users className="h-5 w-5 group-hover:text-[#00ffff] transition-colors duration-300" />
                <span className="group-hover:text-[#00ffff] transition-colors duration-300">Hosts: {event.hosts.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2 group">
                <User className="h-5 w-5 group-hover:text-[#ff00ff] transition-colors duration-300" />
                <span className="group-hover:text-[#ff00ff] transition-colors duration-300">Call Manager: {event.callManager}</span>
              </div>
            </div>
          </div>
        </CyberpunkCard>
      </div>
    </div>
  );
}