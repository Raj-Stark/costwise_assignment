import { uid } from "uid";
export const AppReducer = (state, action) => {
  if (action.type === "RENDER_C_MONTH") {
    const { dateObj } = state;

    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    // console.log(month, year);

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

    return { ...state, monthArray: [...dummyArray] };
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

    console.log(newMonth, newYear);

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
    };
  }
  if (action.type === "CLOSE_ADD_EVENT_MODAL") {
    return { ...state, addEventModal: false };
  }

  if (action.type === "CREATE_EVENT") {
    const data = action.payload;
    const { eventsArray } = state;

    const dummyEventArray = [];

    const exisistingEvent = eventsArray.find((item) => item.id === data.id);
    if (!exisistingEvent) {
      const eventObj = {
        id: data.id,
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

  return state;
};
