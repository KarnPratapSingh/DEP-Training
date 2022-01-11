/* 
QUESTION 1:

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
*/

// Solution 1:

Array.prototype.square = function () {
  return this.map(function (n) {
    return n * n;
  });
};
Array.prototype.cube = function () {
  return this.map(function (n) {
    return n * n * n;
  });
};
Array.prototype.average = function () {
  return this.sum() / this.length;
};
Array.prototype.sum = function () {
  return this.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};
Array.prototype.even = function () {
  return this.filter(function (item) {
    return 0 === item % 2;
  });
};
Array.prototype.odd = function () {
  return this.filter(function (item) {
    return 0 !== item % 2;
  });
};

/*
  QUESTION 2:
  You are given a complex object that has many deeply nested variables. You don't want to go the 
  usual if obj.property == null route. Create a prototype method that given a nested path, either 
  return the value or undefined.
  
  var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
  
  obj.hash('person.name'); // 'joe'
  obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
  obj.hash('person.history.homeStreet'); // undefined
  obj.hash('person.animal.pet.needNoseAntEater'); // u */

// Solution 2:

Object.prototype.hash = function (string) {
  var current = this;
  var props = string.split(".");

  while (current && props.length) {
    current = current[props.shift()];
  }

  return current;
};

/*
  QUESTION 3:
In JavaScript we can create objects using the new operator.

For example, if you have this constructor function:

function Greeting(name) {
  this.name = name;
}

Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};

Greeting.prototype.sayBye = function() {
  return "Bye " + this.name;
};
You can create a Greeting object in this way:

  var greeting = new Greeting('John');
new operator is evil because it produces a highly coupled code, difficult to maintain and test.
Some patterns to reduce coupling are object factories or dependency injection.
These patterns can benefit of the construct() function.
This function receives a constructor function and possibly some arguments and it returns a new object constructed with the function and the passed arguments.
This is another way to create the greeting object:

var greeting = construct(Greeting, 'John');
And a factory could use like this:

  function factory() {
    return {
      createGreeting() {
        return construct(Greeting, arguments);
      }
      ...
    }
  }
Your work is to implement the construct() function.
  */
// Solution 3:

function construct(Class, ...arguments) {
  return new Class(...arguments);
}

/*
  Question 4:
   We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.
  
  Rules
  The SantaClausable interface is implemented, if all of the following methods are defined on an object:
  
  sayHoHoHo() / say_ho_ho_ho
  distributeGifts() / distribute_gifts
  goDownTheChimney() / go_down_the_chimney
  
  Return true if all these functions are present,
  else return false.
  */

// Solution 4:

function isSantaClausable(objectToBeChecked) {
  return (
    "function" ==
    typeof (
      objectToBeChecked.sayHoHoHo &&
      objectToBeChecked.distributeGifts &&
      objectToBeChecked.goDownTheChimney
    )
  );
}
