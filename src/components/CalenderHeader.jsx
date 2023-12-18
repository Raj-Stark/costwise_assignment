import React from "react";
import { useGlobalContext } from "../context/CalenderContext";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const CalenderHeader = () => {
  const { changeMonth, dateObj } = useGlobalContext();

  const showMonthAndYear = () => {
    const monthAndYear = `${dateObj.toLocaleDateString("en-US", {
      month: "long",
    })} ${dateObj.getFullYear()}`;

    return monthAndYear;
  };
  return (
    <div className="p-4 mt-16 h-10 flex justify-between items-center space-x-10">
      <button
        className=" px-6 bg-green-600  rounded"
        onClick={() => changeMonth("DEC")}
      >
        <FaAngleLeft size={26}></FaAngleLeft>
      </button>
      <p className="text-green-600 text-lg  lg:text-3xl font-bold">{showMonthAndYear()}</p>
      <button
        className=" px-6  bg-green-600  rounded"
        onClick={() => changeMonth("INC")}
      >
        <FaAngleRight size={26}></FaAngleRight>
      </button>
    </div>
  );
};

export default CalenderHeader;
