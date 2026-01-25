console.log('This is working');

const body = document.querySelector('body');
const main = document.querySelector('main');

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
        body.style.backgroundColor = 'white';
        button.style.opacity = 0;
        generateNewButton();
        changeToGrid();
        setTimeout(() => {
            button.style.display = 'none';
            oneTitle.style.display = 'none';
        }, 4000);
    });
}

generateNextPage();

const newButton = document.createElement('button');

newButton.addEventListener('click', (e) => {
    e.preventDefault();
    generateTable();
    newButton.classList.remove('new-button');
    newButton.classList.add('disappear');
});
function generateNewButton() {
    newButton.classList.add('new-button');
    newButton.textContent = 'Click Here To Generate Table';

    main.append(newButton);
}

function changeToGrid() {
    body.style.removeProperty('display');
    body.style.display = 'grid';
    body.style.gridTemplateColumns = 'repeat(3, 1fr)';
    body.style.gridTemplateRows = '.5fr 1fr .5fr';
}

const tableCategory = ['', 'ID:', 'Name:', 'Address:', 'City:', 'State:', 'ZIP:', 'Phone Number:', 'Email:', 'Current Balance:'];
const tableData = [
    {
        id: 1,
        name: 'Peppi',
        address: '1410 S Joane Way',
        city: 'Santa Ana',
        state: 'CA',
        zip: '92704',
        phone: '(323) 916-2224',
        email: 'peppi67@gmail.com',
        balance: '350'
    },
    {
        id: 2,
        name: 'Leva',
        address: '621 W Alton Ave',
        city: 'Santa Ana',
        state: 'CA',
        zip: '92707',
        phone: '(949) 323-6767',
        email: 'imleva69@yahoo.com',
        balance: '20'
    },
    {
        id: 3,
        name: 'Borrego',
        address: '1033 W Glenwood Pl',
        city: 'Santa Ana',
        state: 'CA',
        zip: '92707',
        phone: '(714) 278-5964',
        email: 'borregohouse67@gmail.com',
        balance: '67'
    }
];

function generateTable() {
    const table = document.createElement('table');
    table.classList.add('table');
    const tableCaption = document.createElement('caption');
    tableCaption.textContent = 'This is a table to test adding customer information';
    const tableHead = document.createElement('thead');
    const tableRow = document.createElement('tr');
    for(let i = 0; i <= 9; i++) {
        const tableHeader = document.createElement('th');
        tableHeader.textContent = tableCategory[i + 1];
        tableRow.append(tableHeader);
    }

    const tableBody = document.createElement('tbody');
    tableBody.classList.add('table-body');
    tableData.forEach(item => {
        console.log(item.name);
        const dataRow = document.createElement('tr');
        Object.values(item).forEach(value => {
            const dataCell = document.createElement('td');
            dataCell.textContent = value;
            dataRow.append(dataCell);
        });
        tableBody.append(dataRow);
    });

    tableHead.append(tableRow);
    table.append(tableCaption, tableHead, tableBody);

    main.append(table);
}
console.log(tableData[1].name);