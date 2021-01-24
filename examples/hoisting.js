console.log(aa);
let aa = 123;
console.log(printName1("max"));
/*
All next calls will return a ReferenceError, since they are not yet defined
console.log(printName2("max")); 
console.log(printName2); 
console.log(printName3("max"));
*/
function printName1(name) {
  return name;
}

const printName2 = function (name) {
  return name;
};
const printName3 = (name) => name;
