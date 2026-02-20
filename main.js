console.log('This is working');

const body = document.querySelector('body');
const main = document.querySelector('main');

const oneTitle = document.querySelector('h1');

const button = document.querySelector('.button');

button.disabled = false; // Button will be disabled, but for testing purposes, it is set to false. Change to true when done testing.

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

// setTimeout(() => {
//     button.disabled = false;  // Button will be enabled after 15 seconds, but for testing purposes, it is set to false. Change to true when done testing.
// }, 15000);

function generateNextPage() {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Button clicked');
        body.style.backgroundColor = 'white';
        button.style.opacity = 0;
        generateNewButton();
        changeToGrid();
        generateToolBar();
        companyLogo();
        addCustomerButton();
        setTimeout(() => {
            button.style.display = 'none';
            oneTitle.style.display = 'none';
        }, 4000);
    });
}

generateNextPage();

function companyLogo() {
    const logo = document.createElement('h2');
    logo.classList.add('title');
    logo.textContent = 'Raynewater';
    body.append(logo);
}

function generateToolBar() {
    const toolBarContainer = document.createElement('div');
    toolBarContainer.classList.add('toolbar-container');

    const searchCustomerButton = document.createElement('button');
    searchCustomerButton.classList.add('search-customer-btn');
    searchCustomerButton.textContent = 'Accounts';

    const routesButton = document.createElement('button');
    routesButton.classList.add('routes-btn');
    routesButton.textContent = 'Routes';

    toolBarContainer.append(searchCustomerButton, routesButton);
    body.append(toolBarContainer);
}

function addCustomerButton() {
    const newCustomerButton = document.createElement('button');
    newCustomerButton.classList.add('new-customer-btn');
    newCustomerButton.textContent = 'Add New Customer';
    main.append(newCustomerButton);
}

function generateNewCustomerForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('new-customer-form-container');
    const formTitle = document.createElement('header');
    formTitle.textContent = 'New Customer';

    // Form and fields
    const customerForm = document.createElement('form');
    const fields = document.createElement('div');
    fields.classList.add('fields');

    // All inputs will be created in this section.
    const inputFieldOne = document.createElement('div');
    inputFieldOne.classList.add('input-field');
    const firstNameLabel = document.createElement('label');
    firstNameLabel.textContent = 'First Name';
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.placeholder = 'First Name';

    const inputFieldTwo = document.createElement('div');
    inputFieldTwo.classList.add('input-field');
    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Last Name';
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.placeholder = 'Last Name';

    const inputFieldThree = document.createElement('div');
    inputFieldThree.classList.add('input-field');
    const addressLabel = document.createElement('label');
    addressLabel.textContent = 'House/Street';
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'House/Street';

    const inputFieldFour = document.createElement('div');
    inputFieldFour.classList.add('input-field');
    const cityLabel = document.createElement('label');
    cityLabel.textContent = 'City';
    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.placeholder = 'City';

    // Continue from here Steven

    const states = [
        {name: 'Alaska', code: 'AK'},
        {name: 'Alabama', code: 'AL'},
        {name: 'Arkansas', code: 'AR'},
        {name: 'Arizona', code: 'AZ'},
        {name: 'California', code: 'CA'},
        {name: 'Colorado', code: 'CO'},
        {name: 'Connecticut', code: 'CT'},
        {name: 'District of Columbia', code: 'DC'},
        {name: 'Delaware', code: 'DE'},
        {name: 'Florida', code: 'FL'},
        {name: 'Georgia', code: 'GA'},
        {name: 'Hawaii', code: 'HI'},
        {name: 'Iowa', code: 'IA'},
        {name: 'Idaho', code: 'ID'},
        {name: 'Illinois', code: 'IL'},
        {name: 'Indiana', code: 'IN'},
        {name: 'Kansas', code: 'KS'},
        {name: 'Kentucky', code: 'KY'},
        {name: 'Louisiana', code: 'LA'},
        {name: 'Massachusetts', code: 'MA'},
        {name: 'Maryland', code: 'MD'},
        {name: 'Maine', code: 'ME'},
        {name: 'Michigan', code: 'MI'},
        {name: 'Minnesota', code: 'MN'},
        {name: 'Missouri', code: 'MO'},
        {name: 'Mississippi', code: 'MS'},
        {name: 'Montana', code: 'MT'},
        {name: 'North Carolina', code: 'NC'},
        {name: 'North Dakota', code: 'ND'},
        {name: 'Nebraska', code: 'NE'},
        {name: 'New Hampshire', code: 'NH'},
        {name: 'New Jersey', code: 'NJ'},
        {name: 'New Mexico', code: 'NM'},
        {name: 'Nevada', code: 'NV'},
        {name: 'New York', code: 'NY'},
        {name: 'Ohio', code: 'OH'},
        {name: 'Oklahoma', code: 'OK'},
        {name: 'Oregon', code: 'OR'},
        {name: 'Pennsylvania', code: 'PA'},
        {name: 'Puerto Rico', code: 'PR'},
        {name: 'Rhode Island', code: 'RI'},
        {name: 'South Carolina', code: 'SC'},
        {name: 'South Dakota', code: 'SD'},
        {name: 'Tennessee', code: 'TN'},
        {name: 'Texas', code: 'TX'},
        {name: 'Utah', code: 'UT'},
        {name: 'Virginia', code: 'VA'},
        {name: 'Vermont', code: 'VT'},
        {name: 'Washington', code: 'WA'},
        {name: 'Wisconsin', code: 'WI'},
        {name: 'West Virginia', code: 'WV'},
        {name: 'Wyoming', code: 'WY'}
    ]

    const inputFieldFive = document.createElement('div');
    inputFieldFive.classList.add('input-field');
    const stateLabel = document.createElement('label');
    stateLabel.textContent = 'State';
    const stateSelect = document.createElement('select');
    stateSelect.add(new Option('Select your state', '', true, true));

    states.forEach(state => {
        const option = new Option(state.name, state.code);
        stateSelect.add(option);
    });

    const inputFieldSix = document.createElement('div');
    inputFieldSix.classList.add('input-field');
    const zipLabel = document.createElement('label');
    zipLabel.textContent = 'ZIP Code';
    const zipInput = document.createElement('input');
    zipInput.type = 'number';
    zipInput.placeholder = 'ZIP Code';

    const inputFieldSeven = document.createElement('div');
    inputFieldSeven.classList.add('input-field');
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone Number';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.placeholder = 'Phone Number';

}

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
    body.style.gridTemplateColumns = '.6fr 2fr';
    body.style.gridTemplateRows = '.3fr 1fr .5fr';
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
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container'); 
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
    tableContainer.append(table);

    main.append(tableContainer);
}
console.log(tableData[1].name);

// Class object to create customer objects. This will be used to create new customers and add them to the table.
class customer {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email1, email2, email3, balance) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.address = address,
        this.city = city,
        this.state = state,
        this.zip = zip,
        this.phoneNumber = phoneNumber,
        this.email1 = email1,
        this.email2 = email2,
        this.email3 = email3,
        this.balance = balance
    };
}
