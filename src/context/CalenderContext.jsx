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

const AppState = {
  monthArray: [],
  currentMonthIdx: 0,
};
export const CalenderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  let dt = new Date();

  useEffect(() => {
    renderCurrentMonth(dt);
  }, []);

  const renderCurrentMonth = (dateObj) => {
    dispatch({ type: "RENDER_C_MONTH", payload: dateObj });
  };

  const changeMonth = (data)=>{
    dispatch({ type: "CHANGE_MONTH" , payload:data});
  }

  return (
    <AppContext.Provider value={{ ...state, weekDays , changeMonth}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
