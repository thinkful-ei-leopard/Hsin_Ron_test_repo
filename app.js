/* eslint-disable strict */
let myTeam = 'Hsin and Ron';

console.log(myTeam);

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative!');
  }
  return yearOfBirth = 2020-age ;
}
function createGreeting (name, age){
  const yob = getYearOfBirth(age);
  return `I was born in ${yob}`;
}
try {
  const greeting1 = createGreeting();
}
catch(e) {
    // IF error occurs
}

console.log(greeting1);