
/**
 * JavaScript infers data type from value and context
 * 7 primitive types: String, Number, Boolean, null, undefined, BigInt and Symbol
 * Details on BigInt and Symbol are not included
 */

let peopleName = "Kim";
const address = '200 NVK';
let nameAndAddress = `Name: ${peopleName} - Address: ${address}`; //Template literals

const age = 23; //const identifer must be initialized with a value outright
let isMarried = true;

let nullValue = null; //Deliberately null
let undefinedValue; //Uninitialized identifer is undefined


//JavaScript autoboxes primitives by temporarily wrapping them in objects so you can perform methods on them
console.log(peopleName.toUpperCase())

/**
 * String() vs new String()
 * String() is a function to create a string literal => most preferred
 * new String() creates an object of type String, not a primitive
 * See below
 */
console.log(typeof peopleName) // => string
console.log(typeof new String(peopleName)) // => object

//The function Number() returns different outputs depending on the inputs. Watch out for this

//The function Boolean() returns true/false depending on whether the inputs are truthy/falsy


