//QUESTION 1
//Fill an array with the same values:

//SOLUTION

function prefill(sizeOfArray, everyElementInArray) {
  if (parseInt(sizeOfArray) === sizeOfArray) {
    if (sizeOfArray > 0) {
      let filledArray = new Array(+sizeOfArray).fill(everyElementInArray);
      return filledArray;
    } else {
      return [];
    }
  } else {
    throw TypeError("err");
  }
}

function runSolution1() {
  console.log(prefill(3, prefill(2, "2d")));
  console.log(prefill(2, "abc"));
  console.log(prefill("2", 1));
}
runSolution1();

//QUESTION 2
/* Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc. */

function always(numberToBeReturned) {
  return function () {
    return numberToBeReturned;
  };
}

function runSolution2() {
  var three = always(3);
  console.log(three());
}

runSolution2();

// -----------------------------------------------------------------------------------------------------------------------------

// QUESTION 3
/*We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, 
here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3 */

function createFunctions(numberOfFunctions) {
  var arrayOfFunctions = [];

  for (let position = 0; position < numberOfFunctions; position++) {
    arrayOfFunctions.push(function () {
      return position;
    });
  }

  return arrayOfFunctions;
}

function runSolution3() {
  let allFunctions = createFunctions(3);
  console.log(allFunctions[0]());
  console.log(allFunctions[1]());
  console.log(allFunctions[2]());
}

runSolution3();

//-----------------------------------------------------------------------------------------------------------------------------------

//QUESTION 4:
/*Implement a function createSecretHolder(secret) which accepts any value as secret and 
returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret */

//SOLUTION:

function createSecretHolder(secret) {
  class SecretKeeper {
    constructor(secret) {
      this.secret = secret;
    }
    getSecret() {
      return this.secret;
    }
    setSecret(secret) {
      this.secret = secret;
    }
  }
  let obj = new SecretKeeper(secret);
  return obj;
}

function runSolution4() {
  let obj = createSecretHolder(5);
  console.log(obj.getSecret());
  obj.setSecret(3);
  console.log(obj.getSecret());
}

runSolution4();

//------------------------------------------------------------------------------------------------------------------------------------
