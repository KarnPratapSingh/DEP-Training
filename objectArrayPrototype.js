/*QUESTION 1:

Creating a CAT class that will keep record of all the cats registered and 
can return a function averageWeight() that will tell the average weight of all
the cats that were registered.  */

// Solution 1 :

class CAT {
  constructor() {
    if (CAT.instance === null) {
      this.logs = [];
      CAT.instance = this;
    } else {
      return CAT.instance;
    }
  }

  catStore(name, weight) {
    this.logs.push({
      name: name,
      weight: weight,
    });
  }

  averageWeight() {
    let sum = 0;
    for (let index = 0; index < this.logs.length; index++) {
      sum = sum + this.logs[index].weight;
    }
    return sum / this.logs.length;
  }

  showAllCats() {
    for (let index = 0; index < this.logs.length; index++) {
      console.log(`${this.logs[index].name} :  ${this.logs[index].weight}`);
    }
  }
}

const garfield = new CAT();
garfield.catStore("persia", 25);
console.log(garfield.averageWeight());

const mai = new CAT();
mai.catStore("pozo", 15);
console.log(mai.averageWeight());

mai.showAllCats(); // shows all the cats that are in the CAT class instance.

/*QUESTION 2:  Aim of the program :  

Add all the arguments passed:
add(1)(2)(3) => OUTPUT: 6
add(2)(2) => OUTPUT: 4

*/

//Solution 2:

function add(n) {
  // Let the currying begin!
  let sum = n;
  function next(a) {
    sum = sum + a;
    return next;
  }
  next.valueOf = function () {
    return sum;
  };
  return next;
}

console.log(add(1)(2)(1).valueOf());

/* QUESTION 3:

If you are calculating complex things or execute time-consuming API calls, you sometimes want to cacheLogs the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.
Usage example:
var complexFunction = function(arg1, arg2) { complex calculation in here };
var cachedFunction = cacheLogs(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
*/

// Solution 3:

function cacheLogs(complexfunction) {
  const cacheData = {};

  return function () {
    const arguments = JSON.stringify(arguments);
    if (!(arguments in cacheData))
      cacheData[arguments] = complexfunction(...arguments);

    return cacheData[arguments];
  };
}

/*QUESTION 4:  Aim of the program :

compose(f , g)(x)
=> f( g( x ) )

*/

//Solution 4:

function compose(outerFunction, innerFunction) {
  return function (...arguments) {
    return outerFunction(innerFunction(...arguments));
  };
}

/*QUESTION 5:  Aim of the program :

compose(multTwo, addOne)(5) => OUTPUT: 12, 'compose two functions'
compose(addOne, multTwo, addOne, addOne)(2) => OUTPUT: 9, 'compose four functions'

*/

//Solution 5:

function compose() {
  var numberOfArguments = arguments.length;
  var arrayOfFunctions = [];

  for (var index = 0; index < numberOfArguments; ++index) {
    arrayOfFunctions.push(arguments[numberOfArguments - 1 - index]);
  }

  return function (n) {
    arrayOfFunctions.forEach((currentFunction) => {
      n = currentFunction(n);
    });

    return n;
  };
}
