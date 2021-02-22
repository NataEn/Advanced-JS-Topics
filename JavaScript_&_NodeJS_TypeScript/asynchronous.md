# Asynchronous Coding

## Callback functions

Simply put- a callback function is a function called from another function.
This function suppose to run after the whole file was stored in memory.
This is why the next code will throw an error- since the `message` variable wasn't created yet when the `callback()` was called. Since it was written in a synchronous manner

```
function doAsyncTask(callback){
    callback()
}
doAsyncTask(()=>console.log(message));
let message="Callback Called";
```

However if we write it this way:

```
function doAsyncTask(callbck){
    callbck()
} let messag="Callback Called!";
doAsyncTask(()=>console.log(messag));
```

This will return the message. But this is **not** asynchromous coding.

Another solution, which is indeed asynchrinius, is to use the `setTimeOut()` function. Here, first the whole code is being read, then the callback function in the `setTimeOut()` will be called (after 0 seconds).

```
function doAsyncTask(callback){
    setTimeout(callback,0);
}
doAsyncTask(()=>console.log(message));
let message="Callback Called";
```

Here, the execution of the callback function is split to a separate task, and only when the time finishes, then the callback is added to the task queue and is executed.

### Handeling Errors in the Callback

We always handle errors first in callbacks, as we set the first parameter passed to them as the error object. This is "error first callbacks" :

```
function doAsyncTask(callback){
    setTimeout(
        ()=>{
            callback("Error!")//if there was an error
            callback(null,data) //if there wasn't an error
            }
        ,0);
}
doAsyncTask((err,data)=>{
    if(err){
        throw err;
    }
    console.log("data: ",data)});
let message="Callback Called";
```

### Callback Hell

Happends when we are calling a nother function to state that the async-function is complete.
And add another function inside the callback that will run when all code inside the callback is done.

In an async manner:

```
function doAsyncTask(callback){
    setTimeout(
        ()=>{
            console.log("Async task calling callback")
            callback()
            }
        ,0);
}
doAsyncTask(
    ()=>{doAsyncTask(
        ()=>{doAsyncTask(
            ()=>{doAsyncTask()}
        )}
    )});
let message="Callback Called";
```

easily, we can see that we have to track deeply how the functions are nested to understand when exactly and which function is done.

## Promises

Promises are asynchromous.

```
function doAsyncTask(){
   return Promise.resolve();}
   doAsyncTask().then(_=>console.log(message));
   let message="Promise Resolved";
```

Though the message is defined after the promise, it is still printing it out, becouse it is in fact asynchronouse.

`doAsyncTask()` is called, returns a promise that is attached a `then` handeler. `Promise.resolve()` creates another task and calls the `resolve()`, then the inner then function gets called, and by that time `message` is already available in memory.

When creating a new Promise object, it takes an anonimuse function that accepts two **function agruments**: resolve, reject. The code inside the anonimouse function will be executed asynchromously. After this code is done runing,one of the two **function agruments** will be executed.

```
const promise=new Promise((resolve,reject)=>{})
```

Usually we return a promise

```
function doAsyncTask(){
    const promise=new Promise((resolve,reject)=>{
        console.log("Async work complete");
        resolve()
    })
    return promise;
}
doAsyncWork();
```

When the `doAsyncWork()` runs it returns a promise. So, First the code insid the promise runs. print of "Async work complete" occures. Next the execution of the `resolve()` follows. The Promise object has a function called `then()` it is a success handeler that if the promise resolved it will call the anonimouse function inside the `then()`.

```
doAsyncWork().then(()=>console.log("Task Complete"));
```

Promises have very explicit error handeling:

```
function doAsyncTask(){
    const promise=new Promise((resolve,reject)=>{
        console.log("Async work complete");
        if(false){
            resolve
        }else{
            reject()
            }
    })
    return promise;
}
doAsyncWork().then(
    ()=>console.log("Task complete!"),()=>(console.log("Task Errored!")));
```

Now the Promise is rejected, the "Task Error!" printed out to the console.

However, the `resolve` and `reject` functions can be passed prameters that are passed along to the success handeler.

```
function doAsyncTask(){
    const promise=new Promise((resolve,reject)=>{
        console.log("Async work complete");
        if(false){
            resolve("resolved param")
        }else{
            reject("error param")
            }
    })
    return promise;
}
doAsyncWork().then(
    (val)=>{
        console.log(`Task complete! ${val}`;
        }),(err)=>{
            console.log(`Task Errored! ${err}`)
            }));
```

### Imediatly Resolved Promise

When we already know if a promise is resolved or rejected, we could skip the use of `then` to imediatly reject or resolve the promise.
The promise that is created is already done or rejected:

```
let promise=Promise.resolve("done");
let promise=Promise.reject("fail");

```

Even though a promise has already been resolved, we can still add a then handeler that will be called.

```
let promise=Promise.resolve("done").then((val)=>(console.log(val)))
```

### Chaining Promises

When chaining promises we should use an imediatly resolved promise, since we can still chain a "then" handeler to it.

```
const p=Promise.resolve("done");
p.then(val=>{
    console.log(val);
    return "done2";
}).then(val=>console.log(val))
```

The function inside the "then" has to return something otherwise we cannot chain another "then".

We can also return another promise, only after the second promise is resolved that the second "then" will be executed:

```
Promise.resolve("done");
p.then(val=>{
    console.log(val);
    return new Promise(resolve=>{
        setTimeout(()=>resolve("done2"),1000)
    });
}).then(val=>console.log(val))
```

### Promise forking

We can execute different "then" functions on the same resolvement of the promise:

```
Promise.resolve("done").then(val=>console.log(val));
p.then(val=>console.log(val+2))
```

#### Handeling errors in a chain

In a promise chain, we don't have to define a failer handeler for every `then`, if there is a failer, and no failer handeler, than the next one will fire:

```
Promise.reject("fail").then(val=>console.log(val)).then(val=>console.log(val),err=>console.log(err))
```

We can also throw an error:

```
Promise((resolve,reject)=>{
    throw "fail";
}).then(val=>console.log(val)).then(val=>console.log(val),err=>console.log(err))
```

If something is thrown it will always catch it and reject the promise. We don't have to call "reject()".
But a better way is using a "catch" handeler that is put at the vary end of the chain, it is just an error handeler:

```
Promise.resolve("done").then(val=>{throw "fail";}).catch(err=>console.error(err))
```

Another handeler- "finally" that will be called at the end of all. For instance if we need to do some clean-up

```
Promise.resolve("done").then(val=>{throw "fail";}).catch(err=>console.error(err)).finally(_=>console.log("Cleaning up))
```

So, even if there are errors, the "finally" handeler will fire.

### Promise.all

This is essencial when working with asyncronous programing.

```
const doAsyncTask=(delay)=>{
    return new Promise(resolve=>setTimeout(()=>resolve(delay),delay))
}
let promises=[doAsyncTask(1000),doAsyncTask(2000),doAsyncTask(500)]

Promise.all(promises).then(values=>console.log(values);)
```

We woud like to execute all the promises at the same time. So after they are all done their values are returned as an array to the "then".

## Async-Await => ES8

There is a difference between async-await and promises.
We first define a function that returns a resolved promise, that

```
const doAsyncTask=()=>Promise.resolve("done");
doAsyncTask().then(val=>console.log(val));
console.log("hello");
```

first the `console.log("hello");` gets caolled first then `doAsyncTask`, it gets resolved then "done" is passed so the `console.log(val)` is executed.

When we are using an "async-await" we don't need to use a "then" handeler. The code after the "await" declaration will run only after the "awiat" returns.

```
const doAsyncTask=()=>Promise.resolve("done");
async function Dude()=>{
let value= await doAsyncTask();
console.log(value);
}
Dude();
```

Alturnativly we can create an IIF:

```
(async function Dude(){
let value= await doAsyncTask();
console.log(value);
})()
```

==> Look ahead for **top level await** for modules in nodejs so whole files can be run asynchronously in the future.

We **can** skip the `await`, then the function will run as a regular function:

```
const doAsyncTask=()=> Promise.resolve("done");

(async function(){doAsyncTask().then((val)=>console.log(val)); console.log("done2")})()
```

will print out:

```
done2
done
Promise {<fulfilled>: undefined}
```

Otherwise:

```
(async function Dude(){
let value= await doAsyncTask().then((val)=>{console.log(val); return val;});
console.log(value+2);
})()
VM1938:2 done
VM1938:3 done2
Promise {<fulfilled>: undefined}
```

This is how `async-await` allows you to turn between non-blocking code (regular promise) and blocking code.

Async functions behave like promises, so we can attach a `then` handler to them:

```
let asyncFunction=async function(){
    let value=await doAsynkTask();
    console.log(value);
    console.log("2");
    return "3"; //whatever we return is like resolve
};
asyncFunction().then(val=>console.log(val));
VM2408:3 done
VM2408:4 2
VM2533:1 3
Promise {<fulfilled>: undefined}
```

**However** if you just write functions with asyc and executing them as they are, they will run as regular functions (they return a promise but run regularly), this is just a waste of resources:

```
async function printLine1(){
    console.log("1");
}
async function printLine2(){
    console.log("2");
}
async function main(){
    printLine1();
    printLine2();
}
main();
console.log("finished")
VM5436:2 1
VM5436:5 2
VM5436:12 finished
undefined
```

### Catching Errors

In promises we used the `then().catch().finally()`
with `async-await` we can use the `try-catch` semantics:

```
const doAsyncTask=()=>Promise.reject("error");
const asyncFunction=async function(){
    try{

const value= await  doAsyncTask();
    }catch(error){
        console.error("Moo: ",error);
        return;
    }
}
asyncFunction();
VM4477:7 Moo:  error
asyncFunction @ VM4477:7
async function (async)
asyncFunction @ VM4477:5
(anonymous) @ VM4477:11
Promise {<fulfilled>: undefined}
```

When the promise rejected, an error is thrown so the value gets passed to the `catch()`

Though blocking code is easier to read and reason but it can take mutch more time to happen, since we are waiting for the promise to resolve.

`Async-await` may be bad for performance.

### Read more:

1. Promises: https://radiant-brushlands-42789.herokuapp.com/medium.com/better-programming/is-javascript-synchronous-or-asynchronous-what-the-hell-is-a-promise-7aa9dd8f3bfb
