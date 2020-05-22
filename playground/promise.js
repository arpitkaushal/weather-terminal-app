var somePromise = new Promise( (resolve, reject) => {
    // resolve(`Hey. It worked!`);   //this string is the value the promise was fulfilled with. This is exactly what someone will get back.
    setTimeout( () => {
      resolve(`Hey. It worked!`);
      // resolve(`Please Please Please`);
      // resolve(`Voila`);
      // reject(`Didn't happen, sorry.`);
      reject(`Unable to fulfil promise`);
    }, 1000)
  });
  
  
  // When you make a promise, you're making a promise; you're saying, "Hey, I'll go off, and I'll fetch that website data for you." Now, this could go well, in which case, you will resolve the promise, setting its state to fulfilled. When a promise is fulfilled, it's gone out, and it's done the thing you've expected it to do. This could be a database request, an HTTP request, or something else completely.
  
  // Now when you call reject, you're saying, "Hey, you tried to get that thing done, but you just could not." So the promise has been considered rejected. 
  
  // These are the two states that you can set a promise to—fulfilled or rejected. Just like inside geocode.js, you either provide one argument for an error, or you provide the second argument if things went well. Instead of doing that, though, promises give us two functions you can call.
  
  // Now you can only pass one argument to both resolve and reject, which means that if you want to provide multiple pieces of information, it is recommended that you resolve or reject an object that you can set multiple properties on. In your case though, a simple message, Hey. It worked!, will do the job.
  
  // The then method lets us provide callback functions for both success and error cases. This is one of the areas where callbacks differ from promises. In a callback, you had one function that fired no matter what, and the arguments let us know whether or not things went well. With promises you'll have two functions, and this will be what determines whether or not things went as planned.
  
  // message object is obtained when the promise is fulfiled
  // errMessage is obtained when the promise is rejected
  
//   somePromise.then( (message) => {
//     console.log('Success: ', message);
//   }, (errMesage) => {
//     console.log(`Sorry: `, errMesage);
//   });
  
  
  // Merits of Promises
  
  // You now have a promise that can either get resolved or rejected. If it gets resolved, meaning the promise was fulfilled, you have a function that handles that. If it gets rejected, you have a function that handles that as well. This is one of the reasons why promises are awesome. You get to provide different functions, depending on whether or not the promise got resolved or rejected. This lets you avoid a lot of complex if statements inside of your code, which you needed to do in app.js to manage whether or not the actual callback succeeded or failed.
  
  // can call resolve/reject only once - prevents error in workflow from mistakennly calling a callback more than once. With promises, nothing will change because they won't be considered in any way.
  
  // Now inside a promise, it's important to understand that you can only either resolve or reject a promise once. If you resolve a promise you can't reject it later, and if you resolve it with one value you can't change your mind at a later point in time. Consider this example, where you have a code like the following code; here you resolve first and then you reject:
  
  // You can either resolve once or you can reject once. You can't do both; you can't do either twice.
  

var asyncAdd = (a,b) => {

    console.log(`Staring Function`);

    var somePromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
        if(typeof (a+b) === 'number' ) resolve(a+b);
        else reject(`Arguments must be numbers`);
        }, 1500);
        // setTimeout(() => {reject(`Nope, Didn't Work`);}, 2000) 
        
    })

return somePromise;

};

// var add = (a,b) => a+b;

// asyncAdd(2,21)
// // Promise 1
// .then( 

// // if resolved
// result1 => {
//     console.log(`Result 1: ${result1}`);
//     return asyncAdd(result1,33);
// }, 
// // if rejected
// error1 => {
//     console.log(`Error 1: ${error1}`);
//     return asyncAdd(error1,33);
// }

// )

// // Promise 2 chained
// .then(      

// // if resolved
// (result2) => {
//     console.log(`Result 2: ${result2}.`);
// }, 
// // if rejected
// (error1) => {
//     console.log(`Couldn't add 33 to the sum. Error 2: ${error1}`);
// }

// );

// asyncAdd(2,'asdsa')
// // Promise 1
// .then( 

// // if resolved
// result1 => {
//     console.log(`Result 1: ${result1}`);
//     return asyncAdd(result1,33);
// }, 
// // if rejected
// error1 => {
//     console.log(`Error 1: ${error1}`);
//     return asyncAdd(error1,33);
// }

// )

// // Promise 2 chained
// .then(      

// // if resolved
// (result2) => {
//     console.log(`Result 2: ${result2}.`);
// }, 
// // if rejected
// (error1) => {
//     console.log(`Couldn't add 33 to the sum. Error 2: ${error1}`);
// }

// );




// The catch promise method is similar to then, but it just takes one function. This is the error handler. As shown in the following code, you can specify one error handler if any of your promise calls fail. You'll take errorMessage and print it to the screen using console.log(errorMessage):
// asyncAdd(5, '7')

asyncAdd(5, 7).then((res) => {
    console.log('Result 1 :', res);
    return asyncAdd(res, '33');
   }).then((res) => {
    console.log('Result 2: ', res);
   }).catch((errorMessage) => {
    console.log(`Instructor's method: ${errorMessage}`);
   });