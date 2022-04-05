'use strict';

let siteVisitor = prompt('Hey! What\'s your name?');
alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No`);

let questionOne = prompt('Was I born where I currently live, in Pueblo, Colorado?').toLowerCase;
if (questionOne === 'yes' || questionOne === 'y') {
  //console.log('That\'s correct! I was born and raised in Pueblo, Colorado');
  alert('That\'s correct! I was born and raised in Pueblo, Colorado');
} else if (questionOne === 'no' || questionOne === 'n') {
  //console.log('Actually, I really was born and raised in Pueblo, Colorado.');
  alert('Actually, I really was born and raised in Pueblo, Colorado.');
} else {
  //console.log('Please answer with Yes or No');
  alert('Please answer with Yes or No');
}

let questionTwo = prompt('Do I have a pet bulldog?');
if (questionTwo === 'yes' || questionTwo === 'y') {
  //console.log('Well I do have a dog, but she\'s a German Shepherd!');
  alert('Well I do have a dog, but she\'s a German Shepherd!');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  //console.log('That\'s correct! I do not have a bulldog, rather, I have a German Shepherd!');
  alert('That\'s correct! I do not have a bulldog, rather, I have a German Shepherd!');
} else {
  //console.log('Please answer with Yes or No');
  alert('Please answer with Yes or No');
}
let questionThree = prompt('Do I have any siblings?');
if (questionThree === 'yes'|| questionThree === 'y') {
  //console.log('Yeah! I have 1 older sister, who is a nurse practitioner!');
  alert('Yeah! I have 1 older sister, who is a nurse practitioner!');
} else if (questionThree === 'no' || questionThree === 'n') {
  //console.log('Actually I do! I have 1 older sister, who is a nurse practitioner!');
  alert('Actually I do! I have 1 older sister, who is a nurse practitioner!');
} else {
  //console.log('Please answer with Yes or No');
  alert('Please answer with Yes or No');
}

let questionFour = prompt('Is it true that I have never served in the military?');
if (questionFour === 'yes' || questionFour === 'y') {
  //console.log('Actually, it is true. I served in the U.S. Marine Corps from 2012 to 2016.');
  alert('Actually, it is true. I served in the U.S. Marine Corps from 2012 to 2016.');
} else if (questionFour === 'no' || questionFour === 'n') {
  //console.log('Correct answer! I served in the U.S. Marine Corps from 2012 to 2016.');
  alert('Correct answer! I served in the U.S. Marine Corps from 2012 to 2016.');
} else {
  //console.log('Please answer with Yes or No');
  alert('Please answer with Yes or No');
}

let questionFive = prompt('Do I prefer pineapple on my pizza?');
if (questionFive === 'yes' || questionFive === 'y') {
  //console.log('Ewww! No! I most certainly do not like pineapple on my pizza.');
  alert('Ewww! No! I most certainly do not like pineapple on my pizza.');
} else if (questionFive === 'no' || questionFive === 'n') {
  //console.log('You, my friend, are correct! I do NOT like pineapple on my pizza!');
  alert('You, my friend, are correct! I do NOT like pineapple on my pizza!');
} else {
  //console.log('Please answer with Yes or No');
  alert('Please answer with Yes or No');
}

alert(`Thanks for playing along, ${siteVisitor}! Feel free to browse this page of mine now and learn a little more about me!`);

