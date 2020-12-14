# Arrays

## Array Destructuring

Get the second param in an array

```
[,g]=[1,2,3] //g =2
```

Get the forth param in an array (this is possible but already abusing...):

```
[,,,e]=[1,3,4,6,7]// e=4
```

Get the rest params from the secons one:

```
[,...t]=[1,2,3]//t=[2,3]
```

## Reverse an Array

`const a=[1,2,3,4]`

1. Changing the original array: `a.reverse()`
2. Creating a new array:`[...a].reverse()` with ES6
3. Creating a new array: no es6 syntax

```
function reverseArray(arr) {
  return arr.reduce(function (acc, item) {
    acc.unshift(item);
    return acc;
  }, []);
}
```

### Exercises

1. unsorted array contains (n-1) numbers out of n (one number is missing). numbers are consecutive so the difference between a num and the
   next is known. find the missing number (with O(n))

**answer 1**: based on the formula for the sum of arithmetic progression
`s=((a1-an)/2)\*n`:

```
let array = [2, 5, 1, 4, 9, 6, 3, 7];
let max = 9;
let min = 1;
findMissingNumber(arrayOfIntegers, max, min);//should return 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
// Iterate through array to find the sum of the numbers
let sumOfIntegers = 0;
for (let i = 0; i < arrayOfIntegers.length; i++) {
sumOfIntegers += arrayOfIntegers[i];
}
```

//implement the formula for arithmetic proggression:

let sum=((max-min)/2)\*array.length
let missingNum= sumOfIntegers-sum
return missingNum
}
