const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
}

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// Using Object Destructuring
const printOnlyName = ({ name }) => {
    console.log(name);
}
printOnlyName(person);

// Get the name and age from an object using destructuring
const {name, age} = person
console.log(name);
console.log(age);

// Using object destructuring on an array
const hobbies = ['Sports', 'Cooking', 'Reading'];
const [hobby1, ...others] = hobbies;
console.log('\nHobby')
console.log(hobby1);
console.log(others);