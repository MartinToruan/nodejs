/*
    Instead of using var to initialize variable, use:
        let -> if the variable can be changed
        const -> if the variable can't be changed

    If you try to change a const variable, you'll get an error
*/

// string
const name = 'Max';

// number
let age = 29;

// bool
const hasHobbies = true;

age = 30;

// name = 'Min'; // Will produce error

console.log(name);
console.log(age);
console.log(hasHobbies);

function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
}

console.log(summarizeUser(name, age, hasHobbies));