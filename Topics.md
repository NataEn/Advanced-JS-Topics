# Websites and Frameworks

## Rendering

1. client-side rendering- using frameworks like: React, Vue, Meteor, to render html pages in the browser.

As today's websites are more like applications offering different services, (Website as a Service - WaaS):
send messages, shop, update online information.

How does this work?

- Incomplete HTML document is delivered with JavaScrypt and css files.
- The js and css render the page and re-render it according to the users activity.

Here the content of the page is incomplete, since it's being rerendered upon a apecific user-action.
Essencially (if no new content needs to be fetched from a server), the browser makes only one request to the server to load once the js, css and html files and they (as now bieng in the client side) do the rest of the rendering, already in the browser.

As only small pieces are loaded from the client-side js, the rerendering is vary fast, instead of loading entire new page.

However, as the content is not fully accessible, this is not good SEO. A way around it, is useing a nother/helper server-side rendering.

#### Pros

- Rich site interactions
- Fast rerendering
- greate for web applications

#### Cons

- Low SEO grading
- Slow initial load

2. server-side rendering- using backend frameworks like- Nodejs, Django, WordPress, to render html pages from a server. Here the server turns the html pages intu documents on the user's browser.
   This is especially good for displaying static images and text, with little interactivity.
   How does this work?

- as a programmer: write html pages on the server.
- as a user: whenever you visit a page, browser makes a request to the server to deliver the pages.
  The performance of this website depends upon:
- the internet speed
- the location of the server
- how the website handles traffic - how many users are trying to access the site

  once the request is processed by the server, the browser gets back the fully generated HTML page , the JS and CSS are downloaded, and page is displays it in the screen.
  If the browser cached the page, the browser will fetch it from the cache, once it's a new page, or the same page but with different items on it, the browser will make a new request to the server so the entire page will be requested again. Essencially, the entire new page would be rendered, and not just the new content.

#### What is server-side rendering good for?

- SEO - search engine optimization. This is the process of getting traffic (clicks or visits) from search engin like google in a free (or organic) matter.

With Server-side-rendering, the content is present even before a the browser displays it so search engins can index it and crawl it.

#### Pros

- 1. Good for SEO
- 2. Page loads faster than Client-side (true for initial page)
- 3. Good for static websites

#### Cons

- Frequent server requests
- slow rerendering
- Site interactions cannot be rich

### Read more on:

- https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/
- https://medium.com/@benjburkholder/javascript-seo-server-side-rendering-vs-client-side-rendering-bc06b8ca2383

# JavaSrypt Syntax

## Let Vs Var

let -introduced at 2015, block scope, not getting hoisted in the top of the scope?
var- functional scope (if declared inside a function it will maintain its value in the function and die at the end of it).
Gets hoisted to the top of the function.

example 1:

```
if (true){console.log(v);
console.log(l);
var v=2;
let l=3;
}
```

```
 undefined (for v)
 VM1183:1 Uncaught ReferenceError: Cannot access 'l' before initialization

    at <anonymous>:1:38
```

example 2:

```
a=()=>{
var v=2;
console.log(v);
}
a()
console.log(v)
```

(for the log inside the function)
Uncaught ReferenceError: v is not defined

```
at <anonymous>:6:13 (for the log outside the function)
```

## Const vs let

const- has to be initialized in declaration. If value is a primitive its value cannot be changed.
let- doesn't have be initialized. Value can be changed even to a different type (primitive and not-primitive alike)

example 1:

```
const c;
c=1;
console.log(c)
```

```
VM4610:1 Uncaught SyntaxError: Missing initializer in const declaration
```

```
const d=undefined;
console.log(d)

 VM599:1 Uncaught SyntaxError: Unexpected identifier (has to have a unique set of identifying chars: @,2,a etc ... undefined is not an option)

let l; (can also accept this:) let l=undefined
console.log(l)

 undefined
l=1;
 console.log(l)
 1
```

example 2: const holding an object can be modified

```
const c=[1,2,3];
c.push(4);
console.log(c)

> > VM6256:1 (4) [1, 2, 3, 4]
```

```
but:
c=[1,2,3,4]

> > Uncaught TypeError: Assignment to constant variable.
```

## null vs undefined

- both represent an ampty value.
  null- set by the programmer
  undefiened- set automatically to mutable variables if not initialized

  ```
  typeof(undefiened)
   'undefined'
  typeof(null)
   'object'
  ```

```

## Primitive Vs Objects
 passing by value vs passing by refference

example 1:
passing by value -  pimitive types
inside a block scope (let and const) or function scope (var), the values will be copied to the scope

var a=1
function changeA(a){
a=a+2
console.log(a)
}
changeA(a)
console.log(a)

 3 (from inner console of changeA)
 1 (from the window scope)

```

example 2: passing variable by refference

```
let obj={'moo':123}
function changeObj(a){
obj={'moo':456}
console.log(JSON.stringify(obj))
}
changeObj(obj)
console.log(obj)

> > {"moo":456}
> > VM572:3 {moo: 456}

## comparison operators == vs ===

== compairs the vaue
=== compaires the value and type

example 1:
console.log('1'==1)

> > true
> > how does this work? in order to compare, the engin will try to convert the type on the right side to the type on the left side (1-->'1')
> > console.log('1'===1)
> > false
> > here, the engin doesn't convert anything, just compaires the two values
```

## Destructuring

```
//obj destructuring
const obj={first:'Natalie', last:123, middle:'cc' }
//distructuring pattern:
const {first:f,last:l,middle:m}=obj

//array destructuring
const arr=[1,2,3,4]
const [x,y]=arr
//x=1, y=2

//in a function
function f({x,y,}){
    console.log(x,y)
}
f({x:3,g:4,y:5})
```

destructuring with default params

```
function func({x=0}){
    console.log(x,y)
}
func({g:4,y:5})
```

What will the below code print out?

```
function foo({a = 2}) { console.log(a) }
foo()
```

It will print that it cannot read property `a` of undefined. We need to call foo at least with an empty object like so `foo({})` if it's empty an no `a` is found it will default to 2. If you pass in nothing then it will error out since there isn't even an object being passed in.

### loops with tips

1. for loop

```
let arr=[1,2,3,4]
for(let i;i<array.length;i++){
    console.log('1st', array[i])
    continue;
    //this part will never be printed
    console.log('2nd',array[i])
}
```

2. to loop over properties in an object:

```
for(let prop in {a:12,b:34}){
    console.log(prop)
}
//prints a b
```

3. loop items in an array

```
for(let item of ['s','f',5,6]){
console.log(item)
}
//prints: s,f,5,6
```

4. array.forEach()- important tip
   One of the disadvantages of forEach is that you cannot use continue or break and return statements don't behave as you might expect.

What will the below code print out?

```
var a = [1,2,3]
a.forEach( function(v) {
    if (v === 2) continue;
    console.log(v)
})
//this will print an err
```

# JavaScrypt Concepts

## scope vs context

Scope pertains to the visibility of variables and in contrast, context refers to the object to which a method belongs (which can be changed by using call or apply).

## This, arrow functions and scopes

const profile={
firstName:'',
lastName:'',
setName: function(name){
let splitName=function(n){
let nameArray=n.split(' ')
this.firstName=nameArray[0]
this.lastName=nameArray[1]
}
splitName(name)
}
}
profile.setName('Nina Lue') (here, the 'this' in splitName function, reffers to the window object, because the function's setName context is that of where it was invocked...)
console.log(firstName)

```
> > Nina
> > console.log(window.firstName)
> > Nina
> > console.log(profile.firstName)
> > (-> '', returns an empty string)
```

example 2: changing splitName (inner function) to an arrow function

```
const profile={
firstName:'',
lastName:'',
setName: function(name){
let splitName=(n)=>{
let nameArray=n.split(' ')
this.firstName=nameArray[0]
this.lastName=nameArray[1]
}
splitName(name)
}
}
profile.setName('Nina Lue') (here, the 'this' in splitName function, reffers to the window object, because the function's setName context is that of where it was invocked...)
console.log(firstName)

> > VM385:1 Uncaught ReferenceError: firstName is not defined ('this' reffers to the profile object)
> > console.log(profile.firstName)
> > Nina
```

example 3: changing setName (outer function) to an arrow function

```

const profile={
firstName:'',
lastName:'',
setName:(name)=>{
let splitName=function(n){
let nameArray=n.split(' ')
this.firstName=nameArray[0]
this.lastName=nameArray[1]
}
splitName(name)
}
}
profile.setName('Nina Lue') (here, the 'this' in splitName function, reffers to the window object, because the function's setName context is that of where it was invocked...)
console.log(firstName)

> > Nina
> > console.log(profile.firstName)
> > (-> '', returns an empty string)

example 4: changing both setName and splitName to an arrow function

const profile={
firstName:'',
lastName:'',
setName:(name)=>{
let splitName=(n)=>{
let nameArray=n.split(' ')
this.firstName=nameArray[0]
this.lastName=nameArray[1]
}
splitName(name)
}
}
profile.setName('Nina Lue')
console.log(firstName)

> > Nina
> > console.log(profile.firstName)
> > (-> '', returns an empty string)

```

getting all arguments sent to a function`

```
function mySum(a+b){
return a+b
}
mySum(1,2)
mySum(1,2,3,4)

> > 3
> > 3 (the engin only takes the first 2 arguments)
> > But, to get all arguments sent to the function we can use the 'argumants' property of the function:
> > function mySum1(a,b){
> > let sum=0
> > for(let i=0;i<arguments.length;i++){
> > sum+=arguments[i]
> > }
> > return sum
> > }
> > mySum1(1,2)
> > mySum1(1,2,3,4)
> > 3
> > 10
> > VERY IMPORTANT POINT: the 'argumants' is NOT an array, so array functions like splice, will not work on it
> > in order to work with the 'arguments' as an ararray use: Array.prototype.slice.call(argumants,1) --> this will replace: argumants.slice(1)
```

New 2015- rest operator: spread

```
function printOptions(...options){
console.log(options);
}
printOptions(1,2,3,4)

> > (4) [1, 2, 3, 4]
```

rest operator==spread operator

## Closures

A JavaScript closure is when an inner function has access to its outer enclosing function's variables and properties.
examples:

```
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}
```

will print 3 every alert

solutions:

```
for (var i = 0; i < 3; i++) {
  setTimeout(function(i_local) {
    return function() { alert(i_local); }
  }(i), 1000 + i);
}
```

a better one: use let

```
for (let i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}
```

good link:

1. https://www.youtube.com/watch?v=2RkmCbisaWA
2. https://coderbyte.com/algorithm/3-common-javascript-closure-questions

### this keywoard

```
console.log(this)
//in client will print window
//in server will print {}
```

### find out the identity of a variable

instead of using "typeof" that will return 'Object' for null, [],{}, Map, Set just use:

```
let a=[]
a.constructor
//will return Array

let b={}
b.constructor
//will return Object
new Map().constructor // return Map
function(){}.constructor //return Function
```

and so on ...
