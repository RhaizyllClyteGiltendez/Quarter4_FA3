let contacts = [];

function updateDisplay() {
  const display = document.getElementById("contactsDisplay");
  display.innerText = contacts.join(" ");
}

function addContact() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  if (contacts.length >= 7) {
    contacts.shift();   }

  contacts.push(name); 
  input.value = "";
  updateDisplay();
}

function removeContact() {
  if (contacts.length === 0) {
    alert("Contact list is already empty.");
    return;
  }

  contacts.pop(); 
  updateDisplay();
}
