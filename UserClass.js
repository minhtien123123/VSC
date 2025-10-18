class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`My name's ${this.name}`);
    }
}

const person1 = new User("Kim");
person1.greet();

//Methods inside a class are placed on the class’s prototype, not directly on each instance
console.log(Object.hasOwn(person1, "greet"))

class AdvancedUser extends User {

/**
 * We don't need to create a constructor like we do in Java
 * JS automatically calls super(name)
 * But if we explicitly create the constructor, make sure to make super(name) the first line
 * We can override functions
 */

    #age; //Private field

    set age(age) { //Getters and setters are accessed like properties. They look like fields but behave like functions BTS
        this.#age = age;
    }
    get age() {
        return this.#age;
    }
    
}

const person2 = new AdvancedUser("Harry");
person2.greet();
person2.age = 24;
console.log(person2.age)

console.log();