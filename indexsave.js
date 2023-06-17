  // Retrieve the user input from localStorage
    var savedUserInput = localStorage.getItem('userInput');
    if (savedUserInput) {
      document.getElementById('secondOutput').value = savedUserInput;
