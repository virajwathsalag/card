const openBtn = document.getElementById('openBtn');
const card = document.getElementById('card');
const confettiContainer = document.getElementById('confetti-container');
const balloonContainer = document.createElement('div');
balloonContainer.id = 'balloon-container';
document.body.appendChild(balloonContainer);

// Function to create confetti elements
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random position for the confetti
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = getRandomColor();

        confettiContainer.appendChild(confetti);

        // Remove confetti after it completes animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Function to create balloon elements
function createBalloons() {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Random position and animation delay for each balloon
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 2 + 's';

        balloonContainer.appendChild(balloon);

        // Remove balloons after animation
        setTimeout(() => {
            balloon.remove();
        }, 7000);
    }
}

// Function to generate random colors for confetti
function getRandomColor() {
    const colors = ['#f0932b', '#eb4d4b', '#22a6b3', '#be2edd', '#6ab04c', '#f6e58d'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event listener to flip the card, trigger confetti, and balloons when the button is clicked
openBtn.addEventListener('click', () => {
    card.classList.add('flip');
    createConfetti();
    createBalloons(); // Trigger balloons floating up
});
