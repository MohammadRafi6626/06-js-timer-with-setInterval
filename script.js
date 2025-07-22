// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');
const successMessage = document.querySelector('#successMessage');

// Initialize the timer value
let timerValue = 10;
// Variable to track if countdown is running
let countdownActive = false;
// Variable to track if confetti has already been triggered
let confettiTriggered = false;

// Function to start the countdown
function startCountdown() {
    // Reset timer and counter values for a fresh start
    timerValue = 10;
    counterValue = 0;
    timerDisplay.textContent = timerValue;
    counterDisplay.textContent = counterValue;
    
    // Hide success message
    successMessage.style.display = 'none';
    
    // Set countdown as active
    countdownActive = true;
    // Reset confetti trigger status
    confettiTriggered = false;
    
    const countdownInterval = setInterval(function() {
        // Decrement the timer value
        timerValue--;
        // Update the timer display
        timerDisplay.textContent = timerValue;

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '0'; // Ensure the display shows 0
            countdownActive = false; // Mark countdown as inactive
        }
    }, 1000);
}

// Initialize the counter value
let counterValue = 0;

// Function to increase the counter
function increaseCounter() {
    // Increment the counter value
    counterValue++;
    // Update the counter display
    counterDisplay.textContent = counterValue;
    
    // Check if confetti should be triggered
    checkForConfetti();
}

// Function to check if confetti should be triggered
function checkForConfetti() {
    // Check if countdown is active, counter is more than 10, timer is still running, and confetti hasn't been triggered yet
    if (countdownActive && counterValue > 10 && timerValue > 0 && !confettiTriggered) {
        // Trigger confetti animation
        triggerConfetti();
        // Mark confetti as triggered to prevent multiple triggers
        confettiTriggered = true;
    }
}

// Function to trigger confetti animation
function triggerConfetti() {
    // Show success message
    successMessage.style.display = 'block';
    
    // Create a colorful confetti burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Create additional confetti bursts for a more exciting effect
    setTimeout(function() {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
    }, 250);
    
    setTimeout(function() {
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 400);
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
