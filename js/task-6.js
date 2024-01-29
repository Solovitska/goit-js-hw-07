// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to create boxes based on the given amount
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  // Clear existing boxes
  boxesContainer.innerHTML = '';

  // Initial size of the box
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    // Increase size for the next box
    size += 10;
  }
}

// Function to destroy all boxes
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  // Clear all child elements
  boxesContainer.innerHTML = '';
}

// Event listener for the "Create" button
document.querySelector('[data-create]').addEventListener('click', function () {
  const input = document.querySelector('input');
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Event listener for the "Destroy" button
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);