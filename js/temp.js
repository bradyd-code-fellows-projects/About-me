// function getRandomNumber(max) {
//   return Math.floor(Math.random() * max);
// }

// let randomNumber = getRandomNumber(10);
// console.log(randomNumber);
// let numberOfAttempts = 0;

let randomNumber = 7;

let numberOfAttempts = 0;

for (let i = 0; i < 4; i++) {
  let questionSix = parseInt(prompt('Guess my favorite number'));
  if (questionSix === randomNumber) {
    alert('Nice guess! It is 7! It took you to guess correctly.');
    break;
  } else if (questionSix > randomNumber && i < 3) {
    alert('Too high, guess again');
  } else if (questionSix < randomNumber && i < 3) {
    alert('Too low, guess again');
  }
  if (i === 3 && questionSix !== randomNumber) {
    alert('Sorry, you\'ve run out of guess attempts, the correct answer is 7');
  }
}

let myFavoriteFoods = ['Steak', 'Pizza', 'Ice Cream', 'Korean BBQ', 'Orange Chicken', 'Gnocchi', 'Cheesecake', 'Anything with cheese'];


for (let i = 0; i < 6; i++) {
  let questionSeven = prompt('Try to guess a favorite food of mine');
  for (let j = 0; j < myFavoriteFoods.length; j++) {
    if (questionSeven === myFavoriteFoods[j]) {
      alert(`Yes! I love ${myFavoriteFoods[j]}!`);
      i = 6;
      break;
    }
  }
}

alert(`Here are all of my favorite foods: ${myFavoriteFoods}`);