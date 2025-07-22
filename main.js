console.log('This is working');

const oneTitle = document.querySelector('h1');

const button = document.querySelector('.button');

button.disabled = true;

const firstPage = ['', 'Welcome to Raynewater, whoever you are.', 'This is a tutorial to help you get started with the Raynewater software.', 'Click the button below to begin.'];

let index = 0;
let secondsPassed = 0;
let opacity = 0;
let maxOpacity = 1;
oneTitle.style.opacity = opacity;

const timer = setInterval(() => {
    secondsPassed++;
    console.log(`Seconds passed: ${secondsPassed}`);
    const fadeIn = () => {
        oneTitle.style.transition = 'opacity 1s ease-in-out';
        if(opacity < maxOpacity) {
            opacity += 0.2;
            oneTitle.style.opacity = opacity + '%';
            requestAnimationFrame(fadeIn);
        };
    }
    if(secondsPassed === 3) {
        fadeIn();
    }
}, 1000);

let startUp = function() {
    // let phrase = setInterval(() => {

    //     index = (index + 1) % firstPage.length;
    //     oneTitle.textContent = firstPage[index];
    // }, 5000);
};

setTimeout(() => {
    button.disabled = false;
}, 15000);

startUp();
