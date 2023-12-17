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
    <div className=" bg-red-400 p-4 px-10 mt-16 h-10 flex justify-between items-center">
      <button
        className=" px-6 bg-green-600  rounded"
        onClick={() => changeMonth("DEC")}
      >
        Back
      </button>
      <p>{showMonthAndYear()}</p>
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
