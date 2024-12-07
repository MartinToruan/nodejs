// string
const name = 'Max';

// number
let age = 29;

// bool
const hasHobbies = true;

age = 30;

// Basic Function
function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
}
console.log(summarizeUser(name, age, hasHobbies));

/*
    Storing the function into a variable
*/
const summarizeUserArrow = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
}
console.log(summarizeUserArrow(name, age, hasHobbies));

/*
    Arrow Function with 1 return value
*/
const add = (a, b) => a + b;
console.log(add(5, 10));

/*
    Arrow Function with 1 input parameter
    Notes: you DON'T need to specify the paranthesis
*/
const addOne = a => a + 1;
console.log(addOne(10));

/*
    Arrow function without input parameter
    Notes: you need to specify the paranthesis
*/
const addRandom = () => 3 + 4;
console.log(addRandom());