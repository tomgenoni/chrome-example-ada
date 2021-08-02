// 1. Consts
// --------------------------------------------------

const JSON_URL = 'https://jsonplaceholder.typicode.com/todos/3';

// 2. DOM Elements
// --------------------------------------------------

const generateBtn = document.querySelector('#generate-btn');
const textInput = document.querySelector('#text-input');
const tooltip = document.querySelector('#tooltip');

// 3. Functions
// --------------------------------------------------

// This is the function that gets called after the button is clicked and
// retrieves the JSON data. You can add error handling here.
// https://dmitripavlutin.com/javascript-fetch-async-await/
async function fetchJson() {
  const response = await fetch(JSON_URL);
  const data = await response.json();
  return data;
}

const generateBtnClick = () => {
  // This runs the function above to return the data.
  // You need to use `then` here because the async returns a promise.
  fetchJson().then((data) => {
    // Pass just the "title" through from the data
    updateUi(data.title);
  });
};

const updateUi = (title) => {
  // Add the value to the input.
  textInput.value = title;
  // Now that the input has text we add an eventListner.
  textInput.addEventListener('click', copyText);
  // Turn on the tooltip.
  tooltip.classList.add('is-active');
};

const copyText = () => {
  // Select the text in the input and copy it.
  textInput.select();
  document.execCommand('copy');
  // Change message in tooltip after text has been copied.
  tooltip.textContent = 'Copied!';
  // After a couple seconds remove the class that shows the tooltip.
  setTimeout(function () {
    tooltip.classList.remove('is-active');
    // Return text back to original text.
    tooltip.textContent = 'Click to copy';
  }, 2000);
};

// 4. Event Handlers
// --------------------------------------------------

generateBtn.addEventListener('click', generateBtnClick);
