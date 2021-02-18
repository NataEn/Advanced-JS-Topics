# Call, Bind, Apply JS functions

This topic deals with the binding of "this". There could be:

1. Implicit binding- "this" identity is defined by the JS engin
2. Explicit binding-we specifically set/define who "this" is
3. new Binding
4. window binding

First question: where is the function invoked?

```
function(name){
    console.log(`Hello ${name}`)
}
```

we don't know what is "name", until that function is invoked

### Implicit Binding

Here the "this" refers to the object left of the "." **at Call Time**

```
const me={
name:"Nata",
ag:30,
sayName:function(){
consol.log(this.name)
}
}
```

calling `sayName` on the object "me"

```
me.sayName()
>>Nata
```

Here it is clear that "this" refers to the "me" object

```
const he={name:"Rob",age:56}

me.sayName.call(he)
>>Rob
```

here we call the function on another object.
Another way is using the "bind" method that returns a new function that its "this" is bound to what we pass to the "bind" method:

```
me2.sayName.bind(he)()
>> Rob
```

another way is to use the "apply" function that applies the function to the "this" passed to it:

```
me2.sayName.apply(he)
>> Rob
```

But, we can also define the "sayName" function not inside a specific object:

```
const SayName=(obj)=>{
    obj.sayName=function(){
        console.log(this.name)
    }
}
```

read more on: https://ui.dev/this-keyword-call-apply-bind-javascript/

## Interview Tasks

1.

- The task is to implement the function apply2 using only bind.
- apply2 should have the same API as apply except it uses the call back function, cb, as the original function.

- As a reference these are the docs for apply & bind.
- Apply:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

- Bind:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

- At the bottom of the screen there's a Run button, click on it to run your code and see the result.

  ```
  function apply2(cb, thisArg, args) {
  // Your code goes here.
  // Good luck :tada:c cb.call(thisArg, ...args);
  }/\*\*
  ```

Apply2 Testing:

```
 function testing(foo, bar) {
 console.log(this.name, foo, bar);
 }
 console.log('------------------------------------');
 console.log('Actual :point_down:');
 apply2(testing, { name: 'Michael' }, [1, 2]);
 console.log('------------------------------------');
 console.log('Expected :point_down:');
 testing.apply({ name: 'Michael' }, [1, 2]);
 console.log('------------------------------------');

```

**solution**

````
function Apply2(cb,thisArg,...args){
    return cb.bind(thisArg)(...args)}
    ```
````
