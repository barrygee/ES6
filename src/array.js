/*
  Array.find()
  - find a single object inside an array of objects

  -- data src: http://api.open-notify.org/iss-pass.json?lat=55.9&lon=-3.47
*/
const passtimes = {
  "message": "success",
  "request": {
    "altitude": 100,
    "datetime": 1506024566,
    "latitude": 55.9,
    "longitude": -3.47,
    "passes": 5
  },
  "response": [
    {
      "duration": 479,
      "risetime": 1506028203
    },
    {
      "duration": 606,
      "risetime": 1506033877
    },
    {
      "duration": 630,
      "risetime": 1506039626
    },
    {
      "duration": 613,
      "risetime": 1506045397
    },
    {
      "duration": 508,
      "risetime": 1506051191
    }
  ]
};


const duration = 508;
const pass = passtimes.response.find( pass => pass.duration === duration );
console.log(pass);


/*
  Array.findIndex()
  - find the array index of the selected pass above
*/

const passIndex = passtimes.response.findIndex( pass => pass.duration === duration );
console.log(passIndex);


/*
  Array.some()
  - returns true if at least one item in the array meets with criteria
  - this is NOT and ES6 method
*/
const ages = [37, 33, 5, 4, 0];
console.log( ages.some( age => age >= 37 ) ); // true
console.log( ages.some( age => age >= 40 ) ); // false


/*
  Array.every()
  - returns true if every item in the array meets with criteria
  - this is NOT and ES6 method
*/
const numbers = [37, 33, 5, 4, 0];
console.log( numbers.every( number => number <= 40 ) ); // true
console.log( numbers.every( number => number <= 10 ) ); // false
