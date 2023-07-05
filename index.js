// Get input and output elements
var userInput = document.getElementById('userInput');
var outputBox = document.getElementById('outputBox');

// Listen for when the input box's value changes
userInput.addEventListener('input', function() {
  // Store the user's input in a variable
  var userText = userInput.value;

  // Store the user's input in localStorage
  localStorage.setItem('userInput', userText);
  
  // Update the output box with the user's text
  outputBox.value = userText + " test this";
});

var toggleButton = document.getElementById('toggleButton');
var electionIframe = document.getElementById('electionIframe');

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


// Declare two boolean variables
let Republican = false;
let Democrat = false;
let Moderate = true;


// Check if the user's text is over 20 characters
if (userText.length > 20) {
  Moderate = false; // Set Moderate to false
} else {
  Moderate = true; // Set Moderate to true
}

document.getElementById('darkModeButton').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeButton.classList.toggle('on');
  
  // Save Dark Mode setting in localStorage
  if (darkModeButton.classList.contains('on')) {
    localStorage.setItem('darkMode', 'on');
  } else {
    localStorage.removeItem('darkMode');
  }
});

window.addEventListener('DOMContentLoaded', (event) => {
  // Check for dark mode preference on page load
  if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // Add event listener to the dark mode button
  document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'true' : 'false');
  });
});






