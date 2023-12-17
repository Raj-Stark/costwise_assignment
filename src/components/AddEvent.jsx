import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "../context/CalenderContext";

const AddEvent = () => {
  const { closeAddEventModal , currentDateOpenModalData:modalData , months } = useGlobalContext();

  
  return (
    <div className=" backdrop-blur-xl shadow-xl absolute top-10 h-auto w-[400px]  border-2 border-black p-6 py-6 bg-black text-white rounded-md">
      <div className=" flex justify-between">
        <h2 className=" text-lg font-medium">Add Event</h2>
        <button
          className=" text-red-500"
          onClick={() => closeAddEventModal()}
        >
          <FaWindowClose size={26}></FaWindowClose>
        </button>
      </div>

      <p>Date: {`${modalData.date} ${months[modalData.month]} ${modalData.year} `}</p>

      <form action="" className=" z-50 flex flex-col gap-4 mt-10">
        <input
          type="text"
          placeholder="Subject"
          className=" rounded-md border-2 border-black px-2 py-1"
        />
        <textarea
          placeholder="Description"
          rows="4"
          className=" rounded-md border-2 border-black px-2 py-1"
        ></textarea>
        <button
          className="  bg-green-500 py-2 rounded-md border-2 border-white shadow-lg  text-white "
          type="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
