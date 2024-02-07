const timerSection = document.querySelector(".numbers");
const typeText = document.querySelector(".type-text");

var timerNumbers = [0, 0, 0, 0];

var y2 = 5;

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
function timerStart() {

  if(y2 == 5) {
    setInterval(timerFunction, 10);
    y2 = y2 + 1;

  }
  
}

typeText.addEventListener("keypress", timerStart);
