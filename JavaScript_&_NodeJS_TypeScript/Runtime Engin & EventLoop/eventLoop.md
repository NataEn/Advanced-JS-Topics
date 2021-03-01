# JavaScript Runtime Engin and the Event Loop

Javascript is a single threaded rune-time environment. This means that it has only one call stack. Means- one line of code runs at a time.

Here is a good schema to illustrate how the JS engin works:
![alt text](./event_loop2.png)
All together we have: Heep, Call-Stack, WebAPIs, and the event-loop. Lets review each one:

- Heep- where memory allocation appends
- call stack- where stack frames are. This records where in the program we are located. As JS is single threaded, there is only **one call stack**. One piece of code runs at a time.
  This is a data structure of a **stack**, if we step into a function, it is added to the stack, if we return from a function,it is removed from the stack.

for instance, lets run the next code:

```
function firstFunc(a,b){
    return a+b;
}
function secondFunc(n){
    return firstFunc(n,n);
}
function thirdFunc(n){
    const sum=secondFunc(n)
   console.log(sum);
}
thirdFunc(2)

```

In the stack:
🡻

But the v8 engin does not include the setTimeout, Dom, Http requests.
So we have the **runtime** and WebAPIs.

- WebAPIs-extra things that the browser provides. like: DOM, AJAX,timeout etc...
- event loop-
- callback queue-

![alt text](./event_loop1.png)
