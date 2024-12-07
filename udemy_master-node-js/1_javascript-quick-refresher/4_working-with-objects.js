/*
    This will result the variable this.name is undefined
    Because, 'this' variable is pointing to the global scope of the code, not only the object scope
*/
const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
}

person.greet();

/*
    The old school of function will work to get the value of name of the object
*/
const SecondPerson = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
}

SecondPerson.greet();

/*
    This is the simplest way to add method to an object.
*/
const modernPerson = {
    name: 'Modern Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

modernPerson.greet();