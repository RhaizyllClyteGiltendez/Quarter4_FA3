function generateShape() {
  const input = document.getElementById("numberInput").value;
  const outputDiv = document.getElementById("output");

  outputDiv.innerText = "";

  const number = parseInt(input);
  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }

  let output = `Number inputted: ${number}\n\n`;

  if (number % 2 === 1) {
    for (let i = number; i >= 1; i--) {
      output += (i + " ").repeat(number).trim() + "\n";
    }
  } else {
    for (let i = number; i >= 1; i--) {
      output += (i + " ").repeat(i).trim() + "\n";
    }
  }

  outputDiv.innerText = output;
}
