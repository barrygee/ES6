/*
  reduce
  - call reduce on the array, passing a callback
  - that adds all the values together
*/
var numbers = [0, 1, 2, 3];

// es6 version
var result = numbers.reduce( (total, arrayItemValue) => total + arrayItemValue );

console.log(result);
