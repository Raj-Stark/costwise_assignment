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
        dummyArray.push(i - paddingDays);
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

    
    console.log(newMonth , newYear)

    if (newMonth < 0) {
      newMonth += 12;
      newYear--;
    } else if (newMonth > 11) {
      newMonth -= 12;
      newYear++;
    }

    console.log(newMonth , newYear)

    dateObj.setMonth(newMonth);
    dateObj.setFullYear(newYear);

    return { ...state, currentMonthIdx: counter };
  }

  return state;
};
