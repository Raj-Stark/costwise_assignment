export const AppReducer = (state, action) => {
  if (action.type === "RENDER_C_MONTH") {
    const dateObj = action.payload;

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
        dummyArray.push(i - paddingDays);
      }
    }

    return { ...state, monthArray: [...dummyArray] };
  }

  return state;
};
