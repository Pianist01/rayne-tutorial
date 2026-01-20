console.log('This is working');

const oneTitle = document.querySelector('h1');

const button = document.querySelector('.button');

button.disabled = true;

const firstPage = ['', 'Welcome to Raynewater, whoever you are.', 'This is a tutorial to help you get started with the Raynewater software.', 'Click the button below to begin.'];

let index = 1;
let secondsPassed = 0;

const timer = setInterval(() => {
    secondsPassed++;
    console.log(`Seconds passed: ${secondsPassed}`);
}, 1000);

const stopTextTime = setTimeout(() => {
    clearInterval(changeText);
    clearInterval(timer);
    console.log('Text will no longer change.');
    oneTitle.style.animation = '';
}, 16000);

const changeText = setInterval(() => {
    index += 1;
    oneTitle.textContent = firstPage[index];
    console.log(`Index: ${index}`);
}, 5000);

setTimeout(() => {
    button.disabled = false;
}, 15000);

function generateNextPage() {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Button clicked');
    });
}

generateNextPage();
