/** Let learn JS classes */

class Shape {
  constructor(lines, dots) {
    console.log("creating shape");
    this.lines = lines;
    this.dots = dots;
  }
}

const myShape = new Shape();

class Rectangle {
  constructor(_width, height, color) {
    this.width = _width;
    this.height = height;
    this.color = color;
  }
  get rwidth() {
    return this.width;
  }
  get rheight() {
    return this.height;
  }

  get rcolor() {
    return this.color;
  }
  set rcolor(color) {
    this.color = color;
    return this.color;
  }
  set rwidth(newWidth) {
    this.width = newWidth;
    return this.width;
  }
}
// the Rectangle class is actually a constructor function that when
//it runs it creates a new object- aka an instance.
// in the class the "this" keyword addresses the new instance, and the constructor
//returns a new instance, when all methods declared in the class are staying on the prototype= the constructor function

Rectangle.prototype.sayColor = function sayColor() {
  return this.color + "proto";
};
const myRec = new Rectangle(4, 5, "green");
myRec.rcolor = "yellow";
console.log(myRec.height, myRec.width, myRec.color, myRec.sayColor());

//print all methods of the prototype
console.log(Object.getOwnPropertyNames(Rectangle.prototype));
//creating a constructor function without class declaration:

//this is the constructor function replacing the constructor
// in the class declaration
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.getName = function () {
  return this.name;
};
console.log(Object.getOwnPropertyNames(User.prototype));

const myUser = User("max", 23);
console.log(myUser);
const mySecUser = new User("ali", 34);
console.log(mySecUser);

//lets do the same for the Rectangle class declaration:
const myRec1 = Rectangle(2, 3, "pink");
console.log(myRec1.rwidth);
const myRec2 = new Rectangle(2, 5, "blue");
console.log(myRec2.rwidth);
