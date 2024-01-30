let secretNumber = 0;
let attempts = 0;
let lisRandomNumber = [];
let maxNumber = 5;

function assignTextToElement(element, text) {
  let htmlElement = document.querySelector(element);
  htmlElement.innerHTML = text;
}

function clearInput() {
  document.querySelector("#userValue").value = "";
}

function initialConditions() {
  assignTextToElement("h1", "The secret number game");
  assignTextToElement("p", `Choose a number from 1 to ${maxNumber}`);
  secretNumber = generateRandomNumber();
  attempts = 1;
}

function verifyAttempt() {
  let userNumber = parseInt(document.getElementById("userValue").value);

  if (userNumber === secretNumber) {
    assignTextToElement(
      "p",
      `you guessed the number in ${attempts} ${
        attempts === 1 ? "attempt" : "attempts"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (userNumber > secretNumber) {
      assignTextToElement("p", "the secret number is lower");
    } else {
      assignTextToElement("p", "The secret number is higher");
    }
    attempts++;
    clearInput();
  }
}

function restartGame() {
  clearInput();

  initialConditions();

  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

function generateRandomNumber() {
  generatedNumber = Math.floor(Math.random() * maxNumber + 1);

  if (lisRandomNumber.length == maxNumber) {
    assignTextToElement("p", "All posible numbers have already been drawn");
  } else {
    if (lisRandomNumber.includes(generatedNumber)) {
      return generateRandomNumber();
    } else {
      lisRandomNumber.push(generatedNumber);
      return generatedNumber;
    }
  }
}

initialConditions();
