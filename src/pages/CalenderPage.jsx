import React from "react";
import { useGlobalContext } from "../context/CalenderContext";
import CalenderHeader from "../components/CalenderHeader";

const CalenderPage = () => {
  const { weekDays, monthArray } = useGlobalContext();

  return (
    <div className=" border-2 border-green-800 ">
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
              } w-24 h-24 text-center flex justify-center items-center  `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalenderPage;
