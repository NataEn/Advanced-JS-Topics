// There is an array with some numbers. All numbers are equal except for one. Try to find it!

const { trueDependencies } = require("mathjs");

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
  const sortedArr = arr.sort();
  if (sortedArr[0] === sortedArr[1]) {
    return sortedArr[sortedArr.length - 1];
  } else {
    return sortedArr[0];
  }
}
// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 3 strings.
function findUniqStr(arr) {
  for (let i = 0; i < arr.length - 3; i += 3) {
    const firstLetter = arr[i].toLowerCase().split().sort()[0];
    const secondLetter = arr[i + 1].toLowerCase().split().sort()[0];
    const thirdLetter = arr[i + 2].toLowerCase().split().sort()[0];
    const objArr = [
      { letter: firstLetter, index: i },
      { letter: secondLetter, index: i + 1 },
      { letter: thirdLetter, index: 1 + 2 },
    ];
    objArr.sort((a, b) => (a.letter !== b.letter ? a : b));
    if (
      objArr[0].letter !== objArr[2].letter &&
      objArr[0].letter === objArr[1].letter
    ) {
      return arr[objArr[2].index];
    } else if (
      objArr[0].letter !== objArr[2].letter &&
      objArr[1].letter === objArr[2].letter
    ) {
      return arr[objArr[0].index];
    }
  }
}
["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"];

//Are they the "same"?
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, Elixir, Haskell, PureScript, Pascal, R, Rust, Shell).
// If a or b are nil (or null or None), the problem doesn't make sense so return false.

function comp(array1, array2) {
  function calcRoot(num) {
    const root = Math.pow(num, 1 / 2);
    if (Number.isInteger(root) && num !== 1 && num !== 0) {
      return calcRoot(root);
    } else {
      return num;
    }
  }

  if (!array1 || !array2) {
    return false;
  } else {
    const arr1 = array1.sort();
    const arr2 = array2.sort();

    let equal = true;
    for (const num of arr1) {
      const double = num * num;
      arr2Index = arr2.indexOf(double);
      arr1Index = arr1.indexOf(double);
      if (arr2Index === arr1Index) {
        equal = true;
      } else {
        equal = false;
      }
    }
    return equal;
  }
}
console.log(
  comp(
    [1, 10, 10, 5, 6, 0, 5, 10, 4, 4, 4, 10, 3, 1, 2, 6, 4, 4, 8, 0, 2],
    [
      16,
      25,
      9,
      1,
      4,
      100,
      16,
      100,
      100,
      0,
      36,
      25,
      16,
      100,
      16,
      2,
      4,
      64,
      0,
      36,
      16,
    ]
  )
);
//get average of numbers in an array
function getAverage(marks) {
  //TODO : calculate the downwar rounded average of the marks array
  const sum = marks.reduce((reducer, accu) => reducer + accu, 0);
  return parseInt(sum / marks.length);
}
//sorting array with mixed numbers and strings:
function dbSort(a) {
  let numbers = [];
  let strings = [];
  for (let item of a) {
    if (typeof item === "string") {
      strings.push(item);
    }
    if (typeof item === "number") {
      numbers.push(item);
    }
  }
  return [
    ...numbers.sort((a, b) => {
      return a - b;
    }),
    ...strings.sort(),
  ];
}
