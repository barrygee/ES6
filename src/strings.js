const flightNumber = '20-ABC123-2017';

// startsWith()

  // begins and the first charactor in the string
  console.log( flightNumber.startsWith('AB') ); // false

  // begins at the 3rd charactor in the string
  console.log( flightNumber.startsWith('AB', 3) ); // true

// endsWith()

  // attempts to match the charactors provided with the same # of charators at the end of the string
  console.log( flightNumber.endsWith('20') ); // false

  // uses the first 12 charactors, ignoring the rest and attempts to match the charactors provided with the same # of
  // charators up to the 12 charactor in the string
  console.log( flightNumber.endsWith('20', 12) ); // true

// includes()

  // attempts to match the charactors provided anywhere within the string
  console.log( flightNumber.includes('123') ) // true

// repeat()

  // repeats the string provided the nuiber of times specified
  console.log( flightNumber.repeat(10) );
