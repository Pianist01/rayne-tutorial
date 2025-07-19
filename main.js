console.log('This is working');

const oneTitle = document.querySelector('h1');

const button = document.querySelector('.button');

button.disabled = true;

const firstPage = ['Welcome to Raynewater, whoever you are.', 'This is a tutorial to help you get started with the Raynewater software.', 'Click the button below to begin.'];

let index = 0;
let secondsPassed = 0;
let opacity = 0;

const timer = setInterval(() => {
    secondsPassed++;
    console.log(`Seconds passed: ${secondsPassed}`);
}, 1000);

let startUp = function() {
    let phrase = setInterval(() => {
        oneTitle.style.transition = 'opacity 1s ease-in-out';
        oneTitle.style.opacity = opacity;
    }, 5000);
};

startUp();
