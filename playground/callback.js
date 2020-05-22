var getUser = ( id, callback ) => {   // these are the inputs to our function
    // this part of the function/code gets the user data
    
    //right now, just creating an returning a dummy object, In the future, this is going to come from database queries
    var user = { 
      id: id,
      name: 'Vikram'
    };

    // Now that you have your user object, what you want to do is call the callback, passing it as an argument. You'll then be able to actually run, getUser(31, (user)) function, printing the user to the screen. To do this, you would call the callback function like any other function, simply referencing it by name and adding your parentheses like this:
    // callback(); // this won't work
    // callback(user); //because we need to specify what we'll provide to the callback after user is fetched
  
    // Now you'll not be responding to the getUser request until three seconds have passed.
    // Now this will be more or less similar to what happens when you create real-world examples of callbacks, you pass in a callback, some sort of delay happens whether you're requesting from a database or from an HTTP endpoint, and then the callback gets fired. 
    
    setTimeout( ()=> {
      callback(user);
    }, 3000);
  
  };
  
  // You'll expect that the user objects, contains things like id, name, email, password, or whatever, comes back as an argument to the callback function
  
  getUser(31, (userObject) => {
    //this callback function makes use of the data (in this case, it'll be 'user' object and it's properties) that 'getUser' function will fetch for us
    console.log(userObject);
  })
  
  // You've created a callback function using synchronous programming. Now, as mentioned, this is still a contrived example because there is no need for a callback in this case. You could simply return the user object, but in that case, you wouldn't be using a callback, and the whole point here is to explore what happens behind the scenes and how you call the function that gets passed in as an argument.
  