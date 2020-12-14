# Java Script OOp and Prototypes

## Some Concepts

1. **Object literal**: `{a:"hi",b:123}`
2. **Object destructuring**: `{a,b}={a:"hi",b:123}`
   here the variables (a and b) must match the keys that are destructed.
   so here:
   `{f,x}={a:"hi",b:123}` f and x will be undefined.

## Get the type of a variable

Rather than using typof operator, it is a good idea to use the Object.constructor.name property that will return the specific name of the variable constructor.

## constructor function

Here, the `new` keyword is used with a function constructor to generate an instance of a pseudo-class.

```
function Person(firstName,lastName){
 this.firstName=firstName;
 this.lastName=lastName;
 }
```

This is how you create the pseudo-class Person:
calling the function:
const dude=Person("Jon","Mack") _the wrong way_

1.  with "use strict" this call will throw an error, since "this" will be undefined.
2.  without "use strict", this call will assign new attributes to the window object: "firstName", and "lastName", with the given values.

To create an actuall new object with this function we can do one of:

1.  use the "new" key word:

```
const dude=new Person("Jon","Mack")
```

2.  create a new object (dude) and call the function on it (the "this" is set to dude):

```
const dude={};
Person.call(dude,"Jon","Mack")
```

calling a function on an object (with the Class.call function) isn't quite the same as what the new key word does but similar things are being done when creating/defining the object.

## Adding functions to our new Object

One way is to create a const that holds the function in it, in the constructor:

```
function Person(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName;
this.fullName=function(){ return `${this.firstName} ${this.lastName}`};};
}

const dude=new Person("Alice","Black")
dude.fullName();
```

But, in this method, we have the word "this" reffering to the instance the function is called upon. And, as this function is created/copied on every new instance creation, we can just put it on the **_prototype_ of the function constructor** (the function prototype):
The function "Person", has a "Prototype" (and a **_proto_**) attribute that is pointing to Persons prototype.
When we use the "new" key word in `new Person("first","last")` the new instance will point to that same prorotype with its **_proto_**
attribute.
Thus, if we add:

```
Person.prototype.fullName=function(){ return `${this.firstName} ${this.lastName}`}
```

> functions have the **prototype** property, but their instances have the **proto** property
> Than every new instance of Person will point to that same function, that will have "this" reffering to the instance it is called upon:

```
dude.fullName();
```

## OOP Closure

If we would like to define a function reffering to a **private** attributes, we can define the function like so:

```
function Person(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName;
this.fullName=function(){ return `${firstName} ${lastName}`};};
}
```

Here, when the function "fullName" is created (when an instance is created), it has a closure, with "firstName" and "lastName" variables pointing to those values
recieved when the instance is created.

```
const dudn={};
Person.call(dude,"Boby","Brown");
console.log(dude);
console.log(dude.full_name());
dude.first_name="aaa";
console.log(dude.full_name());
console.log(dude.first_name);
```

will return in the console:

```
{first_name: "Boby", last_name: "Brown", full_name: ƒ}
Boby Brown
Boby Brown
aaa
```

The `fullName` function is a closure, it refers to the kind argument passed into the function constructor (and not this.fullName).

### Memory saving tips

1. each time we create a new Person with the `new` key word, all functions defined in the Person class will be copied to the new instance, creating many copies of those functions. all working well, but! as the new instance points to the prototype of Person, why not add those functions to that same prototype:

```
Person.prototype.full_name=function(){
    return this.first_name+" "+this.last_name;
}
```

These functions, defined in the Class's prototype will be **publicly** available for all instances created from it.

## OOP with Constructor pattern

### Psudo-classicle inharitance

Applying the `Person.call()` function withing the Person constructure function is similar to calling the `super()` function in other languages.
However this does not link the two classes together, just simply calls the `Profession` constructor function from the `Person` constructor function.

```
function Person(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;
}
Person.prototype.full_name=function(){
    return `$(this.first_name) $(this.last_name)`;
}

function Professional(first_name,last_name,honorific){
    Person.call(this,first_name,last_name);
    this.honorific=honorific;
}
```

We can also add a `professional_name` property to Professional:

```
Professional.prototype.professional_name=function(){
    return `$(this.honorific) $(this.first_name) $(this.last_name)`
}
```

But, to link the two constructors together we need to define `Person` as the **prototype** of `Professional`

```
Profesional.prototype=Object.create(Person.prototype);
```

## OOP with Prototype Pattern

To wrap it all up we can use **object litarals** and use the **Prototype pattern** to define inharitance:

1. The `Person` object has an `init` property that holds a function that initializes the instace created.
2. The `init` property is just a regular property as well as the `full_name` property
3. we created a base object `Person`, then another object `Bob`, and defined it's prototype to be `Person`, the first parameter in the `Object.create()`.
   Then we call the `init` function inharited from `Person`.

```
const Person={
    init:function(first_name,last_name){
        this.first_name=first_name;
        this.last_name=last_name;
        return this;
    }
    full_name:function(){
        return `$(this.first_name) $(this.last_name)`
    }
const Bob=Object.create(Person);
Bob.init("Bob","Black");
}
```

The second way to initialize the `Bob` object is to pass a second parameter to the `Object.create()` function. The second parameter is the object that **describes** the `Bob` instance.

```
const Person={
    full_name:function(){
        return `$(this.first_name) $(this.last_name)`
    }
const Bob=Object.create(Person,{
    first_name:{value:'Bob'},
    last_name:{value:'Black'}
});
}
```

The third way to create and initialize a new `Person` instance is by defining a constructor factory function, that returns an object, and callng it.

```
function PersonFactory(){
    const person=Object.create(Person);
    person.first_name=first_name;
    person.last_name=last_name;
    return person;
}
const Bob=PersoFactory("Bob","Black");

```

## ES6 Calss and Extand keywords

A class is a blue-print for creating an object. We instanciate the class using the new keyword. The `new` keyword calls the `constructor` function.

> 1.  the code inside the class is always in `use strict` mode
> 2.  The variables defined in the class (e.g. `_classParamOne`) are associated with the class itself, similar to using the constructor patern.
> 3.  The constructor function is just a function
> 4.  The "getter" function (with space between get and the functio name) as in `get firstName()` allows calling the `firstName()` function as if it was a property: `object.firstName`.
> 5.  The "setter" function is being called on **reasigning** a new value to the name of the function, as if it was a property `object.firstName="newName"`.

```
class Person{
    _classParamOne="";
    _classParamTwo="";

    constructor(firstName,lastName){
        this._firstName=firstName;
        this._lastName=lastName;
        return this;
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return `$(this._firstName) $(this._lastName)`
    }

    set firstName(name){
        if(name!==""){
            console.error("first name cannot be blank");
        }
        else{
            this._firstName=name;
        }
    }
    greating(){
        return `Hello! I am ${this._firstName}`;
    }
}
const Bob=new Person('Bob','Black');
Bob.lastname;
Bob.firstName;
Bob.firstName="";
Bob.firstName="Boby";
Bob.greating();
```

### Inharitance

The `Student` class inharits from the `Person` class, with a construcctor function calling the `super()` function (that calls the Person constructor), only then adding new properties to the Studant class

```
class Student extends Person{
constructor (firstName,lastName,course){
    super(firstName,lastName);
    this.course=course;
}
greating(){
    return `${super.greating()} I study ${this.course}`
}
}

const Alice=new Student("Alice","White","Biology");
Alice.fullName;
Alice.lastName;
Alice.firstName="Alicia";
Alice.fullName;
Alice.greating();
```

**Remember!** this is ES6 terminology, a sinthetic suger for the prototype and constructor patterns, so you could use the `class` syntax to extend objects that were defined using prototype and constructor patterns.
