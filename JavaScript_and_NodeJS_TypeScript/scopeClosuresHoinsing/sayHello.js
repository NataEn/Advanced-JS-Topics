const d = 40;
let e = 50;
var f = 60;

function sayHello() {
  console.log(d, e, f);
}

// let foo = ["a", "b", "c", "d"];
// const bar = ["x", "y", "z"];
// for (let i = 0; i < foo.length; i++) {
//   const x = foo[i];
//   for (i = 0; i < bar.length; i++) {
//     const y = bar[i];
//     console.log(y);
//   }
// }

function myFunc3(i) {
  console.log(i);
}
for (let i = []; i.length < 3; i.push(i)) {
  setTimeout(() => myFunc3(i), 0);
}
