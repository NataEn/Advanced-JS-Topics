"use strict";
//Person constructor function
const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
Person.prototype = {
  greet() {
    return `Hello, I am ${this.firstName}!`;
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const Boby = new Person("Boby", "Brown", 34);
console.log(Boby); //returns Person { firstName: 'Boby', lastName: 'Brown', age: 34 }
console.log(Boby.greet()); //returns "Hello, I am Boby!"
console.log(Boby.fullName);

const descriptor = Object.getOwnPropertyDescriptor(Boby, "firstName");
console.log(descriptor);
