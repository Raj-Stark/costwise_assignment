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
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const AppState = {
  monthArray: [],
  currentMonthIdx: 0,
  dateObj: new Date(),
  addEventModal: false,
  currentDateOpenModalData: {},
};
export const CalenderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  useEffect(() => {
    renderCurrentMonth();
  }, [state.currentMonthIdx]);

  const renderCurrentMonth = () => {
    dispatch({ type: "RENDER_C_MONTH" });
  };

  const changeMonth = (data) => {
    dispatch({ type: "CHANGE_MONTH", payload: data });
  };

  const openAddEventModal = (data) => {
    dispatch({ type: "OPEN_ADD_EVENT_MODAL", payload: data });
  };
  const closeAddEventModal = () => {
    dispatch({ type: "CLOSE_ADD_EVENT_MODAL" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        weekDays,
        months,
        changeMonth,
        openAddEventModal,
        closeAddEventModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
