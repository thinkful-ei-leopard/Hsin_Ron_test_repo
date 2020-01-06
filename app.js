/* eslint-disable strict */
let myTeam = 'Hsin and Ron';

console.log(myTeam);

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative!');
  }

  return 2020 - age;
}

function createGreeting (name, age){
    if(typeof name === 'undefined' || typeof age === 'undefined'){
        throw new Error('Arguments not valid');
    }
    if(typeof age !== 'number' || typeof name !== 'string'){
    throw new TypeError();
    }
    const yob = getYearOfBirth(age);
    return `I was born in ${yob}`;
}

try {
  const greeting1 = createGreeting;
  console.log(greeting1('Hsin', 25));
}
catch(e) {
    // IF error occurs
}


// Javascript Function Drills 2
// Jedi name drill

function jediName(firstName, lastName) {
    let newName = firstName.slice(0, 2);
    let otherName = lastName.slice(0, 3);
    let bestName = otherName + newName;
    return bestName; 
}

const jedi = jediName('Hsin', 'Ron');
console.log(jedi);