import React from 'react';
import { EventCard } from "../components/Card";
import Navbar from '../components/Navbar';

export const Events = () => {
  return (
    <div className="cursor-none min-h-screen">
        <Navbar />
      <h1 className="text-[6vw] underline y text-center pb-24">EVENTS</h1>
      <div className='flex flex-wrap justify-center items-center gap-20 mx-auto max-w-7xl'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};
