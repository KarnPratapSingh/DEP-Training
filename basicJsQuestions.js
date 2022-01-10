

const numbers={
  zero:0,
  one:1,
  two:2,
  three:3,
  four:4,
  five:5,
  six:6,
  seven:7,
  eight:8,
  nine:9
}

//QUESTION 1:
// input: ["apple","banana","orange"]
//   output:"apple,banana,orange"

function printArrayInStringFormat(array) {
  //show me the code!
  return array.toString();
}

//QUESTION 2:
// input : -2,3,-23
// output : 2,-3,23

function opposite(number) {
  //your code here
  if (number > numbers.zero) {
    return number - numbers.two * number;
  } else if (number < numbers.zero) {
    return Math.abs(number);
  } else {
    return number;
  }
}

// QUESTION 3:
// input: basicOp('+',1,2);
// output: 3

function basicOp(operation, value1, value2) {
  // Code
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else {
    return "Invalid operation";
  }
}

basicOp("+", 1, 2);

//QUESTION 4:
/*  After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).*/

function rentalCarCost(days) {
  // Your solution here
  if (days >= numbers.seven) {
    return days * (numbers.four*10) - (numbers.five*10);
  } else if (days >= numbers.three) {
    return days * (numbers.four*10) - (numbers.two*10);
  } else {
    return days * (numbers.four*10);
  }
}
