//return number of days in an input month number

const monthNum = 1;
if (monthNum >= 1 && monthNum <= 12) {
  //from Date documentation we know that months are starting from 0 till 11 not from 1 till 12
  const computedMonth = monthNum - 1;
  console.log(computedMonth); //2

  //we can set a date with "2021-03-22T13:24:54.152Z" or with "April 1, 2021 00:00:00"
  //now lets create two dates-> one for the given month zeroed to the first day of month
  //-> second date for the next month
  // the subtraction of these two dates will give the difference in milliseconds
  // we will calculate the number of days in the milliseconds difference

  //2021-03-01T00:00:00.152Z
  const date = new Date(`2021-${computedMonth}-01T00:00:00.152Z`); //current time
  const nextDate = new Date(); //current time
  //date===nextDate ==>same date

  date.setMonth(computedMonth); //set the month to the input month
  console.log(date);

  date2 = nextDate.setMonth(computedMonth + 1);

  //`April 1, 2021 00:00:00`
  const computedDate = new Date(`${monthName} 1 2021 00:00:00`);
  const nextMonthDate = new Date(`${nextMonthName} 1 2021 00:00:00`);
  //calculating number of days
  const days = Math.round(
    (nextMonthDate - computedDate) / (1000 * 24 * 60 * 60)
  );
  //   console.log(nextDate, date2);
}
