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
  display.value = '';
}
function calculate() {
  let value = display.value;
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
      display.value = eval(value);
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
        display.value = display.value.slice(0,-1);
    }
}