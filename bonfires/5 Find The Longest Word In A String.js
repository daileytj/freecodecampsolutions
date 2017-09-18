/*
Find The Longest Word In A String

Objective: Return the length of the longest word in the provided sentence.

Note: Your response should be a number.

Example: Given the string "The quick brown fox jumped over the lazy dog" should return 6.


Concepts To Understand:
-String.prototype.split() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
-String.length property
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

Given Starter Code:
function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
*/

/*
  Walkthrough:

  We start by creating a new function named findLongestWord and give it a string (str) argument.

  function findLongestWord(str){

  }

  Next, we need to find the longest word. We can do this by looping through every word in the given sentence and checking if it is the longest word thus far.
  In order to do this, we will first declare a new variable lengthOfLongestWord and set it's value to 0. This variable will give us something to test against when checking the length of each word in our sentence.

  function findLongestWord(str){
    var lengthOfLongestWord = 0;
  }

  Before we can loop through the sentence, we need to split the sentence into an array.
  We can do this using the String.prototype.split() method.
  We will split the sentences at every whitespace character to give us an array of each separate word at a different index.
  We will declare a new variable sentenceArray and set it equal to the split string.

  function findLongestWord(str){
    var lengthOfLongestWord = 0;
    var sentenceArray = str.split(' ');
  }

  Now we can loop through the words in the sentenceArray testing each words length property against the current value of lengthOfLongestWord.
  If the current words length property is greater than the current value of the lengthOfLongestWord variable we will update the variable to be the value of the current words length property.
  When the looping is complete, we will return the value of the lengthOfLongestWord variable.

  function findLongestWord(str){
    var lengthOfLongestWord = 0;
    var sentenceArray = str.split(' ');

    for (var i = 0; i < sentenceArray.length; i++) {
      if (sentenceArray[i].length > lengthOfLongestWord) {
        lengthOfLongestWord = sentenceArray[i].length;
        }
    }
    return lengthOfLongestWord;
  }

  Below, I have written a refactored implementation of this algorithm in both ES5 and ES6 syntax with manual tests that you can run locally with node or in the browser console.
*/

// ES5 Implementation Written For Testing Purposes
function findLongestWord(str){
  var lengthOfLongestWord = 0;
  var sentenceArray = str.split(' ');
  for (var i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > lengthOfLongestWord) {
      lengthOfLongestWord = sentenceArray[i].length;
      }
  }
  console.log("The longest word in the string '", str, "' is", lengthOfLongestWord, "characters long.");
  return lengthOfLongestWord;
}

// ES6 Implementation Written For Testing Purposes
const findLongestWordES6 = str =>{
  let lengthOfLongestWord = 0;
  let sentenceArray = str.split(' ');
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > lengthOfLongestWord) {
      lengthOfLongestWord = sentenceArray[i].length;
      }
  }
  console.log("The longest word in the string '", str, "' is", lengthOfLongestWord, "characters long.");
  return lengthOfLongestWord;
}

// Manual Tests
console.log("Find The Longest Word");
console.log("");

console.log("----------------------------");
console.log("---------ES5 TESTS----------");
console.log("----------------------------");
console.log("");
findLongestWord("Just some test sentence"); // => 8
console.log("^ Should Return 8");
findLongestWord("Another test subject"); // => 7
console.log("^ Should Return 7");
findLongestWord("The quick brown fox jumped over the lazy dog"); // => 6
console.log("^ Should Return 6");

console.log("");

console.log("----------------------------");
console.log("---------ES6 TESTS----------");
console.log("----------------------------");
console.log("");
findLongestWordES6("Just some test sentence"); // => 8
console.log("^ Should Return 8");
findLongestWordES6("Another test subject"); // => 7
console.log("^ Should Return 7");
findLongestWordES6("The quick brown fox jumped over the lazy dog"); // => 6
console.log("^ Should Return 6");
