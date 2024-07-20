const display = document.getElementById('display');

function writeToDisplay(input) {
  // Check if the display value contains characters other than digits, arithmetic operators, and decimal points
  if (/[^0-9+\-*/.%]/.test(display.value) ) {
    // Clear the display if it contains invalid characters
    display.value = '';
  }
  // Add the new input to the display
  display.value += input;
}

function clearDisplay() {
  display.value = ''; // simply clear the display 
}
function calculate() {
  let value = display.value;
  // if the value contains a percentage, we need to calculate it differently. Because eval() doesn't support percentages
  if (value.includes('%')) {
    let parts = value.split('%');
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      let base = parseFloat(parts[0]);
      let percentage = parseFloat(parts[1]);
      // Calculate the percentage
      let result = (base * percentage) / 100;
      display.value = result.toString();
    } else {
      display.value = 'Error';
    }
  } else {
    try {
        let result = safeMathEvaluate(value);
        display.value = result.toString();
    } catch (e) {
      display.value = 'Error';
    }
  }
}
function del() {
    if (/[^0-9+\-*/.]/.test(display.value)) {
        // Clear the display if it contains invalid characters
        display.value = '';
    } else{
        display.value = display.value.slice(0,-1);// clear the last character
    }
}