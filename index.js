// Get input and output elements
var toggleButton = document.getElementById('toggleButton');
var electionIframe = document.getElementById('electionIframe');
var caption = document.querySelector('.caption');
var darkModeButton = document.getElementById('darkModeButton');
 
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

var darkModeButton = document.getElementById('darkModeButton');
var darkModeButton2 = document.getElementById('darkModeButton2');
var darkModeButton3 = document.getElementById('darkModeButton3');

function toggleDarkMode(event) {
  document.body.classList.toggle('dark-mode');
  event.target.classList.toggle('on');

  // Save Dark Mode setting in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
}

if(darkModeButton) darkModeButton.addEventListener('click', toggleDarkMode);
if(darkModeButton2) darkModeButton2.addEventListener('click', toggleDarkMode);
if(darkModeButton3) darkModeButton3.addEventListener('click', toggleDarkMode);

// Check for dark mode preference on page load
window.addEventListener('DOMContentLoaded', (event) => {
  if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');

    if(darkModeButton) darkModeButton.classList.add('on');
    if(darkModeButton2) darkModeButton2.classList.add('on');
    if(darkModeButton3) darkModeButton3.classList.add('on');
  }
});
