//who is bigger?
const defaultCompare = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
};

const arr = [6, 7, 3, 9, 9, 4];
const compArr = [];
for (let i = 0; i < arr.length - 1; i++) {
  const item = defaultCompare(arr[i], arr[i + 1]);
  compArr.push(item);
}
console.log(compArr);
//this binary search should work with: O(n), Fixed memory (not to create more vars in functions), use loops
const binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    switch (compare(element, array[middle])) {
      case 1:
        left = middle + 1;
        break;
      case -1:
        right = middle - 1;
        break;
      case 0:
        return middle;
    }
  }
  return -1;
};

const myArray = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(binarySearchWithLoops(myArray, 3));
console.log(binarySearchWithLoops(myArray, 2));

//this binary search should work with: O(n), Fixed memory (not to create more vars in functions),do not use loops, use constant vars
//infinite loop.... don't know why....
const binarySearchWithRecursion = (
  array,
  element,
  compare = defaultCompare,
  left = 0,
  right = myArray.length - 1
) => {
  if (left > right) return -1;
  const middle = Math.floor(left + right / 2);
  const comparedResult = compare(element, array[middle]);
  console.log(middle, left, right);

  if (comparedResult === 1) {
    binarySearchWithRecursion(array, element, compare, middle + 1, right);
  } else if (comparedResult === -1) {
    binarySearchWithRecursion(array, element, compare, left, middle - 1);
  } else {
    return middle;
  }
};

console.log(binarySearchWithRecursion(myArray, 3));
console.log(binarySearchWithRecursion(myArray, 2));
