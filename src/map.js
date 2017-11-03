/*
  map
  - returns an array of the same length as the origional
  - with each item altered in some way
  -- i.e add 'Gee' to each array item
*/
const names = ['Barry', 'Laura', 'Benjamin', 'Matthew', 'Baby'];

const fullnames = names.map( name => `${name} Gee`);

console.log(fullnames);


/*
  map
  - example 2
  - return an Object for each array item
  - i.e { name: 'Barry Gee', race: '100m Dash', place: 1 }
*/

const race = '100m Dash';

const winners = ['Barry Gee', 'Laura Gee'];

const win = winners.map( ( winner, i ) => ( { name: winner, race: race, place: i+1 } ) );

console.log(win);
