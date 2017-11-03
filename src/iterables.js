/*
  iterate through the array of people
*/
const people = ['Barry', 'Laura', 'Benjamin', 'Matthew', 'Bump'];

/*
  use destructuring to create variables for the iteration and name values
*/
for(const [iteration, name] of people.entries())
{
  console.log(`${name} is the ${iteration + 1} family member`);
}
