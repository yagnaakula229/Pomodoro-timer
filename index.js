// Get the buttons and timer element
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

// Timer variables
let timeLeft = 25 * 60; // 25 minutes in seconds
let timerInterval = null;

// Function to format and display time
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Start timer
function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
      timeLeft = 25 * 60; // Reset time for a new session
      updateTimer();
    }
  }, 1000);
}

// Stop timer
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Reset timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60; // Reset to 25 minutes
  updateTimer();
}

// Attach event listeners
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

// Initialize the timer display
updateTimer();
