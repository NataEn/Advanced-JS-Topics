///Array.sort()
// const nums = [2, 5, 6, 1, 3, 9];
// const letters = ["s", "t", "g", "a"];
// const nums2 = [11, 34, 2, 677, 333];
// const words = ["dog", "dodo", "cat", "potato"];
// console.log(words.sort());
const numbers = [1, -5, 666, 2, 400, 11];

const sortingFunctionAscending = (a, b) => {
  //diff btw a and b -> negative => a before b
  //diff btw a and b -> positive=> b before a
  //diff btw a and b -> equal => stay the same
  //or -1, or 1, or 0
  //   if (a < b) {
  //     return -1;
  //   } else if (a > b) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  return a - b;
};
const sortingFunctionDescending = (a, b) => {
  //   if (a > b) {
  //     return -1;
  //   } else if (a < b) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  return b - a;
};
// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// console.log(foods.sort()); //ascending
// console.log(
//   foods.sort((a, b) => {
//     if (a > b) {
//       return -1;
//     } else if (a < b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
// );
// console.log(foods.sort((a, b) => b - a));
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
//ascending
console.log(
  foodsWithUpperCase.sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower > bLower) {
      return -1;
    } else if (aLower < bLower) {
      return 1;
    } else {
      return 0;
    }
  })
);
//descending
console.log(
  foodsWithUpperCase.sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower < bLower) {
      return -1;
    } else if (aLower > bLower) {
      return 1;
    } else {
      return 0;
    }
  })
);
console.log(
  foodsWithUpperCase.sort(
    (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
  )
);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words.sort((a, b) => a.length - b.length));
