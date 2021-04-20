/**
 * map--returns new array
 * forEach-iterates the array only
 * filter- returns filtered array
 * sort-returns sorted array
 * **reduce-?
 */
const myArr = [1, 2, 3, 4, 5, 6];
const myObjArr = [{ name: "Dani" }, { name: "Dorin" }, { name: "Lital" }];

const powerOfTwo = (item) => item * item;

const addPrefixToName = (item, index, arr) => {
  console.log(index, arr);
  item.name = "Dr " + item.name;
  return item;
};

//implement map function
const myMap = (array, cb) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const newItem = cb(array[i], i, array);
    newArr.push(newItem);
  }
  return newArr;
};

const newMyArr = myMap(myArr, powerOfTwo);
console.log(newMyArr);
console.log(myArr.map(powerOfTwo));
// const newMyObjArr = myMap(myObjArr, addPrefixToName);
// console.log("changed arr", newMyObjArr);
