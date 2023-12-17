import React, { useContext, useEffect, useReducer, useState } from "react";
import { AppReducer } from "../reducer/AppReducer";

const AppContext = React.createContext();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const AppState = {};
export const CalenderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  const [monthArr, setMonthArr] = useState([]);

  function load() {
    const dt = new Date();

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);

    const firstDay = firstDayOfMonth.getDay();

    const paddingDays = firstDay;

    const dummyArray = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      if (i <= paddingDays) {
        dummyArray.push("");
      } else {
        dummyArray.push(i - paddingDays);
      }
    }

     setMonthArr(dummyArray);

    console.log(weekDays[firstDay]);

    const dayString = firstDayOfMonth.toLocaleString("en-US");
  }

  useEffect(()=>{
    load();
  },[])


  return (
    <AppContext.Provider value={{ weekDays , monthArr }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
