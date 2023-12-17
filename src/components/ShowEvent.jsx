import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

import { useGlobalContext } from "../context/CalenderContext";
import EventTab from "./EventTab";

const ShowEvent = () => {
  const { currentModalEventData, months  , closeEventModal , openAddEventModal } = useGlobalContext();

  const { id, allEvents, date, month, year } = currentModalEventData;

  return (
    <div className=" backdrop-blur-xl shadow-xl absolute top-10 h-auto w-[400px]  border-2 border-black p-6 py-6 bg-black text-white rounded-md">
      <div className=" flex justify-between text-white">
        <h2>Events for {`${date} ${months[month]}  ${year}`}</h2>
        <button className=" text-red-500" onClick={() => closeEventModal()}>
          <FaWindowClose size={26}></FaWindowClose>
        </button>
      </div>

      <div className="mt-6 space-y-2 ">
        {allEvents.map((item, i) => {
          return <EventTab key={item.eventId} item={item}></EventTab>;
        })}
      </div>

      <div className="mt-20 bg-green-500 inline-block p-1 px-2 rounded-md">
        <button onClick={()=> openAddEventModal(currentModalEventData)} >Add More Events</button>
      </div>
    </div>
  );
};

export default ShowEvent;
