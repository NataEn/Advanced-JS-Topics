//Arrays
// const myArr=[1,"Bob",[1,2],undefined,null,{1:123}];
const myArr = [1, 2, 33, 44, 66];
//first item
// console.log(myArr[0]);
// console.log(myArr[myArr.length - 1]);
// console.log(myArr[myArr.length]);
// console.log(myArr.constructor);
let newArr = new Array(5);
newArr[2] = 4;
console.log(newArr);
for (let i = 0; i < newArr.length; i++) {
  newArr[i] = myArr[i];
}
console.log(newArr);
newArr = myArr;
myArr[0] = "changed";
console.log(`myArr:${myArr}, newArr:${newArr}`);
newArr[2] = "doubleChange";
console.log(`myArr:${myArr}, newArr:${newArr}`);

//Array Methods:
//pop-last element+return
const lastItem = newArr[newArr.length - 1];
const returnedFromPop = newArr.pop();
console.log(`lastItem===returnedFromPop: ${lastItem === returnedFromPop}`);
console.log(newArr);
//push-returns new length, adds item/s to end
const oldLength = newArr.length;
const returnedFromPush = newArr.push(23);
console.log(
  `oldLength<returnedFromPush: ${
    oldLength < returnedFromPush
  }, ${oldLength}, ${returnedFromPush}`
);
console.log(newArr);
//shift-removes from start

//join
const newStr = [1, 2, 3].join(" ");
console.log(newStr);

//Objects:
const Book = {
  Name: "MyBook",
  Author: "Boby",
  year: new Date().getFullYear(),
  chapters: ["chap1", "chap2", "chap3", "chap4", "chap5"],
};
console.log(Book);
// for (const property in Book) {
//   console.log(`${property}: ${Book[property]}`);
// }
const objs = [{}, {}, {}, {}];
for (const obj of objs) {
  obj["new_key"] = 1;
  obj.new_key_sec = 2;
  console.log(`objs${JSON.stringify(obj)}`);
}

// for (const item of Book.chapters) {
//   console.log(`${item}`);
// }
// console.log(Book.chapters, Book.chapters.length);
// const newLength = Book.chapters.unshift("prolog");
// console.log(Book.chapters, newLength);

// //split
// const autorLetter = Book.Author.split("");
// console.log(autorLetter);
// //splice
let spliced = Book.chapters.splice(3, 0, "Brake");
console.log(Book.chapters, spliced);
// {
//   let spliced = Book.chapters.splice(3, 1);
//   console.log(Book.chapters, spliced);
// }
// Book.oldChapters = [...Book.chapters];
//slice
console.log(Book.chapters);
const sliced = Book.chapters.slice(2, 3);
console.log(Book.chapters, sliced);
//findIndex
let index = Book.chapters.findIndex((item) => item === "chap1");
console.log(`index ${index}`);

Book.chapters.push("chap1");
index = Book.chapters.findIndex((item) => item === "chap1");
console.log(`index ${index}`);
