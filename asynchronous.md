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

Promises are asynchromous. When creating a new Promise object, it takes an anonimuse function that accepts two **function agruments**: resolve, reject. The code inside the anonimouse function will be executed asynchromously. After this code is done runing,one of the two **function agruments** will be executed.

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
