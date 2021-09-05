//merge two arrays based on condition

const arrOne = ["a", "b", "c"];
const arrTwo = ["v", "g", "b"];

//merge two arrays on index of "b"
const mergeArrays = (arrayOne, arrayTwo, condition) => {
  const indexOfElementOne = arrayOne.indexOf("b");
  const indexOfElementTwo = arrayTwo.indexOf("b");
  //insert array two inside one
  if ((indexOfElementOne !== -1) & (indexOfElementTwo !== -1)) {
    const newSplicedOne = [...arrayOne];
    newSplicedOne.splice(indexOfElementOne, 1, ...arrayTwo);
    return newSplicedOne;
  }
  return [...arrayOne, ...arrayTwo];
};
console.log(mergeArrays(arrOne, arrTwo));

//closures--> this prints 4 all the time since i is available in all scopes. the loop finishes runing before the setTime out timer finishes after the loop finishes
/*for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 2000);
}*/
// console.log("second try");
//now lets fix this to print different numbers
/* for (var c = 5; c < 9; c++) {
  (function (b) {
    setTimeout(function () {
      console.log(b);
    }, 2000);
  })(c);
}*/
//https://stackoverflow.com/questions/5226285/settimeout-in-for-loop-does-not-print-consecutive-values

//We have two objects: Create a merge function to merge obj2 properties into obj1.
//Without using any inbuilt methods.
let obj1 = { name: "karan", lastName: "negi" };
let obj2 = { age: "26", occupation: "developer", gender: "male" };

//Output should be like –
//obj1 = { name: ‘karan’, lastName: ‘negi’, age:’26’, occupation: ‘developer’ }
const objMerge = { ...obj1, ...obj2 };
//without spread
const mergeTwoObj = (objOne, objTwo) => {
  const lengthObjOne = Object.keys(objOne).length;
  const lengthObjTwo = Object.keys(objTwo).length;
  const smaller = lengthObjOne > lengthObjTwo ? obj2 : obj1;
  const larger = lengthObjOne > lengthObjTwo ? obj1 : obj2;
  for (let [key, val] of Object.entries(smaller)) {
    larger[key] = val;
  }
  return larger;
};
// console.log(mergeTwoObj(obj1, obj2));

//Write a function such that it returns, any value b/w max and min but not
//the max and min value in an array.
//i.e let arr = [ 3, 5, 7, 1, 9 ]
//Output can be : 3 or 5 or 7

const returnVal = (arr) => {
  const newArr = arr.sort();
  const arrTwo = newArr.splice(1, newArr.length - 2);
  return arrTwo[Math.floor(Math.random() * arrTwo.length)];
};

// console.log(returnVal([3, 5, 7, 1, 9]));
//Can you write a program to sort items
//merge two sorted array into one sorted array
//data structures,
//palindrome program
//fibonacci series
//Regression testing palindrome number program
