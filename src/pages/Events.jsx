import React from 'react';
import { AnimatedPinDemo } from "../components/Card3d";
import Navbar from '../components/Navbar';

const events = [
    {
      "eventName": "Front End Competition",
      "type": "Technical",
      "eventType": "Team (2-3)",
      "duration": "2 hours",
      "rounds": [
        {
          "roundNumber": 1,
          "roundDescription": "Creating a Website for the DEVS Club",
          "timeLimit": "1 hour 45 mins",
          "objective": "Participants will design a functional and visually appealing website for the DEVS club, showcasing the club’s events, activities, and initiatives.",
          "sections": [
            "Home: Overview of the DEVS club and its mission",
            "Events: Information about upcoming and past events",
            "Members: A section highlighting key members of the club",
            "Contact: A simple contact form or details for reaching out"
          ]
        }
      ],
      "hosts": ["Manovikram K", "Kaviya"],
      "callManager": "Lithesh"
    },
    {
      "type": "Technical",
      "eventName": "Tech Quiz",
      "eventType": "Individual",
      "duration": "1 hour",
      "rounds": [
        {
          "roundNumber": 1,
          "roundDescription": "Tech knowledge quiz",
          "timeLimit": "1 hour",
          "objective": "Test participants' knowledge of various tech-related topics."
        }
      ],
      "hosts": ["John Doe", "Alice"],
      "callManager": "Sophia"
    },
    {
      "type": "Technical",
      "eventName": "AI Hackathon",
      "eventType": "Team (2-4)",
      "duration": "24 hours",
      "rounds": [
        {
          "roundNumber": 1,
          "roundDescription": "Develop an AI solution for a real-world problem",
          "timeLimit": "24 hours",
          "objective": "Build an AI-powered solution to tackle a specific problem."
        }
      ],
      "hosts": ["David", "Emily"],
      "callManager": "Anita"
    },
    {
      "type": "Technical",
      "eventName": "UI/UX Design Challenge",
      "eventType": "Individual",
      "duration": "3 hours",
      "rounds": [
        {
          "roundNumber": 1,
          "roundDescription": "Design a mobile app interface",
          "timeLimit": "2 hours 30 mins",
          "objective": "Create a user-friendly and visually appealing mobile app design."
        }
      ],
      "hosts": ["Lucas", "Sophia"],
      "callManager": "Henry"
    },
    {
      "type": "Non - Technical",
      "eventName": "Coding Marathon",
      "eventType": "Team (1-3)",
      "duration": "12 hours",
      "rounds": [
        {
          "roundNumber": 1,
          "roundDescription": "Solve algorithmic challenges",
          "timeLimit": "12 hours",
          "objective": "Solve a series of algorithmic challenges of increasing difficulty."
        }
      ],
      "hosts": ["Brian", "Grace"],
      "callManager": "Daniel"
    },
    {
      "type": "Workshop",
      "eventName": "Cybersecurity Workshop",
      "eventType": "Workshop",
      "duration": "6 hours",
      "rounds": [
        {
          "roundNumber": 1,
          "roundDescription": "Hands-on cybersecurity session",
          "timeLimit": "6 hours",
          "objective": "Learn and implement real-world cybersecurity measures."
        }
      ],
      "hosts": ["William", "Jessica"],
      "callManager": "Ethan"
    }
  ]


export const Events = () => {
  return (
    <div className="cursor-none min-h-screen">
        <Navbar />
      <h1 className="text-[6vw] underline y text-center pb-24">EVENTS</h1>
      <div className='flex flex-wrap justify-center gap-y-20 items-center mx-auto max-w-7xl'>
        {events.map(event => 
          <AnimatedPinDemo evnt = {event.eventName} obj = {event.rounds[0].objective} type={event.type} />
          )
        }
      </div>
    </div>
  );
};
