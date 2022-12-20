console.log("===========================================");
console.log("-------------- Assignment 1------------");

function monthOfyear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log("January");
      console.log("January is the First month the year");
      break;
    case 2:
      console.log("February");
      console.log("February is the second month the year");
      break;
    case 3:
      console.log("March");
      console.log("March is the Third month the year");
      break;
    case 4:
      console.log("April");
      console.log("April is the Fourth month the year");
      break;
    case 5:
      console.log("May");
      console.log("May is the Fifth month the year");
      break;
    case 6:
      console.log("June");
      console.log("June is the Sixth month the year");
      break;
    case 7:
      console.log("July");
      console.log("July is the Seventh month the year");
      break;
    case 8:
      console.log("August");
      console.log("August  is the Eighth month the year");
      break;
    case 9:
      console.log("September");
      console.log("September  is the Ninth month the year");
      break;
    case 10:
      console.log("october");
      console.log("october  is the Tenth month the year");
      break;
    case 11:
      console.log("November");
      console.log("November  is the Eleventh month the year");
      break;
    case 12:
      console.log("December");
      console.log("December  is the Twealth month the year");
      break;

    default:
        console.log(`Not valid value provided`);
      break;
  }
}
monthOfyear(2);
console.log("");
monthOfyear(5);
console.log("");
monthOfyear(12);
console.log("");
monthOfyear(15);
console.log("");
monthOfyear(100);
