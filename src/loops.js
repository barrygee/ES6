/*
  loops
*/

const names = ['Barry', 'Laura', 'Benjamin', 'Matthew', 'Baby'];

/*
  forEach
*/
names.forEach( (name) => {
  console.log(name);
});

/*
  for in
  - returns the index of each item - 1 2 3 4 5
  - using names[index] returns the value of each item
*/
for( index in names )
{
  console.log( names[index] );
}

/*
  for of
  - returns Barry Laura Benjamin Matthew Baby
*/
for( const name of names )
{
  console.log( name );
}
