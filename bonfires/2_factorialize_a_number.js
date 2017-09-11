/*
Factorialize A Number

Objective: Return the factorial of the provided integer.

Example: Given the number 5, the function should return 120.
(5! = 1 * 2 * 3 * 4 * 5 = 120)

Concepts To Understand:
-Factorials
  https://www.mathsisfun.com/numbers/factorial.html
-Arithmetic Operators
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

Given Starter Code:
function factorialize(num) {
  return num;
}

factorialize(5);
*/

/*
  Walkthrough:

  We start by creating a new function named factorialize and give it a number (num) argument.

  function factorialize(num){

  }

  Assuming you read the above link and understand how factorials work we can see that there is a repeating action occurring.

  Using the example for factorialize(5) we can see that the function starts with 1, then multiplies by 2, then 3... and so on and so on until we reach 5, then we return the final number.
  5! = 1 * 2 * 3 * 4 * 5 = 120

  For this specific repeating action we can use a for loop.

  First we start by declaring a new variable myNum to handle the number we will eventually return.

  Then using the fact that we know that we always start at 1 and multiply that by the next number incrementally, stopping at the given num argument, we can write a loop
  which starts with 1 and increments by 1 through each cycle of the loop until we reach the given num argument.

  Within the loop we do the multiplication logic by taking our myNum variable, starting at 1 and multiplying it by i through each iteration.

  function factorialize(num){
    var myNum = 1;
    for (i=1; i<=num; i++){
      myNum = myNum * i;
    }
    return myNum;
  }

  factorialize(5); => 120

  Stepwise this function plays out as follows:
  1. We run the factorialize function with 5 as the num argument.
    factorialize(5);

  2. myNum = 1,
    the loop starts with i as 1,
    then we multiply by myNum, giving us 1,
    the loop then checks the conditional, we see that i is still less than 5 so we increment i by 1.

  3. myNum = 1,
    the loop continues with i as 2,
    then we multiply by myNum, giving us 2,
    the loop then checks the conditional, we see that i is still less than 5 so we increment i by 1.

  4. myNum = 2,
    the loop continues with i as 3,
    then we multiply by myNum, giving us 6,
    the loop then checks the conditional, we see that i is still less than 5 so we increment i by 1.

  5. myNum = 6,
    the loop continues with i as 4,
    then we multiply by myNum, giving us 24,
    the loop then checks the conditional, we see that i is still less than 5 so we increment i by 1.

  6.  myNum = 24,
    the loop continues with i as 5,
    then we multiply by myNum, giving us 120,
    the loop then checks the conditional, we see that i is equal to 5 so we exit the loop.

  7. finally,
    myNum = 120,
    and the function returns myNum.

  Below, I have written a refactored implementation of this algorithm in both ES5 and ES6 syntax with manual tests that you can run locally with node or in the browser console.
  These functions work for any positive integer.
*/

// ES5 Implementation Written For Testing Purposes
function factorialize(num) {
  var myNum = 1;
  for (var i=1; i<=num; i++){
    myNum *= i;
  }
  console.log(myNum);
  return myNum;
}

// Recursive ES5 Implementation
// function factorialize(num) {
//    if(num===0){
//      return 1;
//    }
//    else{
//      return num*factorialize(num-1);
//    }
// }

// ES6 Implementation Written For Testing Purposes
const factorializeES6 = num => {
  let myNum = 1;
  for (let i=1; i<=num; i++){
    myNum *= i;
  }
  console.log(myNum);
  return myNum;
}

// Recursive ES6 Implementation
// const factorializeES6 = num => {
//    if(num===0){
//      return 1;
//    }
//    else{
//      return num*factorializeES6(num-1);
//    }
// }
// }

// Manual Tests
console.log("Factorialize A Number");
console.log("");

console.log("----------------------------");
console.log("---------ES5 TESTS----------");
console.log("----------------------------");
console.log("");
factorialize(5); // => 120
console.log("^ Should Return 120");
factorialize(6); // => 720
console.log("^ Should Return 720");
factorialize(7); // => 5040
console.log("^ Should Return 5040");

console.log("");

console.log("----------------------------");
console.log("---------ES6 TESTS----------");
console.log("----------------------------");
console.log("");
factorializeES6(5); // => 120
console.log("^ Should Return 120");
factorializeES6(6); // => 720
console.log("^ Should Return 720");
factorializeES6(7); // => 5040
console.log("^ Should Return 5040");
