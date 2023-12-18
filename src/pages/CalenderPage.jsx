import React, { useState } from "react";
import { useGlobalContext } from "../context/CalenderContext";
import CalenderHeader from "../components/CalenderHeader";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import AddEvent from "../components/AddEvent";
import ShowEvent from "../components/ShowEvent";

const CalenderPage = () => {
  const {
    weekDays,
    monthArray,
    openAddEventModal,
    addEventModal,
    eventsArray,
    openEventModal,
    showEventModal,
    currentMonthIdx,
  } = useGlobalContext();

  const date = new Date();
  const today = date.getDate();
  return (
    <div className="relative">
      <div className=" text-white  grid grid-cols-7 grid-rows-8  justify-items-center  mt-5 px-10 ">
        <div className=" col-span-7 mb-10">
          <CalenderHeader></CalenderHeader>
        </div>
        {weekDays.map((day, i) => {
          return (
            <div
              className=" p-1 text-white  w-10  text-[8px] md:text-sm  lg:text-lg lg:w-28 md:w-20 lg:p-2  text-center bg-green-600 rounded-full "
              key={i}
            >
              {day}
            </div>
          );
        })}
        {monthArray.map((item, i) => {
          const eventExist = eventsArray.find(
            (eventItem) => eventItem.id === item.id
          );

          return (
            <div
              key={i}
              className={` mt-4 rounded  text-xl ${
                item.date === today &&
                currentMonthIdx === 0 &&
                "border-4 border-green-500 text-green-500"
              }${
                item !== "" ? " bg-black" : "bg-white"
              } w-8 h-8 md:w-18 md:h-18 lg:w-24 lg:h-24  `}
            >
              <p className=" px-1 text-sm py-1 md:text-lg ">{item.date}</p>
              {item !== "" && !eventExist && (
                <div className=" flex justify-center">
                  <button
                    className=" text-[6px] md:text-lg xl:text-xl   text-white hover:text-green-600 "
                    onClick={() => openAddEventModal(item)}
                  >
                    <MdAddBox />
                  </button>
                </div>
              )}
              {item !== "" && eventExist && (
                <div className=" flex justify-center">
                  <button
                    className=" text-[6px] md:text-lg xl:text-xl   text-green-500"
                    onClick={() => openEventModal(item)}
                  >
                    <BsFillCalendar2CheckFill />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {addEventModal && (
        <div className="backdrop-blur-sm absolute top-5 w-full h-full flex justify-center items-center">
          <AddEvent></AddEvent>
        </div>
      )}
      {showEventModal && (
        <div className="backdrop-blur-sm absolute top-5 w-full h-full flex justify-center items-center">
          <ShowEvent></ShowEvent>
        </div>
      )}
    </div>
  );
};

export default CalenderPage;
