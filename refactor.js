//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below -------------------------
                      //anon. function
var doSomethingCool = function(){
  console.log("Something Cool!");
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------

//set the anonymous function expression in the setTimeout method
setTimeout(function(){ alert("Hello, World!!")}, 2000);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------

/*************************
 The JS runs down through the code on first pass and sees variable declarations andm function declarations. Next pass it goes and captures the declaration of the variable to x and continues, then reads the setTimeout anonymous function, and says cool, theres a function there (but it's not immediately invoked), in fact it's delayed and stores it aside for 1ms, and moves on very quickly down and sees that letter has been redefined/assigned to = 'z' and runs the immediately following console.log to print "the letter is z", it then goes back to the function in setTimeout and runs it and prints "the letter is y" (it prints y, because it was re-assigned inside of the function, overwriting z from previous assignment in the global scope of things)
 **************************/

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------

//chain the methods together... should have done this yesterday HA!
function reverseStr(str) { str.split("").reverse().join(""); return str; }
// testing --> console.log(reverseStr("I like food"));

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------

var spanishColors = function(colorsName) {
  // puts answer to lowercase on chance of input having capital letters
  colorsNamed = colorsName.toLowerCase();

  //  creating object colorSpan that holds spanish propertys and values
  var colorSpan = {

    rojo: "#ff0000",
    blanco: "#ffffff",
    azul: "#0000ff",
    verde: "#00ff00",
    negro: "#000000"

  }
//return the color value of the property defined by the user's input
  return colorSpan[colorsNamed];

}
//log to test if correct
//console.log(spanishColors('Rojo'));
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------

//variable declartion line 1:
var foo;
//variable assignment line 2:
foo = 'bar';

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  var range = _.range(10);
  _.each(range, callback);
};

// Put your answer below -------------------------


var callNTimes = function(callback, n) {

  /*creates an array of integers for each to be called on so if (9) in this case
    it would return [0, 1, 2 ... 7, 8];
  */
  var range = _.range(n);
// _.each loops through each item in array (in this case range), and iterates the // call back each time (n amount of times)
  _.each(range, callback);
}
//set up function to test if working

// var myFunction = function() {
//   console.log(5);
// };
// ----- test via console.log --------
//console.log(callNTimes(myFunction, 3));

//---------------------------new #7-----------------------
//var callTenTimes = function(callback) {
//	for(var i = 0; i < 10; i++){
//		callback();
//	}
//};
//--------------------new answer-----------------
//    var callNTimes = function(callback, num) {

//      for(var i = 0; i < num); i++){
//        callback();
//      }
//    }


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------

/*
*  Yo, check it, this is the function security rap,
*  so when you try to get my variables,
*  angry pixies will give your mischevious hand a slap!
*/
//aka - immediately invoke (so that it doesn't interfere) anonymous function expression to keep everything inside of it local in scope.
//aka - don't let hacker Dan attack my game...

(function(){

  var score = 0;

  var increaseScore = function() {
    score++;
  };

  var decreaseScore = function() {
    score--;
  };

}());

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------

//did not return a value in example.. needed to return something to put into mug
var addNumbers = function(numberA, numberB) {
  return (numberA + numberB);
};
//now twoPlusTwo = 4 !!
var twoPlusTwo = addNumbers(2,2);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------
/*
//accelerate();
//console.log(speed);
 When not passing argument to amount... the accelerate function is trying to figure out how to add speed (0) to the amount variable which has not been assigned/defined... therefore it does not mesh and spits out NaN since it felt like we should have been expecting a number.
*/

var speed = 0;
var accelerated = function(amount){
  //if amount hasn't been provided ---
  if (amount == undefined) {
    //set amount = to 1
    amount = 1;
    // proceed to add speed to amount as normal...
    speed += amount;
  } else {
    //otherwise, if amount was defined...
    // add amount to speed and *vroooom* *vrrooom* Go SpeedRacer!
    speed += amount;
  }
}
//tested with adding amount and without amount... worked!
//accelerated();
//console.log(speed);
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------


var callLater = function(timeout, callback) {
      // if only function set, add 5000 as default time
  if (typeof timeout == 'function') {
        callback = timeout;
        timeout = 1000;
     };
 setTimeout(callback, timeout);
};



function parlimentFunct() {
  console.log("wowser");
}

callLater(parlimentFunct);


// -----------------------------------------------

//////////////////////////////////////////////////
