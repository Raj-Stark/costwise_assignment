import { uid } from "uid";
export const AppReducer = (state, action) => {
  if (action.type === "RENDER_C_MONTH") {

    const { dateObj, currentMonthIdx, wholeYearArray } = state;

    const monthExist = wholeYearArray.find(
      (item) => item.monthId === currentMonthIdx
    );


    if (!monthExist) {
      const month = dateObj.getMonth();
      const year = dateObj.getFullYear();

      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDayOfMonth = new Date(year, month, 1);

      const firstDay = firstDayOfMonth.getDay();

      const paddingDays = firstDay;

      const dummyArray = [];

      for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        if (i <= paddingDays) {
          dummyArray.push("");
        } else {
          const dateTileObj = {
            id: uid(),
            date: i - paddingDays,
            month,
            year,
          };
          dummyArray.push(dateTileObj);
        }
      }

      const monthObj = {
        monthId: currentMonthIdx,
        allDates: [...dummyArray],
      };

      return {
        ...state,
        wholeYearArray: [...state.wholeYearArray, monthObj],
        monthArray: [...dummyArray],
      };
    } else {
      return {
        ...state,

        monthArray: [...monthExist.allDates],
      };
    }
  }

  if (action.type === "CHANGE_MONTH") {
    const data = action.payload;
    const { dateObj } = state;

    let counter = state.currentMonthIdx;

    if (data === "INC" && counter < 6) {
      counter = counter + 1;
    } else if (data === "DEC" && counter > -6) {
      counter = counter - 1;
    }

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let newMonth = currentMonth + counter;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth += 12;
      newYear--;
    } else if (newMonth > 11) {
      newMonth -= 12;
      newYear++;
    }

    console.log(newMonth, newYear);

    dateObj.setMonth(newMonth);
    dateObj.setFullYear(newYear);

    return { ...state, currentMonthIdx: counter };
  }

  if (action.type === "OPEN_ADD_EVENT_MODAL") {
    const data = action.payload;

    return {
      ...state,
      addEventModal: true,
      currentDateOpenModalData: { ...data },
      addEventModalId:data.id,
    };
  }
  if (action.type === "CLOSE_ADD_EVENT_MODAL") {
    return { ...state, addEventModal: false };
  }

  if (action.type === "CREATE_EVENT") {
    const data = action.payload;
    const { eventsArray, isEditEvent } = state;


    const dummyEventArray = [];

    const exisistingEvent = eventsArray.find((item) => item.id === data.id);

  
    if (!exisistingEvent) {
      const eventObj = {
        id: data.id,
        date: data.date,
        month: data.month,
        year: data.year,

        allEvents: [
          {
            eventId: data.eventId,
            subject: data.subject,
            description: data.description,
          },
        ],
      };

      dummyEventArray.push(eventObj);

      return {
        ...state,
        eventsArray: [...state.eventsArray, ...dummyEventArray],
      };
    } else {
      if (isEditEvent) {
        const newEventsArray = eventsArray.map((item) => {
          if (item.id === exisistingEvent.id) {
            exisistingEvent.allEvents.map((item) => {
              if (item.eventId === data.eventId) {
                item.subject = data.subject;
                item.description = data.description;

                return item;
              }

              return item;
            });
            return exisistingEvent;
          }

          return item;
        });

        return {
          ...state,
          eventsArray: newEventsArray,
          isEditEvent: false,
          toEditEventId: "", 
        };
      }

      const allEventsObj = {
        eventId: data.eventId,
        subject: data.subject,
        description: data.description,
      };

      const newEventsArray = eventsArray.map((item) => {
        if (item.id === exisistingEvent.id) {
          exisistingEvent.allEvents.push(allEventsObj);
          return exisistingEvent;
        }

        return item;
      });

      return {
        ...state,
        eventsArray: newEventsArray,
      };
    }
  }

  if (action.type === "OPEN_EVENT_MODAL") {
    const data = action.payload;

    return {
      ...state,
      showEventModalId: data.id,
      showEventModal: true,
    };
  }

  if (action.type === "CLOSE_EVENT_MODAL") {
    return {
      ...state,
      showEventModal: false,
    };
  }
  if (action.type === "DELETE_EVENT") {
    const data = action.payload;

    const { eventsArray } = state;

    const dateOfEventDeleteObj = eventsArray.find(
      (item) => item.id === data.dateId
    );

    const { allEvents } = dateOfEventDeleteObj;

    const newAllEventArray = allEvents.filter((item) => {
      return item.eventId !== data.eventId;
    });

    const newEventsArray = eventsArray
      .map((item) => {
        if (item.id === data.dateId) {
          item.allEvents = newAllEventArray;
          return item;
        }

        return item;
      })
      .filter((item) => item.allEvents.length > 0);

    return {
      ...state,
      eventsArray: [...newEventsArray],
    };
  }

  if (action.type === "EDIT_EVENT") {
    const data = action.payload;

    console.log(data);
    const { eventsArray } = state;

    const dateOfEventEditObj = eventsArray.find(
      (item) => item.id === data.dateId
    );

    const { allEvents } = dateOfEventEditObj;

    const toEditEventItem = allEvents.find(
      (item) => item.eventId === data.eventId
    );

    return {
      ...state,
      toEditEventId: toEditEventItem.eventId,
      addEventModal: true,
      showEventModal: false,
      isEditEvent: true,
      addEventModalId:data.dateId,
    };
  }

  if(action.type === "SELECT_MONTH"){
    const data = action.payload;

    const { dateObj } = state;

    let counter = data.id;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let newMonth = currentMonth + counter;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth += 12;
      newYear--;
    } else if (newMonth > 11) {
      newMonth -= 12;
      newYear++;
    }


    dateObj.setMonth(newMonth);
    dateObj.setFullYear(newYear);



    return {
      ...state,
      currentMonthIdx: data.id,
    };
  }

  return state;
};
