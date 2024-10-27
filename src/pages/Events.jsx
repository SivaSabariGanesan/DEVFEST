import React, { useState } from 'react';
import { CyberpunkEventCard } from "@/components/Card3d";
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';


const events = [
  {
    "id": "1",
    "eventName": "BINARY DUEL",
    "type": "Technical",
    "eventType": "Team (2)",
    "duration": "2 hours",
    "timeSlot": "9AM - 11AM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Entry Level Round - Coding and aptitude zones with role switching every 10 minutes.",
        "timeLimit": "Varies within 2 hours",
        "objective": "Demonstrate synchronization, problem-solving, and adaptability under timed constraints."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Final Round - Random challenges every 10 minutes with unique constraints like keyboard-only coding.",
        "timeLimit": "Varies within 2 hours",
        "objective": "Test problem-solving under constraints. The best team wins."
      }
    ],
    "callManager": "Vignesh"
  },
  {
    "id": "2",
    "eventName": "MOCKHIRE",
    "type": "Technical",
    "eventType": "Individual",
    "duration": "3 hours",
    "timeSlot": "9AM - 12PM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Aptitude Test (Pen and Paper)",
        "timeLimit": "1 hour",
        "objective": "Assess logical reasoning, quantitative aptitude, and verbal skills. Top 30 advance."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Coding Challenge",
        "timeLimit": "1 hour",
        "objective": "Focus on programming and algorithmic thinking. Top 10 advance."
      },
      {
        "roundNumber": 3,
        "roundDescription": "HR Interview",
        "timeLimit": "1 hour 30 mins",
        "objective": "Evaluate communication skills and confidence. Top 2 participants awarded."
      }
    ],
    "callManager": "Mrithika"
  },
  {
    "id": "3",
    "eventName": "PROMPTY",
    "type": "Technical",
    "eventType": "Team (2-3)",
    "duration": "2 hours",
    "timeSlot": "12:30PM - 2:30PM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Image Generation",
        "timeLimit": "15 mins + 5 mins submission",
        "objective": "Create AI-generated images based on prompts."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Reverse Image Generation",
        "timeLimit": "15 mins + 10 mins validation",
        "objective": "Regenerate images created by competitors. Top 7 advance."
      },
      {
        "roundNumber": 3,
        "roundDescription": "Business Pitch Presentation",
        "timeLimit": "1 hour 40 mins",
        "objective": "Present a business pitch using AI-generated images."
      }
    ],
    "callManager": "Livesh"
  },
  {
    "id": "4",
    "eventName": "FRONTEND BATTLE",
    "type": "Technical",
    "eventType": "Team (2-3)",
    "duration": "2 hours",
    "timeSlot": "9AM - 11AM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Clone a classic static website",
        "timeLimit": "1 hour 15 mins",
        "objective": "Replicate a classic static website’s design with focus on visual elements."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Create a website for the DEVS Club",
        "timeLimit": "1 hour 15 mins",
        "objective": "Design a functional and appealing website with sections like Home, Events, Members, Contact."
      }
    ],
    "callManager": "Mano"
  },
  {
    "id": "5",
    "eventName": "BUILD BATTLE ROYALE",
    "type": "Technical",
    "eventType": "Individual",
    "duration": "2 hours",
    "timeSlot": "12:30PM - 2:30PM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Quiz on PC building and hardware",
        "timeLimit": "30 mins",
        "objective": "Assess foundational knowledge in PC hardware and building."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Hands-on PC Build",
        "timeLimit": "1 hour",
        "objective": "Participants assemble, connect, and boot a PC. Fastest participant wins."
      }
    ],
    "callManager": "Anand"
  },
  {
    "id": "6",
    "eventName": "IOT Workshop",
    "type": "Workshop",
    "eventType": "Workshop",
    "duration": "9AM - 2:45PM",
    "timeSlot": "8:30AM - 2:45PM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Introduction to IoT",
        "timeLimit": "9:00AM - 9:15AM",
        "objective": "Learn the fundamentals of IoT systems and applications."
      },
      {
        "roundNumber": 2,
        "roundDescription": "IoT Protocols and Sensor Usage",
        "timeLimit": "10:30AM - 11:00AM",
        "objective": "Overview of IoT protocols and usage of sensors."
      },
      {
        "roundNumber": 3,
        "roundDescription": "Hands-On Session",
        "timeLimit": "11:30AM - 2:45PM",
        "objective": "Hands-on projects with IoT and Arduino."
      }
    ],
    "callManager": "Thiru",
    "price": "INR100"
  },
  {
    "id": "7",
    "eventName": "DEVSPRINT",
    "type": "Technical",
    "eventType": "Team (4)",
    "duration": "5 hours",
    "timeSlot": "9AM - 2PM",
    "day": "Day 1",
    "rounds": [],
    "callManager": "Dhiksha"
  },
  {
    "id": "8",
    "eventName": "OPEN MIC",
    "type": "Non-Technical",
    "eventType": "Individual",
    "duration": "2 hours",
    "timeSlot": "9AM - 11AM",
    "day": "Day 2",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "The Icebreaker Challenge",
        "timeLimit": "30 mins",
        "objective": "Participants showcase their talents in a quick-fire format."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Personality Impersonation",
        "timeLimit": "45 mins",
        "objective": "Impersonate famous personalities and answer questions."
      },
      {
        "roundNumber": 3,
        "roundDescription": "Surprise Talent Showdown",
        "timeLimit": "30 mins",
        "objective": "Perform random talents drawn from a hat."
      }
    ],
    "callManager": "Dhiksha"
  },
  {
    "id": "9",
    "eventName": "VIDEO SHOWDOWN",
    "type": "Technical",
    "eventType": "Individual",
    "duration": "5 hours (online) + 2 hours (offline)",
    "timeSlot": "9AM - 11AM",
    "day": "Day 2",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Online video editing on assigned movie or celebrity",
        "timeLimit": "5 hours",
        "objective": "Participants create a video highlighting an assigned topic."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Offline trailer-cut video editing",
        "timeLimit": "2 hours",
        "objective": "Edit videos in person with a specific genre assigned via chit draw."
      }
    ],
    "callManager": "Adhithya"
  },
  {
    "id": "10",
    "eventName": "CONTENT CREATION WORKSHOP",
    "type": "Workshop",
    "eventType": "Workshop",
    "duration": "9AM - 12PM",
    "day": "Day 2",
    "timeSlot": "9AM - 12PM",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Content Creation and YouTube Basics",
        "timeLimit": "1 hour",
        "objective": "Learn content creation, audience engagement, and YouTube channel setup."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Monetization Strategies",
        "timeLimit": "1 hour",
        "objective": "Explore monetization techniques on YouTube."
      }
    ],
    "callManager": "Livesh",
    "price": "INR50"
  },
  {
    "id": "11",
    "eventName": "TECH TREK",
    "type": "Technical",
    "day": "Day 2",
    "eventType": "Team (2-3)",
    "duration": "2 hours",
    "timeSlot": "9AM - 11AM",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Treasure Hunt",
        "timeLimit": "2 hours",
        "objective": "Solve tech-related clues in a campus-wide treasure hunt."
      }
    ],
    "callManager": "Mrithika"
  },
  {
    "id": "12",
    "eventName": "SCRIPTED BY AI",
    "type": "Technical",
    "day": "Day 2",
    "eventType": "Team (2-4)",
    "duration": "1 hour",
    "timeSlot": "12:30PM - 1:30PM",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Story Development and Video Creation",
        "timeLimit": "Varies within 1 hour",
        "objective": "Use AI tools for story and video creation."
      }
    ],
    "callManager": "Sri Praveen"
  },
  {
    "id": "13",
    "eventName": "LLM Workshop",
    "day": "Day 2",
    "type": "Workshop",
    "eventType": "Workshop",
    "duration": "9AM - 2PM",
    "timeSlot": "9AM - 2PM",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Introduction to Large Language Models",
        "timeLimit": "9:00AM - 10:00AM",
        "objective": "Understand LLMs and their applications."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Hands-On with RAG and Gemini",
        "timeLimit": "10:10AM - 12:00PM",
        "objective": "Learn about RAG and LLM applications with Gemini."
      }
    ],
    "callManager": "Nithya",
    "price": "INR100"
  }
]


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

export const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="cursor-none min-h-screen bg-[#c3ff00] bg-center text-black">
      <Navbar />
      <div className='mx-[5vw] my-6 md:mx-[10vw]'>
        <CyberpunkButton onClick={() => navigate('/home')}>
          <i className="bi bi-box-arrow-left mr-1"></i> Back
        </CyberpunkButton>
      </div>
      <div className="container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-4xl md:text-6xl text-black lg:text-[6vw] font-bold text-center mb-8 md:mb-16 underline">
          EVENTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {events.map(event => (
            <div key={event.id} className="w-full my-4">
              <CyberpunkEventCard
                event={event}
                idh={event.id}
                dur = {event.timeSlot}
                evnt={event.eventName}
                obj={event.rounds && event.rounds.length > 0 ? event.rounds[0].objective : "Objective not available"}
                type={event.type}
                image={`@/components/assets/${event.eventName}` || "/placeholder.svg"}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};