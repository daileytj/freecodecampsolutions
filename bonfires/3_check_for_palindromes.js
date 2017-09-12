/*
Check For Palindromes

Objective: Return true if the given string is a palindrome. Otherwise, return false.

Notes: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
You'll need to handle strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
You'll also need to handle strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Example: Given the string "racecar" should return true.
Given the string "race CAR" should return true.
Given the string "abcdefg" should return false.

Concepts To Understand:
-Palindromes
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
-String.prototype.replace() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
-String.prototype.toLowerCase() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
-Regular expressions
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Given Starter Code:
function palindrome(str) {

  return true;
}
palindrome("eye");
*/

/*
  Walkthrough:

  We start by creating a new function named palindrome and give it a string (str) argument.

  function palindrome(str){

  }

  First, we need to convert our given string to all lowercase letters.
  This can be done using the String.prototype.toLowerCase method.

  function palindrome(str){
    var lowerCaseString = str.toLowerCase();
  }

  Next, we need to remove all the non-alphanumeric characters and whitespace.
  This can be done using the String.prototype.replace() method along with regular expressions.
  Regular expressions are patterns used to match character combinations in strings and you can read more about them using the link provided above.

  We will use the /[\W_]/g regular expression to remove all non-alphanumeric characters from our string.

  function palindrome(str){
    var lowerCaseString = str.toLowerCase();
    var stringAfterReplace = lowerCaseString.replace(/[\W_]/g, '');
  }

  We can refactor this code using method chaining to produce the following:

  function palindrome(str){
    var originalStringManipulated = str.toLowerCase().replace(/[\W_]/g, '');
  }

  Now we need to perform a string reversal, which we did in the first bonfire "reverse a string".
  We will reuse that implementation and compare the original string with the new reversed string.
  If the strings are equal then the given string is a palindrome and will return true, otherwise it is not a palindrome and will return false.

  function palindrome(str){
    var originalStringManipulated = str.toLowerCase().replace(/[\W_]/g, '');
    var reverseString = originalStringManipulated.split('').reverse().join('');
    return reverseString === originalStringManipulated;
  }

  palindrome("eye"); => true

  Below, I have written a refactored implementation of this algorithm in both ES5 and ES6 syntax with manual tests that you can run locally with node or in the browser console.
*/

// ES5 Implementation Written For Testing Purposes
function palindrome(str) {
  console.log("");
  console.log("Is ", str, " a palindrome?");
  var originalStringManipulated = str.toLowerCase().replace(/[\W_]/g, '');
  var reverseString = originalStringManipulated.split('').reverse().join('');
  if(reverseString === originalStringManipulated){
    console.log("true");
  }
  else{
    console.log("false");
  }
  return reverseString === originalStringManipulated;
}

// ES6 Implementation Written For Testing Purposes
const palindromeES6 = str => {
  console.log("");
  console.log("Is ", str, " a palindrome?");
  let originalStringManipulated = str.toLowerCase().replace(/[\W_]/g, '');
  let reverseString = originalStringManipulated.split('').reverse().join('');
  if(reverseString === originalStringManipulated){
    console.log("true");
  }
  else{
    console.log("false");
  }
  return reverseString === originalStringManipulated;
}

// Manual Tests
console.log("Is A Palindrome?");
console.log("");

console.log("----------------------------");
console.log("---------ES5 TESTS----------");
console.log("----------------------------");
console.log("");
palindrome("racecar"); // => true
console.log("^ Should Return true");
palindrome("never odd or even"); // => true
console.log("^ Should Return true");
palindrome("not a palindrome"); // => false
console.log("^ Should Return false");

console.log("");

console.log("----------------------------");
console.log("---------ES6 TESTS----------");
console.log("----------------------------");
console.log("");
palindromeES6("racecar"); // => true
console.log("^ Should Return true");
palindromeES6("never odd or even"); // => true
console.log("^ Should Return true");
palindromeES6("not a palindrome"); // => false
console.log("^ Should Return false");
