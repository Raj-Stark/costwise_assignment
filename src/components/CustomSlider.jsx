import React, { useState } from "react";
import { useGlobalContext } from "../context/CalenderContext";

const CustomSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState({
    id: 0,
    label: "December",
  });

  const { months , selectMonthFromDropdown  } = useGlobalContext();

  const handleSliderChange = (event) => {
    const value = event.target.value;

    const val = months.find((item) => item.id === Number(value));

    setSelectedMonth(val);
    selectMonthFromDropdown(val);

    setSliderValue(value);
  };

  return (
    <div className="flex flex-col">
      <input
        type="range"
        id="slider"
        name="slider"
        min="-6"
        max="5"
        className="slider"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      {selectedMonth && (
        <span className=" rounded-md  mt-16 bg-black text-white text-center ">
          {selectedMonth.label}
        </span>
      )}
    </div>
  );
};

export default CustomSlider;
