/*
  filter
  - returns if true, does not return if false
  - i.e. [ 65, 37, 90, 42, 77 ]
*/

const ages = [23, 65, 21, 37, 90, 42, 77];

const old = ages.filter( age => age >= 30 );

// sort in ascending order
old.sort();

// sort in descending order
old.reverse();

console.log(old);
