// string
var name = 'Max';

// number
var age = 29;

// bool
var hasHobbies = true;

console.log(name);
console.log(age);
console.log(hasHobbies);

function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
}

console.log(summarizeUser(name, age, hasHobbies));