/*
  Generators
  - Generators act as a pausable function
  - yield is used to step out of the function / pause the function at a specific point
  - .next() is used to restart the function at the point it was last paused
*/

/*
  - Uses the fetch() api available in browsers
  - returns a Promise
  - gets the data from the Promise and passes it into the getData() generator function
  - calls .next() on the getData() generator function
*/
function ajax( url ) {
    fetch( url ).then( data => data.json() )
                .then( data => getData.next( data ) );
}

/*
  - each yield makes a call to the ajax() method passing in a URL
  - the function is then paused until the .next() is called
  - the data recevied by the fetch() within the ajax() is assigned to the appropriate const
*/
function * apiCalls() {
  const gitHub = yield ajax( 'https://api.github.com/users/barrygee' );
  console.log( gitHub );

  const policeForces = yield ajax( 'https://data.police.uk/api/forces' );
  console.log( policeForces );
}

/*
  - used as a mechanism to start and control the generator function
*/
const getData = apiCalls();
getData.next(); // start the generator
