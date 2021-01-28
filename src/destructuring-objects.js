const person = {
  firstname: 'Barry',
  lastname: 'Gee',
  age: '36',
  location: 'Gateshead',
  social: {
    twitter: '@barrymarkgee',
    linkedin: 'https://www.linkedin.com/in/barrymarkgee/'
  }
}

// get the firstname and lastname properties from the person object
// creates a new variable of the same name as the property
const { firstname, lastname } = person;
console.log(firstname);
console.log(lastname);

// looks in the person object > social object for the linkedin value
const { linkedin } = person.social;
console.log(linkedin);

// use a custom variable name 'tweet' instead of 'twitter' when getting the value of twitter from the person object
const { twitter:tweet } = person.social;
console.log(tweet);

// set default values
// where a matching property exists within the settings object, that property value is used
// where no match is found, the default value is used
const settings = { width: 300, color: 'black' };
const { width = 100, height = 100, color = 'blue', fontSize = '1.2em' } = settings;
console.log(width, height, color, fontSize);

// use all of the above together
// where a matching 'w' is found in both objects the second object value is used
// the 'w' property is immediately renamed to 'boxwidth'
// a new variable is create with this name
// the 'h' property uses the default value as no matching property is found in the second object
// a new variable is created with the name 'boxheight'
const { w: boxwidth = 100, h: boxheight = 200 } = { w: 800 };
console.log( boxwidth, boxheight );
