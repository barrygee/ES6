class FamilyCollection extends Array {

  constructor(name, ...familyMembers) {
    super(...familyMembers);
    this.name = name;
  }

  /*
    - .push() is available to FamilyCollection as it is a method on Array which FamilyCollection extends
  */
  add( familyMember ) {
    this.push( familyMember );
  }

}


const family = new FamilyCollection('The Gee family',
                                    { name: 'Barry', age: 37 },
                                    { name: 'Laura', age: 34 },
                                    { name: 'Benjamin', age: 6 },
                                    { name: 'Matthew', age: 4 },
                                    { name: 'Baby', age: 0 } );

family.add( { name: 'Paul', age: 39 } );
console.log(family)
