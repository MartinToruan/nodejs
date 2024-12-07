/*
    Spread Operator => Using to spread object or array
*/
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am '+ this.name);
    }
}

const copiedPerson = {...person} // This is spread operator on object
console.log(copiedPerson)

const hobbies = ['Sports', 'Cooking'];
const copiedHobbies = [...hobbies]; // This is spread operator on an array
const anotherWayToCopyArray = hobbies.slice()
console.log(copiedHobbies);

/*
    Rest Operator => Using to joined object or array
*/
const toArray = (...args) => {
    return args
}

console.log(toArray(1, 2, 3, 4));