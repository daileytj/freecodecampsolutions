/*
Return Largest Numbers In Arrays

Objective: Return an array consisting of the largest number from each provided sub-array.

Note: For simplicity, the provided array will contain exactly 4 sub-arrays.

Example: Given the array [[1,2,3,4], [5,6,7,8], [9,10,11,12], [1,2,3,4]] should return [4,8,12,4].

Concepts To Understand:
-Comparison Operators
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
-Array.prototype.sort() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Another Note(and an important one!): The Array.prototype.sort() method is not necessarily stable.
This is due to the fact that the default sort order is according to string Unicode code points.
This causes symptoms like the number 10 to be sorted before the numbers 2-9.
In order to make the sort() method work properly with numbers we can use a compare function;

function compareNumbers(a, b) {
  return a - b;
}

An example of how this works can be found through the link provided above for the Array.prototype.sort() method.

Given Starter Code:
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

*/

/*
  Walkthrough:

  We start by creating a new function named largestOfFour and give it an Array (arr) argument.

  function largestOfFour(arr){

  }

  At this point in the bonfire challenges, these algorithms are beginning to require more steps so we should take a new approach to solving these problems.
  When there are more than a few steps to an algorithm I will first write out some pesudo code to explain in words what actions my code will perform.
  I often find that the hardest part of solving these problems is figuring out what approach I am going to use.
  Once I have a solution written down in words, it becomes relatively simple to write it out in code.
  So here goes,
  First we need to create a variable to store the largest value from each array.
  Then we will loop through the array or arrays.
  As we loop we will need to sort each array from smallest to largest
  and push the largest item in the array, which will be the last item in the array, to the answer variable.
  Finally we return the answer variable.

  Although we are working with four arrays of four items each, this function should work for any amount of various size arrays.

  Let's break this down step by step as much as we can.

  First we need to create a variable to store the largest value from each array.

  function largestOfFour(arr) {
    var answer = [];
  }

  Then we can write a for loop to loop through the array of arrays, stopping the loop as it reaches the length of the given array.

  function largestOfFour(arr) {
    var answer = [];
    for(var i = 0; i < arr.length; i+=1){

    }
  }

  At this point we could loop through each array within the array and manually sort the arrays using comparison operators,
  or we can make use of the Array.prototype.sort() method and return the last item once sorted.

  // *remember our note from earlier about the sort method and needing a comparison function.

  function largestOfFour(arr) {
    var answer = [];
    for(var i = 0; i < arr.length; i+=1){
    //here we declare a variable to store the highest number and set it equal
    //to the last item of the array once it is sorted.
      var highestNumber = arr[i].sort(function(a,b){
        return a-b;
      })[arr[i].length-1];
    //here we push the highestNumber variable to the answer.
      answer.push(highestNumber);
    }
  }

  Finally, we can return the answer.

  function largestOfFour(arr) {
    var answer = [];
    for(var i = 0; i < arr.length; i+=1){
      var highestNumber = arr[i].sort(function(a,b){
        return a-b;
      })[arr[i].length-1];
      answer.push(highestNumber);
    }
    return answer;
  }

  Below, I have written a refactored implementation of this algorithm in both ES5 and ES6 syntax with manual tests that you can run locally with node or in the browser console.
*/

// ES5 Implementation Written For Testing Purposes
function largestOfFour(arr) {
  var answer = [];
  for(var i = 0; i < arr.length; i+=1){
    var highestNumber = arr[i].sort(function(a,b){
      return a-b;
    })[arr[i].length-1];
    answer.push(highestNumber);
  }
  console.log(answer);
  return answer;
}


// ES6 Implementation Written For Testing Purposes
const largestOfFourES6 = arr => {
  let answer = [];
  for(let i = 0; i < arr.length; i+=1){
    let highestNumber = arr[i].sort((a,b) => {
      return a-b;
    })[arr[i].length-1];
    answer.push(highestNumber);
  }
  console.log(answer);
  return answer;
}

// Manual Tests
console.log("Return Largest Numbers In Arrays");
console.log("");

console.log("----------------------------");
console.log("---------ES5 TESTS----------");
console.log("----------------------------");
console.log("");
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // => [5,27,39,1001]
console.log("^ Should Return [5,27,39,1001]");
largestOfFour([[1,2,3,4], [5,6,7,8], [9,10,11,12], [1,2,3,4]]); // => [4,8,12,4]
console.log("^ Should Return [4,8,12,4]");
largestOfFour([[1,3,2,6], [6,3,9,1], [9,8,7,6], [12,4,9,7]]); // => [6,9,9,12]
console.log("^ Should Return [6,9,9,12]");

console.log("");

console.log("----------------------------");
console.log("---------ES6 TESTS----------");
console.log("----------------------------");
console.log("");
largestOfFourES6([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // => [5,27,39,1001]
console.log("^ Should Return [5,27,39,1001]");
largestOfFourES6([[1,2,3,4], [5,6,7,8], [9,10,11,12], [1,2,3,4]]); // => [4,8,12,4]
console.log("^ Should Return [4,8,12,4]");
largestOfFourES6([[1,3,2,6], [6,3,9,1], [9,8,7,6], [12,4,9,7]]); // => [6,9,9,12]
console.log("^ Should Return [6,9,9,12]");
