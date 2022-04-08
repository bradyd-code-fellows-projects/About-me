'use strict';

let numberOfCorrectAnswers = 0;

let siteVisitor = prompt('Hey! What\'s your name?');
alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No`);

function q1(){
  let questionOne = prompt('Was I born where I currently live, in Pueblo, Colorado?').toLowerCase();
  if (questionOne === 'yes' || questionOne === 'y') {
  //console.log('That\'s correct! I was born and raised in Pueblo, Colorado');
    alert('That\'s correct! I was born and raised in Pueblo, Colorado');
    numberOfCorrectAnswers++;
  } else if (questionOne === 'no' || questionOne === 'n') {
  //console.log('Actually, I really was born and raised in Pueblo, Colorado.');
    alert('Actually, I really was born and raised in Pueblo, Colorado.');
  } else {
  //console.log('Please answer with Yes or No');
    prompt('Please answer Yes or No').toLowerCase();
  }
}
q1();

function q2(){
  let questionTwo = prompt('Do I have a pet bulldog?').toLowerCase();
  if (questionTwo === 'yes' || questionTwo === 'y') {
    //console.log('Well I do have a dog, but she\'s a German Shepherd!');
    alert('Well I do have a dog, but she\'s a German Shepherd!');
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    //console.log('That\'s correct! I do not have a bulldog, rather, I have a German Shepherd!');
    alert('That\'s correct! I do not have a bulldog, rather, I have a German Shepherd!');
    numberOfCorrectAnswers++;
  } else {
    //console.log('Please answer with Yes or No');
    alert('Please answer with Yes or No');
  }
}
q2();

function q3(){
  let questionThree = prompt('Do I have any siblings?').toLowerCase();
  if (questionThree === 'yes'|| questionThree === 'y') {
    //console.log('Yeah! I have 1 older sister, who is a nurse practitioner!');
    alert('Yeah! I have 1 older sister, who is a nurse practitioner!');
    numberOfCorrectAnswers++;
  } else if (questionThree === 'no' || questionThree === 'n') {
    //console.log('Actually I do! I have 1 older sister, who is a nurse practitioner!');
    alert('Actually I do! I have 1 older sister, who is a nurse practitioner!');
  } else {
    //console.log('Please answer with Yes or No');
    alert('Please answer with Yes or No');
  }
}
q3();

function q4(){
  let questionFour = prompt('Is it true that I have never served in the military?').toLowerCase();
  if (questionFour === 'yes' || questionFour === 'y') {
    //console.log('Actually, it is true. I served in the U.S. Marine Corps from 2012 to 2016.');
    alert('Actually, it is true. I served in the U.S. Marine Corps from 2012 to 2016.');
  } else if (questionFour === 'no' || questionFour === 'n') {
    //console.log('Correct answer! I served in the U.S. Marine Corps from 2012 to 2016.');
    alert('Correct answer! I served in the U.S. Marine Corps from 2012 to 2016.');
    numberOfCorrectAnswers++;
  } else {
    //console.log('Please answer with Yes or No');
    alert('Please answer with Yes or No');
  }
}
q4();

function q5(){
  let questionFive = prompt('Do I prefer pineapple on my pizza?').toLowerCase();
  if (questionFive === 'yes' || questionFive === 'y') {
    //console.log('Ewww! No! I most certainly do not like pineapple on my pizza.');
    alert('Ewww! No! I most certainly do not like pineapple on my pizza.');
  } else if (questionFive === 'no' || questionFive === 'n') {
    //console.log('You, my friend, are correct! I do NOT like pineapple on my pizza!');
    alert('You, my friend, are correct! I do NOT like pineapple on my pizza!');
    numberOfCorrectAnswers++;
  } else {
    //console.log('Please answer with Yes or No');
    alert('Please answer with Yes or No');
  }
}
q5();

function q6(){
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  let randomNumber = getRandomNumber(10);
  console.log(randomNumber);

  let numberOfAttempts = 0;

  for (let i = 0; i < 4; i++) {
    let questionSix = parseInt(prompt('Try to guess the number I am thinking of.'));
    if (questionSix === randomNumber) {
      numberOfAttempts++;
      if (numberOfAttempts < 2) {
        alert(`Nice guess! It is ${randomNumber}! It only took you ${numberOfAttempts} try to guess correctly.`);
      } else {
        alert(`Nice guess! It is ${randomNumber}! It took you ${numberOfAttempts} tries to guess correctly.`);
      }
      numberOfCorrectAnswers++;
      break;
    } else if (questionSix > randomNumber && i < 3) {
      alert('Too high, guess again');
      numberOfAttempts++;
    } else if (questionSix < randomNumber && i < 3) {
      alert('Too low, guess again');
      numberOfAttempts++;
    }
    if (i === 3 && questionSix !== randomNumber) {
      alert(`Sorry, you've run out of guess attempts, the correct answer is ${randomNumber}`);
    }
  }
}
q6();

function q7(){
  let myFavoriteFoods = ['steak', 'pizza', 'ice cream', 'korean bbq', 'orange chicken', 'gnocchi', 'cheesecake', 'anything with cheese'];

  let questionSeven = prompt('Try to guess a favorite food of mine').toLowerCase();

  for (let i = 0; i < 6; i++) {
    if (i > 0) {
      questionSeven = prompt('Sorry, try again').toLowerCase();
    }
    for (let j = 0; j < myFavoriteFoods.length; j++) {
      console.log('i: ', i, 'j: ', j);
      if (questionSeven === myFavoriteFoods[j]) {
        alert(`Yes! I love ${myFavoriteFoods[j]}!`);
        i = 6;
        numberOfCorrectAnswers++;
        break;
      } else if (questionSeven !== myFavoriteFoods[j] && i < 5) {
        continue;
      }
    }
    if (i === 5) {
      alert('Sorry, you\'ve run out of guesses!');
    }
  }

  alert(`Here is a full list of some of my favorite foods: ${myFavoriteFoods}`);

}
q7();

alert(`Thanks for playing along, ${siteVisitor}! You answered ${numberOfCorrectAnswers} questions correctly out of 7! Feel free to browse this page of mine now and learn a little more about me!`);
