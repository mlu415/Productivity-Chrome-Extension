const timerDiv = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const pauseButton = document.getElementById("pause-button");

startButton.addEventListener("click", () => {
  startTimer();
});

stopButton.addEventListener("click", () => {
  stopTimer();
});

pauseButton.addEventListener("click", () => {
  pauseTimer();
});

function updateTimerDisplay() {
  const minutes = Math.floor(timerValue / 60);
  const seconds = timerValue % 60;

  timerDiv.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (isTimerRunning) {
    startButton.style.display = "none";
    pauseButton.style.display = "block";
  } else {
    startButton.style.display = "block";
    pauseButton.style.display = "none";
  }
}

const studyTime = 25 * 60;
const breakTime = 10 * 60;
let timerMode = "study";
let timerInterval = null;
let timerValue = studyTime;

function startTimer() {
  if (timerInterval === null) {
    timerInterval = setInterval(() => {
      timerValue--;

      if (timerValue === 0) {
        if (timerMode === "study") {
          timerMode = "break";
          timerValue = breakTime;
        } else {
          timerMode = "study";
          timerValue = studyTime;
        }
      }
      updateTimerDisplay();
    }, 1000);

    isTimerRunning = true;
    startButton.disabled = true;
    pauseButton.disabled = false;
    stopButton.disabled = false;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerMode = "study";
  timerValue = studyTime;
  isTimerRunning = false;
  updateTimerDisplay();
  startButton.disabled = false;
  stopButton.disabled = true;
  pauseButton.disabled = true;
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  isTimerRunning = false;
  updateTimerDisplay();
  startButton.disabled = false;
  stopButton.disabled = false;
  pauseButton.disabled = true;
}

updateTimerDisplay();
