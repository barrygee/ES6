/*
  Promises
  - Example 1
  -- dataPromise is initially provided with a promise.
  --- when response data is available the .then() is called, converting the response to json.
  --- If an error occurs and no data is returned, .catch() is called and the error repsonse is console.log()
*/
// const dataPromise = fetch('http://api.open-notify.org/iss-pass.json?lat=54.9513834&lon=-1.5359112');
//
// dataPromise.then( data => data.json() )
//            .then( data=> { console.log( data ) } )
//            .catch( error => { console.error( error ) } );



/*
  - Custom promise
*/
const aPromise = new Promise( ( resolve, reject ) => {
  // do something... HTTP request etc
  setTimeout( () => {
    resolve('response data');
    // reject( Error('error data') );
  }, 1000 );
});

aPromise.then( resolve => { console.log( resolve ) } )
        .catch( reject => { console.log( reject ) } );


/*
  - Chaining promises
*/
const accounts = [
  { id: 1 , name: 'Barry Gee', username: 'barry' },
  { id: 2 , name: 'Laura Gee', username: 'laura' },
  { id: 3 , name: 'Benjamin Gee', username: 'benjamin' },
  { id: 4 , name: 'Matthew Gee', username: 'matthew' },
];

const users = [
  { id: 1 , name: 'Barry Gee', age: 37, city: 'Gateshead', job: 'Software Engineer' },
  { id: 2 , name: 'Laura Gee', age: 34, city: 'Gateshead', job: 'Staff Nurse' },
  { id: 3 , name: 'Benjamin Gee', age: 5, city: 'Gateshead', job: 'Full time education' },
  { id: 4 , name: 'Matthew Gee', age: 4, city: 'Gateshead', job: 'Full time education' }
];

function getAccountsById( id )
{
  // create a new promise
  return new Promise( ( resolve, reject ) => {

    // find the account object with the matching 'id' in the accounts array
    const account = accounts.find( account => account.id === id );

    if( account ) {
      // return the account
      resolve( account );
    }
    else {
      reject( Error('No account was found!') );
    }
  });
}

function hydrateUser( account )
{
  return new promise( ( resolve, reject ) => {
    const user = users.find( user => user.name === account.name );
  });
}

// use the promise
getAccountsById(2)
  .then( account => {
    // account is the 'account' resolved within the new promise defined above
    console.log( account )
    return hydrateUser( account );
  } );


  /*
    - Multiple promises
    -- Promise.all()
  */
  const weather = new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( { temp: 29, conditions: 'Sunny with clouds' }, 2000 );
    })
  });

  const news = new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( { headline: 'A news headline' }, 500 );
    })
  });

  Promise.all( [ weather, news ] )
         .then( responses => {
           const [ weatherData, newsData ] = responses;
           console.log( weatherData.temp, newsData.headline );
         });
