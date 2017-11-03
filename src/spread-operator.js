/*
  Spread Operator ...
  - breaks up the array into individual items
*/
const family = ['Barry', 'Laura', 'Benjamin', 'Matthew', 'Baby'];

console.log( ...family );



/*
  Spread Operator
  - example 2
  - loops through the family array and breaks up ( spreads each item in the array into individual charactors
*/
family.forEach( ( name ) => {
  console.log( ...name );
} );



/*
  Spread Operator
  - example 3
  - combines 2 arrays into a single new array and adds a new value between the values of the 2 arrays
*/
const array1 = ['1', '2', '3', '4', '5'];
const array2 = ['a', 'b', 'c', 'd', 'e'];

console.log( ...array1, 'a new value', ...array2 );



/*
  Spread Operator
  - example 4
  - combine an object and an Array
*/
const pizza = {
  base: 'Stone Bake',
  size: '14 inch',
  ingredients: ['Tomato Puree', 'Cheese', 'Spicy Chicken', 'Bacon', 'Peppers']
};

const shoppingList = ['Milk', ' Bread', ...pizza.ingredients];

console.log( shoppingList );



/*
  Spread Operator
  - example 5
  - spread into a function()
*/
const name = ['Barry', 'Gee'];

function sayHi( firstname, lastname )
{
  console.log(`Hi, ${ firstname } ${ lastname } .`);
}

sayHi( ...name );



/*
  ...Rest Operator
  - Works in the opposite way to Spread
  - Creates and Array from an unkown number of items
*/
function convert( multiplyBy, ...amounts )
{
  return amounts.map( amount => amount * multiplyBy);
}

const amounts = convert(10, 1, 2, 3, 4, 5);
console.log( amounts );
