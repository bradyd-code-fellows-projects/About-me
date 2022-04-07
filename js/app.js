'use strict';

let numberOfCorrectAnswers = 0;

let siteVisitor = prompt('Hey! What\'s your name?');
alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No`);

function q1(){

let questionOne = prompt('Was I born where I currently live, in Pueblo, Colorado?');
if (questionOne === 'yes' || questionOne === 'y') {
  //console.log('That\'s correct! I was born and raised in Pueblo, Colorado');
  alert('That\'s correct! I was born and raised in Pueblo, Colorado');
  numberOfCorrectAnswers++;
} else if (questionOne === 'no' || questionOne === 'n') {
  //console.log('Actually, I really was born and raised in Pueblo, Colorado.');
  alert('Actually, I really was born and raised in Pueblo, Colorado.');
} else {
  //console.log('Please answer with Yes or No');
  alert('Please answer with Yes or No');
}
}
q1();

function q2(){

  let questionTwo = prompt('Do I have a pet bulldog?');
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
  let questionThree = prompt('Do I have any siblings?');
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
  let questionFour = prompt('Is it true that I have never served in the military?');
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
  let questionFive = prompt('Do I prefer pineapple on my pizza?');
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
  
  let questionSix = prompt('Guess my favorite number');
  
  let randomNumber = getRandomNumber(10);
  console.log(randomNumber);
  let numberOfAttempts = 0;
  
  while (questionSix !== randomNumber && numberOfAttempts < 5) {
    if (questionSix < randomNumber) {
      questionSix = prompt('Too low, guess again.');
    }
    if (questionSix > randomNumber) {
      questionSix = prompt('Too high, guess again');
    }
    numberOfAttempts ++;
  }
  
  if (questionSix === randomNumber) {
    alert(`Nice guess! It is ${randomNumber}! It took you ${numberOfAttempts} to guess correctly.`);
    numberOfCorrectAnswers++;
  } else {
    alert(`Sorry, you have run out of guesses! My favorite number is ${randomNumber}.`);
  }
}
q6();

function q7(){
  let myFavoriteFoods = ['Steak', 'Pizza', 'Ice Cream', 'Korean BBQ', 'Orange Chicken', 'Gnocchi', 'Cheesecake', 'Anything with cheese'];
  
  let questionSeven = prompt('Try to guess a favorite food of mine');
  
  let favoriteFoodGuesses = 0;
  for (let i = 0; i < myFavoriteFoods.length; i++) {
    let oneFavoriteFood = myFavoriteFoods[i];
    if (questionSeven !== oneFavoriteFood && favoriteFoodGuesses < 7) {
      prompt('Nope, guess again.');
      favoriteFoodGuesses++;
    } else if (questionSeven === oneFavoriteFood) {
      alert(`Correct! ${oneFavoriteFood} is one of my favorite foods!`);
      numberOfCorrectAnswers++;
      break;
    } else {
      alert(`Sorry, you've run out of guesses. Here is a list of some of my favorite foods: ${myFavoriteFoods}.`);
    }
  }
}
q7();

alert(`Thanks for playing along, ${siteVisitor}! You answered ${numberOfCorrectAnswers} questions correctly out of 7! Feel free to browse this page of mine now and learn a little more about me!`);
