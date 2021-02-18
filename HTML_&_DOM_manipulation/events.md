# JavaScript Events

## Event Bubbling vs Capturing

When an event is being fired, in the browser, there are two phases happening:

1. first: Event capturing phase- starts with the window, and propagates to the element that created the event. As it propagates down the DOM tree the browser searches for event listeners of each element in the related hirarchy and fires it. So if we attached a "click" event listener to the body, the div and the button insode the dive, each of those eventlisteners will fire.
2. second: Event capturing phase: starts with the clicked element itself and propagates up the dom tree till the window.

The default behavior is set to listen to the bubbling phase, and only if we specifically register the capturing phase to be listen to than will it cause the event listeners to fire in that order. You can do so by registering your handler using addEventListener(), and setting the optional third property to true.

The `event.preventDefault()` function do not prevent the propagation of events, in bubbling or capturing phase, but prevents the default behavior of that element when it is clicked on.
The `event.preventPropagation()` is preventing the propagation of the event up or down (which ever phase was registered)
