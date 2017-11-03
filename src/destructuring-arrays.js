// array
const data = ['Basketball', 'Sports', '£20.00', '30th September'];

// destructure the array
// creates name, category, price, date variables with the value of the item in the same position in the data array
const [name, category, price, date] = data;
console.log(name, category, price, date);

// string of data
const stringData = 'NFC, Seatle Seahawks, USA';

// creates sport, team, country variables and populates them with the item in the position after each ',' in the string
const [sport, team, country] = stringData.split(',');
console.log(sport, team, country);

// array
const ATeam = ['Barry', 'Laura', 'Benjamin', 'Matthew', 'Bump'];

// first item is captain
// second item is assistant
// remaining items are players
const [captain, assistant, ...players] = ATeam;
console.log(captain, assistant, players);


let lastTwo = ATeam.splice(0, ATeam.length -2);
console.log(lastTwo);
