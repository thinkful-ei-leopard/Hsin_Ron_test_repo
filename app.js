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
if(typeOf name === "undefined" || typeOf age === "undefined"){
    throw new Error(
        'Arguments not valid';
    )
}
if(typeof age !== "number" || typeof name !== "string"){
   throw new TypeError() 
}
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