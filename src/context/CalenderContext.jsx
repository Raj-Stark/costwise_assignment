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
};
export const CalenderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  const [monthArr, setMonthArr] = useState([]);
  let dt = new Date();

  useEffect(() => {
    renderCurrentMonth(dt);
  }, []);

  const renderCurrentMonth = (dateObj) => {
    dispatch({ type: "RENDER_C_MONTH", payload: dateObj });
  };



  console.log(state);

  return (
    <AppContext.Provider value={{ ...state, weekDays, monthArr }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
