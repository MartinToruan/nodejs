/*
    In Node JS, you can have array containing different type of data (string, integer, bool, etc)
*/
const hobbies = ['Sports', 'Reading', 10, true];

for (let hobby of hobbies) {
    console.log(hobby);
}

/*
    For correctness, please construct your array with the same type of data
*/
console.log('\nCorrect Hobby: ');
const correctHobbies = ["Sports", "Cooking"];
for (let hobby of correctHobbies) {
    console.log(hobby);
}

/*
    Array Method.
    You can iterate the value of and array, and do something with each element of the array.
    It'll return a new array with the updated data.
*/

const updatedHobbies = correctHobbies.map(hobby => 'Hobby: ' + hobby); // remember the arrow function
console.log("\n\n--Array Method--")
console.log(updatedHobbies);
console.log(correctHobbies);

