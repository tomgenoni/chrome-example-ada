// Elements
// --------------------------------------------------

const generateBtn = document.querySelector('#generate-btn');
const textInput = document.querySelector('#text-input');
const tooltip = document.querySelector('#tooltip');

// Functions
// --------------------------------------------------

// This grabs the data. You can add error handling here.
async function fetchJson() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
  const data = await response.json();
  return data;
}

const generateBtnClick = () => {
  // This runs the function above to return the data.
  // You need to use `then` here because the async returns a promise.
  fetchJson().then((data) => {
    // Set the value of the input to the "title" in the data
    textInput.value = data.title;
    textInput.addEventListener('click', copyText);
    tooltip.classList.add('is-active');
  });
};

const copyText = () => {
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
