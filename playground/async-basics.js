console.log(`Starting app`);

setTimeout( () => {
  console.log('Inside Callback');
}, 2);      

// play around with the callbacks up and below, try to make one win over the other
// repeat the exercise, make the loser winnner next time, without changing the time

setTimeout( () =>{
  console.log(`Second Timeout`);
}, 1.6465); //limit at 1.6465 if time > limit, it'll be too late for this, this function will lose

var add = (a,b) => a+b
console.log(add(21321,132213213123));

console.log(`Finishing up`);


// The Starting app statement prints to the screen as you expect. Next, you call setTimeout, but you're not actually telling it to wait two seconds. You're registering a callback that will get fired in two seconds. This will be an asynchronous callback, which means that Node can do other things while these two seconds are happening. In this case, the other thing it moves down to is the Finishing up message. Now since you did register this callback by using setTimeout, it will fire at some point in time, and two seconds later, you do see Inside of callback printing to the screen.

// Now the callback alone isn't really useful; being able to run this function after the user data comes back only works if you get the user data, and that's what you'll expect here:


//  In general, a callback function is defined as a function that gets passed as an argument to another function and is executed after some event happens.


