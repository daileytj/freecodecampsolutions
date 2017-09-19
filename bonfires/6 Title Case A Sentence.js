/*
Title Case A Sentence

Objective: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

Note: For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Example: Given the string "The quick brown fox jumped over the lazy dog" should return "The Quick Brown Fox Jumped Over The Lazy Dog".


Concepts To Understand:
-String.prototype.split() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
-String.prototype.replace() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
-String.prototype.toLowerCase() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
-String.prototype.toUpperCase() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
-Array.prototype.join() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
-Array.prototype.map() method
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Given Starter Code:
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
*/

/*
  Walkthrough:

  We start by creating a new function named titleCase and give it a string (str) argument.

  function titleCase(str){

  }

  There are 2 ways that come to mind when I think about solving this problem.

  The first approach could be to first use the toLowerCase() method to make all the characters of the given string lowercase and to then use the split() method to split the given string into an array.
  Next, I would use a for loop to loop through each word.
  Within that loop I would split each word into a new array of individual characters, then target the character at the first index and use the toUpperCase() method on that character.
  I would then have to join all the characters of that word back together within the loop, and finally join all the individual words together at the conclusion of the loop.
  This approach would work but would have a really bad time complexity. As the number of words being looped through increased the time to run our algorithm would increase in an inefficient mannner.

  The second approach would be to use the Array.prototype.map() method instead of a loop and the replace() method instead of directly targeting an array by its index.
  So we still start by using the toLowerCase() method and the split() method to turn our given string into an array of all lowercase characters.

  function titleCase(str){
  str = str.toLowerCase().split(' ');
  return str;
  }

  Using the map() method we can apply a function to each array item.
  The function we will build will perform the action of replacing the first character of each word with the corresponding uppercase character using the replace() method.

  function titleCase(str) {
    str = str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    });
  }

  Finally, we will join the mutated str back together using the join() method.

  function titleCase(str) {
    str = str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    });
    return str.join(' ');
  }

  Below, I have written a refactored implementation of this algorithm in both ES5 and ES6 syntax with manual tests that you can run locally with node or in the browser console.
*/

// ES5 Implementation Written For Testing Purposes
function titleCase(str) {
  str = str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  });
  console.log(str.join(' '));
  return str.join(' ');
}


// ES6 Implementation Written For Testing Purposes
const titleCaseES6 = str => {
  str = str.toLowerCase().split(' ').map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  console.log(str.join(' '));
  return str.join(' ');
}

// Manual Tests
console.log("Title Case A Sentence");
console.log("");

console.log("----------------------------");
console.log("---------ES5 TESTS----------");
console.log("----------------------------");
console.log("");
titleCase("Just some test sentence"); // => Just Some Test Sentence
console.log("^ Should Return Just Some Test Sentence");
titleCase("I'm a little tea pot"); // => I'm A Little Tea Pot
console.log("^ Should Return I'm A Little Tea Pot");
titleCase("The quick brown fox jumped over the lazy dog"); // => The Quick Brown Fox Jumped Over The Lazy Dog
console.log("^ Should Return The Quick Brown Fox Jumped Over The Lazy Dog");

console.log("");

console.log("----------------------------");
console.log("---------ES6 TESTS----------");
console.log("----------------------------");
console.log("");
titleCaseES6("Just some test sentence"); // => Just Some Test Sentence
console.log("^ Should Return Just Some Test Sentence");
titleCaseES6("I'm a little tea pot"); // => I'm A Little Tea Pot
console.log("^ Should Return I'm A Little Tea Pot");
titleCaseES6("The quick brown fox jumped over the lazy dog"); // => The Quick Brown Fox Jumped Over The Lazy Dog
console.log("^ Should Return The Quick Brown Fox Jumped Over The Lazy Dog");
