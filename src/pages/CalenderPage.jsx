import React from "react";
import { useGlobalContext } from "../context/CalenderContext";
import CalenderHeader from "../components/CalenderHeader";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";

const CalenderPage = () => {
  const { weekDays, monthArray } = useGlobalContext();

  return (
    <div>
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
              <p className=" px-1 py-1">{item}</p>
              {item !== "" && (
                <div className=" flex justify-center">
                  <button className=" text-xs  text-white hover:text-green-600">
                    <MdAddBox size={26} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalenderPage;

{
}
