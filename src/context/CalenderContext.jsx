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
  {
    id: 1,
    label: "January",
  },

  {
    id: 2,
    label: "February",
  },

  {
    id: 3,
    label: "March",
  },

  {
    id: 4,
    label: "April",
  },

  {
    id: 5,
    label: "May",
  },

  {
    id: -6,
    label: "June",
  },

  {
    id: -5,
    label: "July",
  },

  {
    id: -4,
    label: "August",
  },

  {
    id: -3,
    label: "September",
  },

  {
    id: -2,
    label: "October",
  },

  {
    id: -1,
    label: "November",
  },

  {
    id: 0,
    label: "December",
  },
];

const AppState = {
  monthArray: [],
  wholeYearArray: [],
  currentMonthIdx: 0,
  dateObj: new Date(),
  addEventModalId: "",
  showEventModalId: "",
  eventsArray: [],
  addEventModal: false,
  showEventModal: false,
  toEditEventId: "",
  isEditEvent: false,
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

  const deleteEvent = (data) => {
    dispatch({ type: "DELETE_EVENT", payload: data });
  };

  const editEvent = (data) => {
    dispatch({ type: "EDIT_EVENT", payload: data });
  };

  const selectMonthFromDropdown = (data)=>{
    dispatch({ type: "SELECT_MONTH", payload: data });
  }

  console.log(state.currentMonthIdx);

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
        editEvent,
        selectMonthFromDropdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
