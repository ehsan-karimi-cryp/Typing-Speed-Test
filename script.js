const timerSection = document.querySelector(".numbers");

var timerNumbers = [0, 0, 0, 0];

function timerFunction() {
  var z = timerNumbers[0] + ":" + timerNumbers[1] + ":" + timerNumbers[2];
  timerSection.innerHTML = z;

  timerNumbers[3]++;

  timerNumbers[0] = Math.floor(timerNumbers[3] / 100 / 60);
  timerNumbers[1] = Math.floor(timerNumbers[3] / 100) - timerNumbers[0] * 60;
  timerNumbers[2] = Math.floor(
    timerNumbers[3] - timerNumbers[1] * 100 - timerNumbers[0] * 6000
  );
}

setInterval(timerFunction , 10);
