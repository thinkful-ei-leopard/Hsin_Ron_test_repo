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

function beyond(num) {
  if (isFinite(num)) { // is FINITE
    if (num > 0) {
      console.log('To infinity');
    }
    else if (num < 0) {
      console.log('To negative infinity');
    }
  }
  else if (num === 0) {
    console.log('Staying home');
  }
  else if (!isFinite(num)){
    console.log('And beyond');
  }// is INFINITE
}

beyond(441);



//Cracking the code drill

function decode(words){

  
  let word = words.split(" ");
  let sentence = [];

  for( let i=0; i< word.length; i++){

    let letter = word[i];
    switch (letter[0]){
    case "a":
      sentence.push(letter[1]);
      break;
    case "b":
      sentence.push(letter[2]);
      break;
    case "c":
      sentence.push(letter[3]);
      break;
    case "d":
      sentence.push(letter[4]);
      break;
    default:
      sentence.push(" ") ;
      break;
    }
    
  }  
  return sentence.join("");
}


let newletter = 'craft block argon meter bells brown croon droop'
console.log(decode(newletter));

// How many days in a month drill

function daysInMonth(month, leapYear) {

  let days = 0;

  switch(month){
  case 'January':
    days = 31;
    break;
  case 'February':
    days = 28;
    break;
  case 'March':
    days = 31;
    break;
  case 'April':
    days = 30;
    break;
  case 'May':
    days = 31;
    break;
  case 'June':
    days = 30;
    break;
  case 'July':
    days = 31;
    break;
  case 'August':
    days = 31;
    break;
  case 'September':
    days = 30;
    break;
  case 'October':
    days = 31;
    break;
  case 'November':
    days = 30;
    break;
  case 'December':
    days = 31;
    break;
  }

  if (month === 'February' && leapYear === true) {
    return `${month} has ${days+1} days.`;
  }
  return `${month} has ${days} days.`;
}

const monthStuff = daysInMonth("February", true);
console.log(monthStuff);

// Rock Paper Scissors Drill

function rockPaperScissors(num) {
  // 1 = Rock
  // 2 = Paper
  // 3 = scissors
  const randomNo = Math.floor(Math.random() * 3) + 1;  // the computers selection
  
  if(num === randomNo) {
    return 'The result is a tie.';
  }

  if(num === 1) { // Our num is ROCK
    if(randomNo === 2) { // They have paper
      return 'Paper beats rock. You lose.';
    }
    else if(randomNo === 3) { // They have scissors
      return 'Rock beats scissors. You win.';
    }
  }

  if(num === 2) { // our num is PAPER
    if(randomNo === 1) {  // they have rock
      return 'Paper beats rock. You win.';
    }
    else if (randomNo === 3) {
      return 'Scissors beats paper. You lose.';
    }
  }

  if(num === 3){  // our num is SCISSORS
    if(randomNo === 1) { // they have rock
      return 'Rock beats scissors. You lose.';
    }
    else if(randomNo === 2){ // they have paper
      return 'Scissors beats paper. You win.';
    }
  } 

}

const victor = rockPaperScissors(2);
console.log(victor);