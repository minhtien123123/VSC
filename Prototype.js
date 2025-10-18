const user = {
  personName: 'Luke',
  'primary address': '100 NVK',
  age: 4,
  greet() {
    console.log(`Hello! My name is ${this.personName}`); //Inside object methods, use this to access properties. Without this, JavaScript looks outside the object and may throw a ReferenceError
  },
  printAge: function() { //anonynous function expression
    console.log(`I'm ${this.age} years old`)
  },
  //Don't use arrow functions to get properties of object because they don't bind this
  printCustomerInfo: (info) => { //arrow function expression
    console.log(info)
  }
};

//Every Object has a Prototype (inherited from Object.prototype) but we can create objects without a prototype by Object.create(null)
const noPrototypeObject = Object.create(null); //This object doesn't inherit from Object.prototype
noPrototypeObject.id = 123;
console.log(Object.getPrototypeOf(noPrototypeObject)); // => null

//"For in" loop iterates over all enumerable properties, whether they are own or inherited
let inheritedUser = Object.create(user);
inheritedUser.yearsOfExperience = 3;
console.dir(inheritedUser);
for (const key in inheritedUser) {
    console.log(key)
}

//Console.log() only prints out the own enumerable properties. The same goes for Object methods such as values(). keys(), entries()
console.log(inheritedUser); // => Only {yearsOfExperience: 3}
console.log(Object.keys(inheritedUser)) // => Only yearsOfExperience




// console.log("")