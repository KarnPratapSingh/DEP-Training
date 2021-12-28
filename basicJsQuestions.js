//QUESTION 1:
// input: ["apple","banana","orange"]
//   output:"apple,banana,orange"

function printArrayInStringFormat(array) {
  //show me the code!
  var stringFromArray = array.toString();
  return stringFromArray;
}

//QUESTION 2:
// input : -2,3,-23
// output : 2,-3,23

function opposite(number) {
  //your code here
  var newNumber;
  if (number > 0) {
    newNumber = number - 2 * number;
    return newNumber;
  } else if (number < 0) {
    newNumber = Math.abs(number);
    return newNumber;
  } else {
    return number;
  }
}

// QUESTION 3:
// input: basicOp('+',1,2);
// output: 3

function basicOp(operation, value1, value2) {
  // Code
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else if (operation == "/") {
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
  if (days >= 7) {
    return days * 40 - 50;
  } else if (days >= 3) {
    return days * 40 - 20;
  } else {
    return days * 40;
  }
}
