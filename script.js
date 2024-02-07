const timerSection = document.querySelector(".numbers");
const typeText = document.querySelector(".type-text");
const textShouldBeTyped = document.querySelector(
  ".text-that-should-be-typed"
).innerHTML;
const textButton = document.querySelector(".restart-button");

var timerNumbers = [0, 0, 0, 0];

var y2 = 5;
var y3;

function y(y1) {
  if (y1 <= 9) {
    y1 = "0" + y1;
  }

  return y1;
}

function timerFunction() {
  var z =
    y(timerNumbers[0]) + ":" + y(timerNumbers[1]) + ":" + y(timerNumbers[2]);
  timerSection.innerHTML = z;

  timerNumbers[3]++;

  timerNumbers[0] = Math.floor(timerNumbers[3] / 100 / 60);
  timerNumbers[1] = Math.floor(timerNumbers[3] / 100) - timerNumbers[0] * 60;
  timerNumbers[2] = Math.floor(
    timerNumbers[3] - timerNumbers[1] * 100 - timerNumbers[0] * 6000
  );
}

function textTyped() {
  let userText = typeText.value;
  let textShoudBeTypedAndUserText = textShouldBeTyped.substring(
    0,
    userText.length
  );
  if (userText == textShouldBeTyped) {
    typeText.style.backgroundColor = "#96e4bd";
    clearInterval(y3);
  } else {
    if (userText == textShoudBeTypedAndUserText) {
      typeText.style.backgroundColor = "#bd7db4";
    } else {
      typeText.style.backgroundColor = "#ff4747";
    }
  }
}
function buttonFunction() {
  clearInterval(y3);
  y3 = null;
  timerNumbers = [0, 0, 0, 0];
  y2 = 5;
  typeText.value = "";
  timerSection.innerHTML = "00:00:00";
  typeText.style.backgroundColor = "#c6e8e9";
}

function timerStart() {
  if (y2 == 5) {
    y3 = setInterval(timerFunction, 10);
    y2 = y2 + 1;
  }
}

typeText.addEventListener("keypress", timerStart);
typeText.addEventListener("keyup", textTyped);
textButton.addEventListener("click", buttonFunction);
