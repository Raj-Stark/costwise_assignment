import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

import { useGlobalContext } from "../context/CalenderContext";
import EventTab from "./EventTab";

const ShowEvent = () => {
  const { eventsArray, showEventModalId, months, closeEventModal, openAddEventModal  } =
    useGlobalContext();

    const currentDateEventData = eventsArray.find((item)=> item.id === showEventModalId);

    if(!currentDateEventData){
       closeEventModal();
       return;
    }
        

  const { id, allEvents, date, month, year } = currentDateEventData;

  console.log(currentDateEventData)

  return (
    <div className="  h-auto w-[400px]  border-2 border-white p-6 py-4 bg-black text-white rounded-md">
      <div className=" flex justify-between text-white">
        <h2>Events for {`${date} ${month}  ${year}`}</h2>
        <button className=" text-red-500" onClick={() => closeEventModal()}>
          <FaWindowClose size={26}></FaWindowClose>
        </button>
      </div>

      <div className="mt-6 space-y-2 ">
        {allEvents.map((item, i) => {
          return <EventTab key={item.eventId} dateId={id} item={item}></EventTab>;
        })}
      </div>

      <button
        className="mt-20 bg-green-500 inline-block p-1 px-2 rounded-md"
        onClick={() => openAddEventModal(currentDateEventData)}
      >
        Add More Events
      </button>
    </div>
  );
};

export default ShowEvent;
