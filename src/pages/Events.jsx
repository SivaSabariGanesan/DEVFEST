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
    "duration": "2.5 hours",
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
    "duration": "2.5 hours",
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
    "callManager": "Manovikram"
  },
  {
    "id": "5",
    "eventName": "BUILD BATTLE ROYALE",
    "type": "Technical",
    "eventType": "Individual",
    "duration": "2 hours",
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
    "eventName": "SCRIPTED BY AI",
    "type": "Technical",
    "eventType": "Team (2-4)",
    "duration": "2 hours",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Story Development and Video Creation",
        "timeLimit": "Varies within 2 hours",
        "objective": "Use AI tools for story and video creation. Judging based on creativity, AI use, presentation, and engagement."
      }
    ],
    "callManager": "Sri Praveen"
  },
  {
    "id": "7",
    "eventName": "QUIZZY",
    "type": "Technical",
    "eventType": "Team (2-3)",
    "duration": "2 hours",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Basic MCQ Quiz",
        "timeLimit": "Varies within 2 hours",
        "objective": "Teams answer tech-related MCQs to qualify for the final round."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Common Quiz",
        "timeLimit": "Varies within 2 hours",
        "objective": "Teams face same set of questions; speed and accuracy determine the winner."
      }
    ],
    "callManager": "Thirumurugan"
  },
  {
    "id": "8",
    "eventName": "VIDEO SHOWDOWN",
    "type": "Technical",
    "eventType": "Individual",
    "duration": "5 hours (online) + 150 mins (offline)",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Online video editing on assigned movie or celebrity",
        "timeLimit": "5 hours",
        "objective": "Participants create a video highlighting an assigned topic. Top 12 advance."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Offline trailer-cut video editing",
        "timeLimit": "150 mins",
        "objective": "Edit videos in person with a specific genre assigned via chit draw."
      }
    ],
    "callManager": "Adhithya"
  },
  {
    "id": "9",
    "eventName": "PHOTOSHOP",
    "type": "Technical",
    "eventType": "Team",
    "duration": "1.5 hours",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Poster Design Challenge",
        "timeLimit": "1 hour",
        "objective": "Create a promotional poster for a DEVfest event using Adobe Photoshop."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Creative Remix Challenge",
        "timeLimit": "30 mins",
        "objective": "Remix pre-designed graphics into a new promotional poster."
      }
    ],
    "callManager": "Henry"
  },
  {
    "id": "10",
    "eventName": "TECHTREK",
    "type": "Technical",
    "eventType": "Team (2-3)",
    "duration": "2 hours",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Tech-themed treasure hunt",
        "timeLimit": "2 hours",
        "objective": "Locate hidden QR codes around campus to solve tech-related clues."
      }
    ],
    "callManager": "Mrithika"
  },
  {
    "id": "11",
    "eventName": "OPEN MIC",
    "type": "Non-Technical",
    "eventType": "Individual",
    "duration": "3 hours",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Showcase talent",
        "timeLimit": "5 mins per participant",
        "objective": "Encourage creativity and self-expression through performances."
      }
    ],
    "callManager": "Dhiksha"
  },
  {
    "id": "12",
    "eventName": "WORKSHOPS",
    "type": "Workshop",
    "eventType": "Workshop",
    "duration": "Varies",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "IoT Workshop",
        "timeLimit": "8:30AM - 2:45PM (November 5)",
        "objective": "Learn the fundamentals of IoT systems and applications.",
        "callManager": "Thirumurugan",
        "price": "INR100"
      },
      {
        "roundNumber": 2,
        "roundDescription": "LLM Workshop",
        "timeLimit": "9AM - 2PM (November 6)",
        "objective": "Learn the fundamentals of Large Language Models and their applications.",
        "callManager": "Nithya Shree AK",
        "price": "INR100"
      },
      {
        "roundNumber": 3,
        "roundDescription": "MICRO SAAS Workshop",
        "timeLimit": "9AM - 12PM",
        "objective": "Explore building micro SaaS applications.",
        "callManager": "Nithya Shree AK",
        "price": "INR50"
      },
      {
        "roundNumber": 4,
        "roundDescription": "YOUTUBE AS A CAREER Workshop",
        "timeLimit": "9AM - 12PM",
        "objective": "Learn about content creation and monetization on YouTube.",
        "callManager": "Livesh",
        "price": "INR50"
      }
    ]
  },
  {
    "id": "13",
    "eventName": "DEV SPRINT [DEVFest'24 EXPO]",
    "type": "Expo",
    "eventType": "Individual",
    "duration": "5 hours",
    "rounds": [],
    "time": "9AM - 2PM",
    "callManager": "Dhiksha"
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
        <CyberpunkButton onClick={() => navigate('/')}>
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
                dur = {event.duration}
                evnt={event.eventName}
                obj={event.rounds && event.rounds.length > 0 ? event.rounds[0].objective : "Objective not available"}
                type={event.type}
                image={event.image || "/placeholder.svg"}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};