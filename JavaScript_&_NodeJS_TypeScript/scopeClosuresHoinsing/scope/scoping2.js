// //scope types: global, function, block
// //block- defined by {} for instance:
// {
// }
// if (true) {
// }
// //loops
// for (let i = 0; i < 3; i++) {
//   //here is a scope
// }
// const obj = {}; //can still be accessed with . notation and [] notation

// //functions- arrow, function declarations and literals
// function func() {
//   //scope
// }
// // const myFunc = () => [1,2,3];

// function myCrazyFunc() {
//   var a = 1;
//   let b = 2;
//   const c = 3;
//   if (true) {
//     var r = 44;
//     let s = 50;
//   }
//   function mySuperCrazyFunc() {
//     var d = 4;
//     let e = 5;
//     const f = 6;
//   }
//   //   console.log(a, b, c, s, r, e, f);
// }
// r = 3;
// myCrazyFunc();
// console.log(r, global.r);

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
const tested = test();
const testedThis = this;
console.log(testedThis);

//closure without setTimeout func
function myFunc() {
  let i;
  const funcs = [];
  for (i = 0; i < 3; i++) {
    console.log(i);
    const log = () => {
      return `i is: ${i}`;
    };

    funcs.push(log);
  }
  return funcs;
}
const logs = myFunc();
console.log(logs[0](), logs[1](), logs[2]());
