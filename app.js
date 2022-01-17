/*Problem statement.
1.	Create a node.js command line program which reads operation(add, subtract, multiply, division) and values as arguments and returns the 
appropriate output onto console as in below criteria

a.	node app.js --operation addition 1 2 3 4  => 1+2+3+4 = 10
b.	node app.js --operation multiply 1 2 3 4  => 1*2*3*4 = 24
c.	node app.js --operation subtraction 2 1  => 2 - 1 = 1
d.	node app.js --operation division 4 2  => 4/2 = 2

2.	All the invalid cases need to be handled for all the operations
3.	Include validations for unsupported operations, number of inputs etc.

Note: Please note that addition and multiplication takes "n” values for inputs. Subtraction and division takes 2 values for input.
 */

// Solution:

// Get the type of operation:
let operation = process.argv.slice(3, 4);
console.log(operation);

// Get all the input numbers:
let inputNumbers = process.argv.slice(4);
console.log(inputNumbers);

// Convert the above array of numbers,which is in 'String' format, to Number format:
let inputs = [];
for (let index = 0; index < inputNumbers.length; index++) {
  inputs[index] = Number(inputNumbers[index]);
}

function performOperation(operation, numbers) {
  switch (operation[0]) {
    case "addition":
      addOperation(numbers);
      break;
    case "subtraction":
      subtractionOperation(numbers);
      break;
    case "multiplication":
      multiplyOperation(numbers);
      break;
    case "division":
      divideOperation(numbers);
      break;
    default:
      console.log("Invalid operation.");
  }
}

function addOperation(numbers) {
  if (numbers.length == 1) {
    console.log("Can't perform addition operation over one input");
  } else {
    let sum = numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    console.log("OUTPUT :" + sum);
  }
}

function multiplyOperation(numbers) {
  if (numbers.length == 1) {
    console.log("Can't perform multiplication operation over one input");
  } else {
    let result = numbers.reduce((acc, curr) => {
      return acc * curr;
    }, 1);
    console.log("OUTPUT :" + result);
  }
}

function subtractionOperation(numbers) {
  if (numbers.length == 1) {
    console.log("Can't perform subtraction operation over one input");
  } else if (numbers.length > 2) {
    console.log("Can't perform subtraction operation over more than 2 input");
  } else {
    console.log(`OUTPUT: ${numbers[0] - numbers[1]}`);
  }
}

function divideOperation(numbers) {
  if (numbers.length == 1) {
    console.log("Can't perform division operation over one input");
  } else if (numbers.length > 2) {
    console.log("Can't perform division operation over more than 2 input");
  } else if (numbers[1] === 0) {
    console.log("Can't divide any number by 0");
  } else {
    console.log(`OUTPUT: ${numbers[0] / numbers[1]}`);
  }
}

performOperation(operation, inputs);
