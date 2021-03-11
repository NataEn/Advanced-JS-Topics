# Hoisting

We can write a function execution call before declaring it due to function-hoisting:

```
console.log(printName1('max'));
console.log(printName2('max'));
console.log(printName3('max'));
function printName1(name){
return name
}
const printName2=function(name){
    return name
}
const printName3=(name)=>name
```
