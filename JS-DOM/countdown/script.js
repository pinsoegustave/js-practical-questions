const timeInput = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timerDisplay');

let countdown;

function startCountdown() {
    clearInterval(countdown);
    let time = parseInt(timeInput.value);
    if (isNaN(time) || time <= 0) {
        alert('Please enter a valid positive number for the countdown.');
        return;
    }
    displayTime(time);
    countdown = setInterval(() => {
        time--;
        displayTime(time);

        if (time <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Time is up!';
        }
    }, 1000);
}

function displayTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

startButton.addEventListener('click', startCountdown);