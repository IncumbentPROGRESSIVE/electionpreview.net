// Get input and output elements
var userInput = document.getElementById('userInput');
var outputBox = document.getElementById('outputBox');
var toggleButton = document.getElementById('toggleButton');
var electionIframe = document.getElementById('electionIframe');
var caption = document.querySelector('.caption');
var darkModeButton = document.getElementById('darkModeButton');

// Listen for when the input box's value changes
userInput.addEventListener('input', function() {
  // Store the user's input in a variable
  var userText = userInput.value;

  // Store the user's input in localStorage
  localStorage.setItem('userInput', userText);
  
  // Update the output box with the user's text
  outputBox.value = userText + " test this";
});

toggleButton.addEventListener('click', function() {
  if (electionIframe.src.includes('senate')) {
    electionIframe.src = 'https://steepatticstairs.github.io/ElectionMap/?mode=gubernatorial';
    toggleButton.textContent = 'Gubernatorial';
    caption.textContent = 'Gubernatorial'; // Change the caption text
  } else if (electionIframe.src.includes('gubernatorial')) {
    electionIframe.src = 'https://steepatticstairs.github.io/ElectionMap/';
    toggleButton.textContent = 'House';
    caption.textContent = 'House of Representatives'; // Change the caption text
  } else {
    electionIframe.src = 'https://steepatticstairs.github.io/ElectionMap/?mode=senate';
    toggleButton.textContent = 'Senate';
    caption.textContent = 'Senate'; // Change the caption text
  }
});

// Retrieve the user input from localStorage, if available
var savedUserInput = localStorage.getItem('userInput');
if (savedUserInput) {
  userInput.value = savedUserInput;
  outputBox.value = savedUserInput + " test this";
}

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeButton.classList.toggle('on');
  
  // Save Dark Mode setting in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

window.addEventListener('DOMContentLoaded', (event) => {
  // Check for dark mode preference on page load
  if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeButton.classList.add('on');
  }

  // Retrieve the user input from localStorage, if available
  var savedUserInput = localStorage.getItem('userInput');
  if (savedUserInput) {
    userInput.value = savedUserInput;
    outputBox.value = savedUserInput + " test this";
  }
});


