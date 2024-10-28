import React, { useState } from 'react';
import { CyberpunkEventCard } from "@/components/Card3d";
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import mic from '@/assets/OPENMIC.png'
import pt from '@/assets/pt.jpg';
import qz from '@/assets/qz.png';
import trek from '@/assets/tech.png';
import llm from '@/assets/llm.png';
import pw from '@/assets/pw.png';
import vs from '@/assets/vs.png';
import ms from '@/assets/ms.png';
import yt from '@/assets/yt.png';
import mh from '@/assets/mh.png';
import sai from '@/assets/sai.jpg';

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
    "callManager": "Vignesh",
    "overall_overview": "Two-person team coding competition featuring role-switching challenges and unique constraints. Tests collaboration, problem-solving, and adaptability under time pressure."
  },
  {
    "id": "2",
    "eventName": "MOCKHIRE",
    "image":mh,
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
    "callManager": "Mrithika",
    "overall_overview": "Simulated hiring process with aptitude test, coding challenge, and HR interview. Tests technical and soft skills in realistic job recruitment scenario."
  },
  {
    "id": "3",
    "eventName": "PROMPTY",
    "image": pt,
    "type": "Non - Technical",
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
    "callManager": "Livesh",
    "overall_overview": "AI image generation competition combining creativity and business acumen. Teams create images and develop business pitches using AI tools."
  },
  {
    "id": "15",
    "eventName": "PIXEL WARS",
    "image": pw,
    "type": "Non - Technical",
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
    "callManager": "Darshan",
    "overall_overview": "Digital design competition featuring online and offline poster creation rounds using professional design tools like Photoshop and Illustrator."
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
    "callManager": "Mano",
    "overall_overview": "Web development competition where teams clone a static website and create an original site for DEVS Club."
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
    "callManager": "Anand",
    "overall_overview": "PC building competition testing hardware knowledge through quiz and hands-on assembly challenge. Speed and accuracy are key."
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
    "price": "INR100",
    "overall_overview": "Comprehensive IoT workshop covering fundamentals, protocols, and hands-on Arduino projects. Practical experience with IoT systems and sensors."
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
    "callManager": "Dhiksha",
    "overall_overview": "Five-hour team development sprint challenging groups of four to collaborate on technical projects."
  },
  {
    "id": "8",
    "eventName": "OPEN MIC",
    "image": mic,
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
    "callManager": "Dhiksha",
    "overall_overview": "Talent showcase featuring quick performances, celebrity impersonations, and surprise challenges. Tests versatility and stage presence."
  },
  {
    "id": "9",
    "eventName": "VIDEO SHOWDOWN",
    "type": "Technical",
    "image": vs,
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
    "callManager": "Adhithya",
    "overall_overview": "Video editing competition with online and offline rounds. Create highlight reels and genre-specific trailers."
  },
  {
    "id": "16",
    "image": qz,
    "eventName": "QUIZZY",
    "type": "Technical",
    "eventType": "Individual",
    "duration": "1 hours",
    "timeSlot": "12:30 PM - 1:30 PM",
    "day": "Day 2",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Preliminary Quiz (Offline)",
        "timeLimit": "30 minutes",
        "objective": "This is the first elimination round where participants answer 30 multiple-choice questions (MCQs) focused on technical knowledge, logical reasoning, and general awareness in technology. This round aims to filter out the top 50 performers for the next stage."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Advanced Technical Quiz(FINAL)",
        "timeLimit": "30 minutes",
        "objective": "In this round, participants will face 2 sets of technical questions—one focused on core concepts, and another testing problem-solving skills in technology domains such as coding, algorithms, and networking."
      }
    ],
    "callManager": "Dhanush",
    "overall_overview": "Technical quiz competition testing knowledge in coding, algorithms, and technology through MCQs and advanced problem-solving questions."
  },
  {
    "id": "10",
    "eventName": "CONTENT CREATION WORKSHOP",
    "type": "Workshop",
    "image": yt,
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
    "price": "INR50",
    "overall_overview": "Workshop on YouTube content creation, covering channel setup, audience engagement, and monetization strategies."
  },
  {
    "id": "11",
    "image": trek,
    "eventName": "TECH TREK",
    "type": "Non - Technical",
    "day": "Day 2",
    "eventType": "Team (2-3)",
    "duration": "2 hours",
    "timeSlot": "9AM - 12PM",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Treasure Hunt",
        "timeLimit": "2 hours",
        "objective": "Solve tech-related clues in a campus-wide treasure hunt."
      }
    ],
    "callManager": "Mrithika",
    "overall_overview": "Campus-wide tech treasure hunt where teams solve technology-related clues and puzzles."
  },
  {
    "id": "12",
    "eventName": "SCRIPTED BY AI",
    "image": sai,
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
    "callManager": "Sri Praveen",
    "overall_overview": "Teams use AI tools to develop stories and create videos within one hour."
  },
{
    "id": "13",
    "image": llm,
    "eventName": "LLM Workshop",
    "type": "Workshop",
    "eventType": "Workshop",
    "duration": "9AM - 2PM",
    "timeSlot": "9AM - 2PM",
    "day": "Day 2",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Introduction to Language Models",
        "timeLimit": "1 hour",
        "objective": "Explore the basics of large language models and applications."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Hands-on NLP Task with LLMs",
        "timeLimit": "1 hour",
        "objective": "Participants implement an NLP task using language models."
      }
    ],
    "callManager": "Sri Praveen",
    "price": "INR75",
    "overall_overview": "LLM Workshop introduces large language models and NLP tasks, including hands-on implementation for real-world applications in a three-hour session."
  },
  {
    "id": "14",
    "eventName": "MicroSaaS Workshop",
    "image" :ms,
    "type": "Workshop",
    "eventType": "Workshop",
    "duration": "9AM - 12:00PM",
    "timeSlot": "9AM - 12:00PM",
    "overall_overview":"The MicroSaaS Workshop equips participants with strategies for validating ideas, developing MVPs, choosing tech stacks, and insights from an industry expert.",
    "day": "Day 1",
    "overview": "This workshop is designed to equip participants with practical tools and strategies for developing and validating MicroSaaS ideas, setting them on a path to creating their own successful SaaS products in niche markets.",
    "rounds": [
      {
        "roundNumber": 1,
        "roundDescription": "Welcome & Introduction",
        "timeLimit": "9:00AM - 9:30AM",
        "objective": "Provide participants with foundational knowledge about how software companies generate revenue, introduce the concept of SaaS, explain MicroSaaS, and explore current opportunities and misconceptions within this niche."
      },
      {
        "roundNumber": 2,
        "roundDescription": "Validating MicroSaaS Ideas",
        "timeLimit": "9:30AM - 10:00AM",
        "objective": "Teach attendees techniques for identifying niche markets, generating MicroSaaS ideas, and validating these ideas through effective market research and audience analysis."
      },
      {
        "roundNumber": 3,
        "roundDescription": "Developing an MVP Mindset",
        "timeLimit": "10:00 AM - 10:30 AM",
        "objective": "Emphasize the importance of Minimum Viable Products (MVPs) for MicroSaaS, guiding participants on choosing the right model and adopting a lean approach to product development."
      },
      {
        "roundNumber": 4,
        "roundDescription": "Product Development Approaches",
        "timeLimit": "10:45 AM - 11:00 AM",
        "objective": "Explore product development options, comparing low-code/no-code tools versus custom development. A live example will demonstrate building a quick MVP with essential features."
      },
      {
        "roundNumber": 5,
        "roundDescription": "Fireside Chat with Sanjeev + Q & A",
        "timeLimit": "11:15 AM - 12:00 PM",
        "objective": "A special guest session featuring Sanjeev, an expert in the MicroSaaS space, who will share insights on overcoming challenges and achieving growth in the industry. Followed by an open Q&A."
      }
    ]
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
                image={`components/assets/${event.eventName}`}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};