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

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
console.log(myNames.filter(name => name[0] === 'J')); // Bonus Credit: Can you invoke the filter function 
                                                      // and immediately log the result using a single line 
                                                      // of code and arrow functions?

// Functions as return values
