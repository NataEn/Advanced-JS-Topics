# Java Script OOp and Prototypes

## Get the type of a variable

Rather than using typof operator, it is a good idea to use the Object.constructor.name property that will return the specific name of the variable constructor.

## constructor function
function Person(firstName,lastName){
 this.firstName=firstName;
 this.lastName=lastName;
 }
 
 calling the function:
 const dude=Person("Jon","Mack")
 1) with "use strict" this call will throw an error, since "this" will be undefined.
 2) without "use strict", this call will assign new attributes to the window object: "firstName", and "lastName", with the given values.
 
 To create an actuall new object with this function we can do one of:
 1) use the "new" key word:
 const dude=new Person("Jon","Mack")
 
 2) create a new object (dude) and call the function on it (the "this" is set to dude):
 const dude={};
 Person.call(dude,"Jon","Mack")
