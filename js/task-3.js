const nameInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.target.value.trim();
  output.textContent = trimmedValue !== "" ? trimmedValue : "Анонім";
});