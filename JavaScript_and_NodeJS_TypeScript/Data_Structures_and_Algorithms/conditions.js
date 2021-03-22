//return number of days in an input month number
//solution no 1: expected solution
//even month=30 days except for february=28
//not even month=31 days

//possible inputs:
const input1 = 2; //february
const input2 = 3; //march
const input3 = 4; //april

// the program:
const februaryDays = 28;
const evenMonthDays = 30;
const notEvenMonthDays = 31;

const input = 7;
if (input >= 1 && input <= 12) {
  if (input === 2) {
    console.log(`the are ${februaryDays} in this month`);
  } else if (input % 2 === 0) {
    console.log(`there are ${evenMonthDays} in this month`);
  } else {
    console.log(`there are ${notEvenMonthDays} in this month`);
  }
} else {
  console.log("please enter a number between 1 and 12");
}
// additional test is to check whether the input is of type Number, by parseInt(input)

/** solution no 2=> advanced solution using the --Date-- js data type only.

//some intro: when using the Date data type we can get the current date with:

const today=new Date();
we can change the month by: today.setMonth(newMonth);
the Date data type starts the month count from 0 as January till 11 as December. 
to create a new custom date we can pass a string to the "new Date()" function in 2 ways:
1- new Date("2021-03-22T13:24:54.152Z")-->search google for the meaning of letters T and Z
2- new Date("April 1, 2021 00:00:00")

we can subtract dates, like date1-date2, the subtraction will resolve in a number not a string representing 
a date. This number indicates the number of milliseconds --> search google
From the milliseconds we can calculate the number of days/hours/weeks 

solution rational:
we will create 2 dates: one with the input month, the other with the next month. 
The subtraction of the next month from the input month will give us the number of milliseconds.
This number will then be deviled by the number of milliseconds in one day, giving us the number of days.
--> we have to use Math.round() to round that days number
*/
let monthNum = 2; //example of a possible input

if (monthNum >= 1 && monthNum <= 12) {
  let presentedMonth = monthNum;
  if (monthNum < 10) presentedMonth = "0" + monthNum; //months under 10 are written with 0 like march: 03
  let nextMonth = monthNum + 1;
  if (nextMonth < 10) nextMonth = "0" + nextMonth; //months under 10 are written with 0 like march: 03
  //here we create a new date from the given month by using the string: "2021-03-22T13:24:54.152Z"
  const date = new Date(`2021-${presentedMonth}-01T00:00:00.152Z`); //first moment of given month
  const nextDate = new Date(`2021-${nextMonth}-01T00:00:00.152Z`); //first moment of the next month

  console.log(date, nextDate);

  //subtraction
  const milliseconds = nextDate - date;
  console.log(milliseconds);
  //calculating number of days
  const millisecondsInADay = 1000 * 24 * 60 * 60;
  const days = Math.round((nextDate - date) / millisecondsInADay);
  console.log(days);
}
