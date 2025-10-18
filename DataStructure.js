/**
 * Data structures are basically objects, so they come with helpful functions
 * List of Data structures:
 * Array – ordered list of values
 * Object – key-value pairs
 * Set – collection of unique values
 * Map – key-value pairs with any type of key
 */

const arrayOfMixedDataType = ["1", 2, true, {name: "Kim", age: 34}]; //This is array literal and strongly recommended
const arrayWithConstructor = new Array("1", 2, true, {name: "Kim", age: 34}); //Not recommended, some environments even warm this use
const sparseArray = new Array(3); // => an empty array with length 3. Avoid sparse arrays

for(let element of arrayOfMixedDataType) {
    if (typeof element == "object") {
        for(let [key, value] of Object.entries(element)) { //This is Array destructuring
            console.log(`Key: ${key} - Value: ${value}`)
        }
    } else {
        console.log(element) 
    }
}

//Array indices are object keys — numeric indices like 0 are implicitly converted to strings, so myArray[0] and myArray["0"] are the same

//Merge arrays with spread operator
console.log([...arrayOfMixedDataType, ...arrayWithConstructor])

//Creating objects by object literals are most preferred. Keys are strings/symbols
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
user.greet();
user.printAge()
user.printCustomerInfo("I like frogs")

//Creating objects with new Object() (outdated and often flagged as unnecessary)
const userObject = new Object(); userObject.name = "Kim";

//Retrieve data from object by not notation or bracket notation (with dynamic keys or keys containing spaces)

//Merge objects with spread operator



// console.log("")
