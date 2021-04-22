//Return Largest Numbers in Arrays
/**
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop,
 * and access each member with array syntax arr[i].
 */
function largestOfFour(arr) {
  return arr.map((subArr) => Math.max(...subArr));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//Confirm the Ending
//Check if a string (first argument, str) ends with the given target string
//(second argument, target).

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge,
//we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  const targetLength = target.length;
  const startIndex = str.length - targetLength;
  return str.substring(startIndex) === target;
}

confirmEnding("Bastian", "n");

//Repeat a String Repeat a String
/**
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 * For the purpose of this challenge, do not use the built-in .repeat() method.
 *
 */

function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

//Search and Replace

/**
 * Perform a search and replace on the sentence using the arguments provided
 * and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * Note: Preserve the case of the first character in the original
 * word when you are replacing it. For example if you mean to replace the word Book
 * with the word dog, it should be replaced as Dog
 *
 */
function myReplace(str, before, after) {
  //match formatting
  const afterFormatted =
    before[0] === before[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after.toLowerCase();
  return str.replaceAll(before, afterFormatted);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");

//DNA Pairing
/**
 * The DNA strand is missing the pairing element.
 * Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */
function pairElement(str) {
  const pairedDNA = [];
  for (const char of str) {
    const pair = [];
    let one = "";
    pair.push(char);
    //get char pair
    if (char === "C") one = "G";
    else if (char === "G") one = "C";
    else if (char === "A") one = "T";
    else if (char === "T") one = "A";
    pair.push(one);
    pairedDNA.push(pair);
  }

  return pairedDNA;
}

pairElement("GCG");

//Missing letters
//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let currentChar, nextChar, currentCode, nextCode;
  for (let i = 0; i < str.length - 1; i++) {
    currentChar = str[i];
    nextCode = str.charCodeAt(i) + 1;
    nextChar = String.fromCharCode(nextCode);
    if (nextChar !== str[i + 1]) {
      return nextChar;
    }
  }
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
