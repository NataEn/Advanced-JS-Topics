`use strict`;
//! In a nut shell

//* Global scope, function scoped, blocked scopes
//! scoping
//* lexical scoping. Which means you can look up but you cannot look down or sideways

//!Variables
//* global variables: they can be accessed anywhere
//* const and let variables: they are blocked scoped
//* var variables: they are function scoped. But in strict mode they are block scoped

//!scope chain
//* inner scopes has access to its parent scopes. But outer scopes don,t have access to the inner scopes
//* we cannot access sibling scopes
function first() {
  const x = "hi";
  console.log(y);
  // console.log(globalVariable);
  function second() {
    const y = "I can only be access from inner scopes not outer scopes";
    console.log(x);
    // console.log(globalVariable);
  }
  function third() {
    console.log(y); // cannot access sibling scope
    console.log(x);
  }
  second();
}
const globalVariable = "I am a global variable I can be accssed anywhere";
first();

//!Variables
//* global variables: they can be accessed anywhere
//* const and let variables: they are blocked scoped
//* var variables: they are function scoped. But in strict mode they are block scoped

function first() {
  // console.log(globalScope);
  var j = "i am function scoped";

  if (true) {
    let x = "I am blocked scoped";
    const y = "I am blocked scoped too";
    var z = " i am only function scoped";
  }
  // console.log(x);
  console.log(z);
  function second() {
    console.log(j);
  }
  second();
}
first();
const globalScope = "i can be accssed";
// console.log(z);
first();
