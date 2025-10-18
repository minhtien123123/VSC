// import {myownbabe} from './MyObject.js'
// console.log(myownbabe)

/**
 * Property Descriptors - hidden metadata controlling how the property behaves.
 * - Data descriptors: define a value and whether it’s writable, enumerable, or configurable.
 * - Accessor descriptors: define getter/setter functions for dynamic behavior
 */

const user = {
  personName: 'Luke',
  'primary address': '100 NVK',
  age: 25,
};

//Don't define descriptors in object literals. Use Object.defineProperty()
Object.defineProperty(user, "job", {
  value: "Sales Assistant", //actual value of the property
  writable: true, //mutable?
  enumerable: true, //displayed?
  configurable: true, //deleted or reconfigured?
}) //We're using data decriptors

//Accessor descriptors
Object.defineProperty(user, "introduce", {
    get() {
        return `My name's ${this.personName}. I'm ${this.age} and my job is ${this.job}`;
    },
    enumerable: true
});

let descriptors = Object.getOwnPropertyDescriptors(user);

const user1 = Object.create(user, {
    yearsOfExperience: {
        value: 3,
        writable: true,
        enumerable: true
    }
})

let descriptor1 = Object.getOwnPropertyDescriptors(user1);

console.log()