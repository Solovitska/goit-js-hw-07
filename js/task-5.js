function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function changeBackgroundColor() {
  const body = document.body;
  const colorSpan = document.querySelector('.color');

  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

  
  const luminance = calculateLuminance(randomColor);
  colorSpan.style.color = luminance > 0.5 ? 'black' : 'white';
}

function calculateLuminance(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16) / 255;
  const g = parseInt(hexColor.slice(3, 5), 16) / 255;
  const b = parseInt(hexColor.slice(5, 7), 16) / 255;

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', changeBackgroundColor);