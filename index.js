// Declare two boolean variables
let Republican = false; // Change the value to true or false as needed
let Democrat = false; // Change the value to true or false as needed
let Moderate = true; // Corrected this line

// Get the input and output elements
var userInput = document.getElementById('userInput');
var outputBox = document.getElementById('outputBox');
var secondOutput = document.getElementById('secondOutput'); // Add this line

// Listen for when the input box's value changes
userInput.addEventListener('input', function() {
  // Store the user's input in a variable
  var userText = userInput.value;

  // Check if the user's text is over 20 characters
  if (userText.length > 20) {
    Moderate = false; // Set Moderate to false
  } else {
    Moderate = true; // Set Moderate to true
  }

  // Update the output box with the user's text
  outputBox.value = userText + " test this";
  
  // Update the secondOutput box with the user's text
  secondOutput.value = userText;
});
