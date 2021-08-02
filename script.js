// Elements
// --------------------------------------------------

const generateBtn = document.querySelector('#generate-btn');
const textInput = document.querySelector('#text-input');
const tooltip = document.querySelector('#tooltip');

// Functions
// --------------------------------------------------

async function fetchJson() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
  const data = await response.json();
  return data;
}

const generateBtnClick = () => {
  fetchJson().then((data) => {
    textInput.value = data.title;
    textInput.addEventListener('click', copyText);
    tooltip.classList.add('is-active');
  });
};

const copyText = () => {
  textInput.select();
  document.execCommand('copy');
  tooltip.textContent = 'Copied!';
  setTimeout(function () {
    tooltip.classList.remove('is-active');
  }, 2000);
};

// Event Handlers
// --------------------------------------------------

generateBtn.addEventListener('click', generateBtnClick);
