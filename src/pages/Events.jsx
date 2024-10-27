import React from 'react';
import { CyberpunkEventCard } from "../components/Card3d";
import Navbar from '../components/Navbar';
import { Footer } from '@/components/Footer';

const events = [
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

export const Events = () => {
  return (
    <div className="cursor-none min-h-screen bg-[#c3ff00] bg-center text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-4xl md:text-6xl text-black lg:text-[6vw] font-bold text-center mb-8 md:mb-16 underline">
          EVENTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {events.map(event => (
            <div key={event.id} className="w-full my-4">
              <CyberpunkEventCard
                event = {event}
                idh={event.id}
                evnt={event.eventName}
                obj={event.rounds[0].objective}
                type={event.type}
                image="/placeholder.svg" // Replace with actual image path
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};