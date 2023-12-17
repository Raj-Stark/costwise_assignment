import React, { useState } from "react";
import { useGlobalContext } from "../context/CalenderContext";
import CalenderHeader from "../components/CalenderHeader";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import AddEvent from "../components/AddEvent";

const CalenderPage = () => {
  const { weekDays, monthArray ,openAddEventModal , addEventModal } =
    useGlobalContext();
  return (
    <div className=" relative">
      <CalenderHeader></CalenderHeader>
      <div className=" text-white  grid grid-cols-7 grid-rows-7  justify-items-center  mt-5 px-10  ">
        {weekDays.map((day, i) => {
          return (
            <div
              className=" p-2 text-white  text-lg  w-28  text-center bg-green-600 rounded-full "
              key={i}
            >
              {day}
            </div>
          );
        })}
        {monthArray.map((item, i) => {
          return (
            <div
              key={i}
              className={` mt-4 rounded  text-xl ${
                item !== "" ? " bg-black" : "bg-white"
              } w-24 h-24  `}
            >
              <p className=" px-1 py-1">{item.date}</p>
              {item !== "" && (
                <div className=" flex justify-center">
                  <button
                    className=" text-xs  text-white hover:text-green-600"
                    onClick={() => openAddEventModal(item)}
                  >
                    <MdAddBox size={26} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {addEventModal && <AddEvent></AddEvent>}
    </div>
  );
};

export default CalenderPage;
