// import functions and grab DOM elements
const dogImage = document.getElementById('dog');
const catImage = document.getElementById('cat');
const horseImage = document.getElementById('horse');

const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const horseSound = document.getElementById('horse-sound');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

dogImage.addEventListener('click', ()=> {
    dogSound.play();
});

catImage.addEventListener('click', ()=> {
    catSound.play();
});

horseImage.addEventListener('click', ()=> {
    horseSound.play();
});