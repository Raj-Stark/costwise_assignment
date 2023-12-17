import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "../context/CalenderContext";
import { FaAngleDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShowEvent = () => {
  const { currentModalEventData, months } = useGlobalContext();

  const { id, allEvents, date, month, year } = currentModalEventData;

  console.log(currentModalEventData);

  return (
    <div className=" backdrop-blur-xl shadow-xl absolute top-10 h-auto w-[400px]  border-2 border-black p-6 py-6 bg-black text-white rounded-md">
      <div className=" flex justify-between text-white">
        <h2>Events for {`${date} ${months[month]}  ${year}`}</h2>
        <button className=" text-red-500" onClick={() => closeAddEventModal()}>
          <FaWindowClose size={26}></FaWindowClose>
        </button>
      </div>

      <div className=" bg-green-500 mt-6 p-2 rounded-md flex justify-between items-center ">
        {allEvents.map((item, i) => {
          return <div key={i}>{item.subject}</div>;
        })}
        <div className=" flex space-x-4">
            <FaAngleDown></FaAngleDown>
            <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default ShowEvent;
