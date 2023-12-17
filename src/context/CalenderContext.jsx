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
  "December",
];

const AppState = {
  monthArray: [],
  wholeYearArray: [],
  currentMonthIdx: 0,
  dateObj: new Date(),
  currentDateOpenModalData: {},
  currentEventModalId:"",
  currentModalEventData: {},
  eventsArray: [],
  addEventModal: false,
  showEventModal: false,
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
    if (state.showEventModal) {
      closeEventModal();
    }
  };
  const closeAddEventModal = () => {
    dispatch({ type: "CLOSE_ADD_EVENT_MODAL" });
  };

  const createEvent = (data) => {
    dispatch({ type: "CREATE_EVENT", payload: data });
    closeAddEventModal();
  };

  const openEventModal = (data) => {
    dispatch({ type: "OPEN_EVENT_MODAL", payload: data });
  };
  const closeEventModal = (data) => {
    dispatch({ type: "CLOSE_EVENT_MODAL" });
  };

  const deleteEvent = (data)=>{
    dispatch({ type: "DELETE_EVENT",payload: data });
  }


  console.log(state.eventsArray);




  return (
    <AppContext.Provider
      value={{
        ...state,
        weekDays,
        months,
        changeMonth,
        openAddEventModal,
        closeAddEventModal,
        createEvent,
        openEventModal,
        closeEventModal,
        deleteEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
