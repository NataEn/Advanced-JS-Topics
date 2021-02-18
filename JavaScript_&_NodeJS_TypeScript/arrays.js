//1) unsorted array contains (n-1) numbers out of n (one number is missing). numbers are consecutive so the difference between a num and the
//   next is known. find the missing number (with O(n))

//answer 1 --> based on the formula for the sum of arithmetic progression s=((a1-an)/2)*n
let array = [2, 5, 1, 4, 9, 6, 3, 7];
let max = 9;
let min = 1;
//findMissingNumber(arrayOfIntegers, max, min); //should return 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // Iterate through array to find the sum of the numbers
  let sumOfIntegers = 0;
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    sumOfIntegers += arrayOfIntegers[i];
  }

  //implement the formula for arithmetic proggression:

  let sum = ((max - min) / 2) * array.length;
  let missingNum = sumOfIntegers - sum;
  return missingNum;
}
//Reverse an array with reduce
function reverseArray(arr) {
  return arr.reduce(function (acc, item) {
    acc.unshift(item);
    return acc;
  }, []);
}
//console.log(reverseArray([1, 4, 7]));

// for..in loop will iterate over array not in its order

function iterArray(arr) {
  for (let item in arr) {
    console.log(item);
  }
}
//iterArray([1, 2, 3, 4, 5]);

function iterIterable(iterable) {
  for (let val in iterable) {
    console.log(val);
  }
}
iterIterable([1, 2, 3, 4, 5]);
iterIterable({ a: 1, b: 2, c: "3" });
//1) unsorted array contains (n-1) numbers out of n (one number is missing). numbers are consecutive so the difference between a num and the
//   next is known. find the missing number (with O(n))

//answer 1 --> based on the formula for the sum of arithmetic proggression s=((a1-an)/2)*n
let array = [2, 5, 1, 4, 9, 6, 3, 7];
let max = 9;
let min = 1;
findMissingNumber(arrayOfIntegers, max, min); //should return 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // Iterate through array to find the sum of the numbers
  let sumOfIntegers = 0;
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    sumOfIntegers += arrayOfIntegers[i];
  }

  //implement the formula for arithmetic proggression:

  let sum = ((max - min) / 2) * array.length;
  let missingNum = sumOfIntegers - sum;
  return missingNum;
}
