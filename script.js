// Elements
// --------------------------------------------------

const generateBtn = document.querySelector('#generate-btn');
const textInput = document.querySelector('#text-input');
const tooltip = document.querySelector('#tooltip');

// Functions
// --------------------------------------------------

// This grabs the data. You can add error handling here if you want.
async function fetchJson() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
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
  }, 2000);
};

// Event Handlers
// --------------------------------------------------

generateBtn.addEventListener('click', generateBtnClick);
