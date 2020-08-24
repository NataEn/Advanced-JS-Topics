# Java Script OOp and Prototypes

## Get the type of a variable

Rather than using typof operator, it is a good idea to use the Object.constructor.name property that will return the specific name of the variable constructor.

## constructor function
```
function Person(firstName,lastName){
 this.firstName=firstName;
 this.lastName=lastName;
 }
 ```
 
 calling the function:
 const dude=Person("Jon","Mack")
 1) with "use strict" this call will throw an error, since "this" will be undefined.
 2) without "use strict", this call will assign new attributes to the window object: "firstName", and "lastName", with the given values.
 
 To create an actuall new object with this function we can do one of:
 1) use the "new" key word:
 ```
 const dude=new Person("Jon","Mack")
 ```
 
 2) create a new object (dude) and call the function on it (the "this" is set to dude):
 ```
 const dude={};
 Person.call(dude,"Jon","Mack")
 ```
 
 ## Adding functions to our new Object
 One way is to create a const that holds the function in it, in the constructor:
 ```
 function Person(firstName,lastName){
 this.firstName=firstName;
 this.lastName=lastName;
 this.fullName=function(){ return `${this.firstName} ${this.lastName}`};};
 }
 
 const dude=new Person("dd","ss")
 dude.fullName();
 ```
 But, in this method, we have the word "this" reffering to the instance the function is called upon. And. as this function is created/copied on every new instance creation, we can just put it on the **prototype of the function constructor**:
 The function "Person", has a "Prototype" (and a "__proto__") attribute that is pointing to Persons prototype. 
 When we use the "new" key word in `new Person("first","last")` the new instance will point to that same prorotype with its "__proto__" 
 attribute.
 Thus, if we add:
 ```
 Person.prototype.fullName=function(){ return `${this.firstName} ${this.lastName}`}
 ```
 Than every new instance of Person will point to that same function, that will have "this" reffering to the instance it is called upon:
 ```
 dude.fullName();
 ```
 
 However!
 If we would like to define a function reffering to a **private** attributes, we can define the function like so:
 ```
 function Person(firstName,lastName){
 this.firstName=firstName;
 this.lastName=lastName;
 this.fullName=function(){ return `${firstName} ${lastName}`};};
 }
 ```
 Here, when the function "fullName" is created, it has a closure, with "firstName" and "lastName" variables pointing to those values 
 recieved when the instance is created.
 
 
