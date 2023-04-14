// Listen for keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
  if (command === "start-timer") {
    startTimer();
  } else if (command === "stop-timer") {
    stopTimer();
  } else if (command === "pause-timer") {
    pauseTimer();
  }
});

// Listen for popup requests
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request === "get-timer-state") {
    sendResponse({ timerState: timerIntervalId !== null });
  }
});
