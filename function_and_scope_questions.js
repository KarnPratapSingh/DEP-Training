// Question one:

/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3 */

// Solution one:

function evaluate(number, expression) {
    if (!expression) return number;
    return expression(number);
  }
  
  function zero(callback) {
    return evaluate(0, callback);
  }
  function one(callback) {
    return evaluate(1, callback);
  }
  function two(callback) {
    return evaluate(2, callback);
  }
  function three(callback) {
    return evaluate(3, callback);
  }
  function four(callback) {
    return evaluate(4, callback);
  }
  function five(callback) {
    return evaluate(5, callback);
  }
  function six(callback) {
    return evaluate(6, callback);
  }
  function seven(callback) {
    return evaluate(7, callback);
  }
  function eight(callback) {
    return evaluate(8, callback);
  }
  function nine(callback) {
    return evaluate(9, callback);
  }
  
  function plus(x) {
    return function (y) {
      return x + y;
    };
  }
  function minus(x) {
    return function (y) {
      return y - x;
    };
  }
  function times(x) {
    return function (y) {
      return x * y;
    };
  }
  function dividedBy(x) {
    return function (y) {
      return Math.floor(y / x);
    };
  }
  

  function runSolutionOne(){
    let answer=seven(times(five()));
    console.log(answer);
  }

  runSolutionOne();


// ------------------------------------------------------------------------------------------------------



//QUESTION 2:
/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd,
return the middle character.
 If the word's length is even, return the middle 2 characters. */



//SOLUTION:

function getMiddlePartofInputString(inputString) {
    //Code goes here!
    
    let halfLengthOfString=inputString.length / 2;
    let lengthIsEven=inputString.length % 2 == 0;
    
    if (lengthIsEven) {
        return inputString.substring((halfLengthOfString - 1), (halfLengthOfString + 1));
    }
    else {
        return inputString.substring(Math.floor(halfLengthOfString), (Math.floor(halfLengthOfString) + 1));
    }
}

function run_Solution_2() {
    console.log(getMiddlePartofInputString('abcde')); // must return 'c'
    console.log(getMiddlePartofInputString('efgh'));  // must return 'fg'
}
run_Solution_2();


// --------------------------------------------------------------------------------------------------------------------------------







// QUESTION 3:
/* Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ]
where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words:
the ordering of the Fs (resp. Ts) should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index.
In other words: the index of the first T value in items. */


// SOLUTION 3:



// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(items) {


    var newarray = [];
    function firstFillAllOddNumbers(items) {
        items.forEach(item => {
            if (item % 2 !== 0) {
                newarray.push(item);
            }
        });
    }

    function secondFillAllEvenNumbers(items) {
        items.forEach(item => {
            if (item % 2 == 0) {
                newarray.push(item);
            }
        });
    }
    firstFillAllOddNumbers(items);
    secondFillAllEvenNumbers(items);




    var booleanArray = [];
    newarray.forEach(element => {
        booleanArray.push(element % 2 == 0);
    }); // Filling boolean_Array with Boolean Values


    var indexOfFirstTrueValue = booleanArray.indexOf(true);

    for (var index = 0; index < items.length; index++) {
        items[index] = newarray[index];
    } // changing the incoming array with the new array where first we have all the odd values then all the even values.


    return indexOfFirstTrueValue;

}


function run_Solution_3() {
    var items = [1, 2, 3, 4, 5, 6];
    console.log(partitionOn(items)); // first this array will be sorted in manner [1,3,5,2,4,6], then we will get index of first even value.
    console.log(items); // after calling partitionOn function the original array,i.e items, must modify to [1,3,5,2,4,6].
}

run_Solution_3();



//--------------------------------------------------------------------------------------------------------------------------------------------






