import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Clock, Users, User, Zap } from "lucide-react";
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Event data (unchanged)
const eventsWithId = [
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
    "eventType": "Team (2)",
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
    "id": "15",
    "eventName": "PIXEL WARS",
    "type": "Technical",
    "eventType": "Team (1-2)",
    "duration": "2 hours",
    "timeSlot": "12:30PM - 2:30PM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Online Poster Competition",
        "timeLimit": "15 mins + 5 mins submission",
        "objective": "Participants must use design tools such as Canva, Photoshop, Illustrator, or any other software, although Photoshop and Illustrator are highly preferred. The size of the file must not exceed 10MB."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Offline Poster Competition",
        "timeLimit": "15 mins + 10 mins validation",
        "objective": "In this round, you will create a poster based on the given theme in offline mode. You may use any design software. Although Photoshop and Illustrator are highly preferred. The size of the file must not exceed 10MB."
      }
    ],
    "callManager": "Darshan"
  },
  {
    "id": "4",
    "eventName": "FRONTEND BATTLE",
    "type": "Technical",
    "eventType": "Team (2)",
    "duration": "2 hours",
    "timeSlot": "9AM - 11AM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Clone a classic static website",
        "timeLimit": "1 hour 15 mins",
        "objective": "Replicate a classic static website's design with focus on visual elements."
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
    "eventType": "Team (2)",
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
  },
  {
    "id": "14",
    "eventName": "MicroSaaS Workshop",
    "type": "Workshop",
    "eventType": "Workshop",
    "duration": "9AM - 12:30PM",
    "timeSlot": "9AM - 12:30PM",
    "day": "Day 1",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Welcome & Introduction",
        "timeLimit": "9:00AM - 9:30AM",
        "objective": "How do software companies make money? SaaS Introduction, Examples, MicroSaaS Introduction, Examples, Opportunity in MicroSaaS, Current myths around MicroSaaS"
      },
      {
        "roundNumber": 2,
        "roundDescription": "Validating MicroSaaS Ideas",
        "timeLimit": "9:30AM - 10:00AM",
        "objective": "Identifying niche markets and potential MicroSaaS ideas. Tools and techniques for market research and validating ideas. Understanding the audience"
      },
      {
        "roundNumber": 3,
        "roundDescription": "Developing an MVP Mindset",
        "timeLimit": "10:00 AM - 10:30 AM",
        "objective": "How to think about an MVP, Why is MVP important, How to choose the right model for your MicroSaaS product"
      },
      {
        "roundNumber": 4,
        "roundDescription": "Product Development Approaches",
        "timeLimit": "10:45 AM - 11:00 AM",
        "objective": "Choosing a tech stack: Low-code/no-code vs custom development. MVP development with a focus on simplicity and key features. Example of building a quick MVP using popular tools."
      },
      {
        "roundNumber": 5,
        "roundDescription": "Fireside Chat with Sanjeev + Q & A",
        "timeLimit": "11:15 AM - 12:00 PM",
        "objective": "Guest speaker Sanjeev (MicroSaaS founder or industry expert) shares his journey. Open Q&A session for participants to ask questions about challenges, growth, and scaling"
      }
    ],
    "callManager": "Kovendhan",
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
  const navigate = useNavigate();

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
    <div className={` absolute inset-0 bg-[#c3ff00] bg-cover bg-center`}>
      <Navbar />
      <div className='mx-[5vw] my-6 md:mx-[10vw]'>
        {/* <Link to="/events"><CyberpunkButton ><i className="bi bi-box-arrow-left mr-1"></i> Back</CyberpunkButton></Link> */}
        <CyberpunkButton onClick={() => navigate(-1)}>
          <i className="bi bi-box-arrow-left mr-1"></i> Back
        </CyberpunkButton>
      </div>
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
        <CyberpunkCard className="mb-12 max-w-4xl mx-auto">
          <div className="border-b-2 border-black pb-4 mb-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center">
                  <Zap className="mr-2 animate-pulse" />
                  <GlitchText>{event.eventName}</GlitchText>
                </h1>
                <p className="text-lg">{event.type}</p>
              </div>
              <h1 className='text-xl'>Registrations available soon</h1>
              {/* <CyberpunkButton onClick={handleRegister}>Register Now</CyberpunkButton> */}
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
                <GlitchText>{event.type==='Technical'?'Rounds':'Sessions'}</GlitchText>
              </h3>
              {event.rounds.map((round, index) => (
                <CyberpunkCard key={index} className="mt-4 hover:bg-black hover:text-[#c3ff00] transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2">{event.type==='Technical'?`Round ${round.roundNumber}`:`Session ${round.roundNumber}`}</h4>
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
                <Clock className="h-5 w-5 group-hover:text-[#00ffff] group-hover:animate-spin" />
                <span className="group-hover:text-[#00ffff] transition-colors duration-300">{event.day} - {event.timeSlot}</span>
              </div>
              <div className="flex items-center gap-2 group">
                <User className="h-5 w-5 group-hover:text-[#ff00ff] transition-colors duration-300" />
                <span className="group-hover:text-[#ff00ff] transition-colors duration-300">Call Manager: {event.callManager}</span>
              </div>
            </div>
          </div>
        </CyberpunkCard>
      </div>
      <Footer />
    </div>
  );
}