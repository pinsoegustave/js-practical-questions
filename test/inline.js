// function movies(messageFunction, name) {
//     messageFunction(name);
//   }
  
//   // call the movies function, pass in the function and name of movie
//   movies(function displayFavorite(movieName) {
//     console.log("My favorite movie is " + movieName);
//   }, "Finding Nemo");

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions(function secondFunc() {
    console.log("haha\!");
}, "happy")