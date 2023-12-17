import React from "react";
import { useGlobalContext } from "../context/CalenderContext";

const CalenderHeader = () => {
  const { changeMonth, dateObj } = useGlobalContext();

  const showMonthAndYear = () => {
    const monthAndYear = `${dateObj.toLocaleDateString("en-US", {
      month: "long",
    })} ${dateObj.getFullYear()}`;

    return monthAndYear;
  };
  return (
    <div className="p-4 mt-16 h-10 flex justify-between items-center">
      <button
        className=" px-6 bg-green-600  rounded"
        onClick={() => changeMonth("DEC")}
      >
        Back
      </button>
      <p className="text-green-600  text-3xl font-bold">{showMonthAndYear()}</p>
      <button
        className=" px-6 bg-green-600  rounded"
        onClick={() => changeMonth("INC")}
      >
        Forward
      </button>
    </div>
  );
};

export default CalenderHeader;
