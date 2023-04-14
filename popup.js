const timerDiv = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener("click", () => {
  startTimer();
});

stopButton.addEventListener("click", () => {
  stopTimer();
});

function updateTimerDisplay() {
  const minutes = Math.floor(timerInterval / 60);
  const seconds = timerInterval % 60;
  timerDiv.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

const studyTime = 25 * 60;
const breakTime = 10 * 60;
let timerMode = "study";
let timerInterval = null;

function startTimer() {
  timerInterval = setInterval(() => {
    timerInterval--;

    if (timerInterval === 0) {
      if (timerMode === "study") {
        timerMode = "break";
        timerInterval = breakTime;
      } else {
        timerMode = "study";
        timerInterval = studyTime;
      }
    }
    updateTimerDisplay();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;

  startButton.disabled = false;
  stopButton.disabled = true;
}

updateTimerDisplay();
