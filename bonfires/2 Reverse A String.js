/*
Reverse a String

Objective: Reverse a given string and return it as a String object

Example: Given the string "hello", the function should return "olleh"

Concepts To Understand:
-Global String Object
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
-String.prototype.split() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
-Array.prototype.reverse() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
-Array.prototype.join() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Given Starter Code:
function reverseString(str) {
  return str;
}

reverseString("hello");
*/

/*
  Walkthrough:

  We start by creating a new function named reverseString and give it a string (str) argument.

  function reverseString(str){

  }

  Before we can reverse the string we have to convert the string to an array using the String.prototype.split() method.

  function reverseString(str){
    str = str.split("");
    return str;
  }

  You can read more on how the String.prototype.split() method works by using the link above, but for the purposes of this walkthrough we will assume you understand how this method works.
  So,
  Using the string, "hello", if we call the function as it currently stands it will return an array of ["h", "e", "l", "l", "o"].

  Now we can reverse the array using the Array.prototype.reverse() method.

  function reverseString(str){
    str = str.split(""); => ["h", "e", "l", "l", "o"]
    str = str.reverse();
    return str;
  }

  Again, assuming you have checked the above link on how the Array.prototype.reverse() method works,
  using the string "hello", the function will now return the reverse of the array, giving us a new array ["o", "l", "l", "e", "h"].

  Now we need to join this reversed array back together so we can return a String object.

  function reverseString(str){
    str = str.split(""); => ["h", "e", "l", "l", "o"]
    str = str.reverse(); => ["o", "l", "l", "e", "h"]
    str = str.join("");
    return str;
  }

  One final assumption of you having checked the above link on how the Array.prototype.join() method works,
  using the string "hello", we can see that this function will now return the reversed string "elloh".

  function reverseString(str){
    str = str.split(""); => ["h", "e", "l", "l", "o"]
    str = str.reverse(); => ["o", "l", "l", "e", "h"]
    str = str.join(""); => "olleh"
    return str; => "olleh"
  }

  We can now use javascript's method chaining and directly return our object to refactor our code so its not as messy.

  function reverseString(str){
   return str.split("").reverse().join("");
  }

  reverseString("hello"); => "olleh"

  Below, I have written the implementation of this algorithm in both ES5 and ES6 syntax with manual tests that you can run locally with node or in the browser console.
*/

// ES5 Implementation Written For Testing Purposes
function reverseString(str) {
  var reversedString =  str.split("").reverse().join("");
  console.log(reversedString);
  return reversedString;
}

// Refactored ES5 Implementation
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// ES6 Implementation Written For Testing Purposes
const reverseStringES6 = str => {
  let reversedString = str.split("").reverse().join("");
  console.log(reversedString);
  return reversedString;
}

// Refactored ES6 Implementation
// const reverseStringES6 = str => {
//   return str.split("").reverse().join("");
// }

// Manual Tests
console.log("Reverse A String");
console.log("");

console.log("----------------------------");
console.log("---------ES5 TESTS----------");
console.log("----------------------------");
console.log("");
reverseString("hello"); // => "olleh"
console.log("^ Should Return 'olleh'");
reverseString("world"); // => "dlrow"
console.log("^ Should Return 'dlrow'");
reverseString("abcdefg"); // => "gfedcba"
console.log("^ Should Return 'gfedcba'");

console.log("");

console.log("----------------------------");
console.log("---------ES6 TESTS----------");
console.log("----------------------------");
console.log("");
reverseStringES6("hello"); // => "olleh"
console.log("^ Should Return 'olleh'");
reverseStringES6("world"); // => "dlrow"
console.log("^ Should Return 'dlrow'");
reverseStringES6("abcdefg"); // => "gfedcba"
console.log("^ Should Return 'gfedcba'");
