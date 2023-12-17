import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";

const EventTab = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex bg-green-500 justify-between p-2 rounded-md items-center">
        <h2>{item.subject}</h2>
        <div className=" flex space-x-4">
          <button onClick={() => setOpen(!open)}>
            {!open ? <FaAngleDown></FaAngleDown> : <FaAngleUp></FaAngleUp>}
          </button>
          
          <LuClipboardEdit />
          <MdDelete />
        </div>
      </div>
      {open && (
        <div className=" bg-white h-20  overflow-y-auto  text-black p-2 rounded-md mt-1">
          {item.description}
        </div>
      )}


    </>
  );
};

export default EventTab;
