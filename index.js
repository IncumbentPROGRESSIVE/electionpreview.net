// Declare two boolean variables
let Republican = false; // Change the value to true or false as needed
let Democrat = false; // Change the value to true or false as needed
let Moderate = true; // Corrected this line

// Get the input and output elements
var userInput = document.getElementById('userInput');
var outputBox = document.getElementById('outputBox');

// Listen for when the input box's value changes
userInput.addEventListener('input', function() {
  // Store the user's input in a variable
  var userText = userInput.value;

  // Update the output box with the user's text
  outputBox.value = userText;
});
