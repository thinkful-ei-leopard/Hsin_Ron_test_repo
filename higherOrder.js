/* eslint-disable no-console */
/* eslint-disable indent */
// Higher Order Function Drills
// done by Ron Martin
// Thinkful Coding Bootcamp

// Functions as arguments (1)

function repeat(fn, n) {
    //This takes a function 'fn' as an argument an
    // it repeats the function 'n' numbers of times.
    for(let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

// Functions as arguments (2)

function filter(arr, fn) {
    // TASK: Define your function here
    const newArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
console.log(myNames.filter(name => name[0] === 'J')); 
// Bonus Credit: Can you invoke the filter function 
// and immediately log the result using a single line 
// of code and arrow functions?

// Functions as return values
function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if(warningCounter === 1) {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        }
        else if(warningCounter === 0 || warningCounter >=2){
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
        }
    };
}

// Creates 3 instances of Closure
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const flashFloodWarning = hazardWarningCreator('Flash flood warning!');
const fireWarning = hazardWarningCreator('Out of control fires');
// Invoking our new hazard warning closures
rocksWarning('Main St and Pacific Ave'); 
rocksWarning('Main St and 3rd');
flashFloodWarning('Long Beach Drive and Central');
fireWarning('Broadway and 2nd Street');
fireWarning('Azure View and Sunpark');
fireWarning('Big Rock Road and Mission Gorge');


// forEach, filter, and map
