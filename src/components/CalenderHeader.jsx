import React, { useState } from "react";
import { useGlobalContext } from "../context/CalenderContext";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";



const CalenderHeader = () => {
  const { changeMonth, dateObj, months , selectMonthFromDropdown } = useGlobalContext();
  const [selectedMonth, setSelectedMonth] = useState({ id: '0', label: 'December' });

  const showMonthAndYear = () => {
    const monthAndYear = `${dateObj.toLocaleDateString("en-US", {
      month: "long",
    })} ${dateObj.getFullYear()}`;

    return monthAndYear;
  };

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    const selectedMonthObject = months.find((item) => item.id === Number(selectedValue));
    setSelectedMonth({id:selectedValue.id , label:selectedValue.label});
    selectMonthFromDropdown(selectedMonthObject);
  };

  return (
    <div className=" flex flex-col">
      <div className="p-4 mt-16 h-10 flex justify-between items-center space-x-10">
        <button
          className=" px-6 bg-green-600  rounded"
          onClick={() => changeMonth("DEC")}
        >
          <FaAngleLeft size={26}></FaAngleLeft>
        </button>
        <p className="text-green-600 text-lg  lg:text-3xl font-bold">
          {showMonthAndYear()}
        </p>
        <button
          className=" px-6  bg-green-600  rounded"
          onClick={() => changeMonth("INC")}
        >
          <FaAngleRight size={26}></FaAngleRight>
        </button>
      </div>

      <select
        name=""
        id=""
        className=" bg-black text-white rounded-md p-1 px-2 mt-2"
        onChange={handleMonthChange}
        value={selectedMonth.label}
      >

        {months.map((item) => {
          return <option key={item.id}  value={item.id} >{item.label}</option>;
        })}
      </select>
    </div>
  );
};

export default CalenderHeader;
