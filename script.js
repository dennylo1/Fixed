let balance = 1000;
let currentNumber = Math.floor(Math.random() * 100) + 1;
let soundEnabled = true;
const winSound = new Audio('win.mp3');
const loseSound = new Audio('lose.mp3');

document.getElementById('number').textContent = currentNumber;

function guess(direction) {
    const nextNumber = Math.floor(Math.random() * 100) + 1;
    const correct =
        (direction === 'higher' && nextNumber > currentNumber) ||
        (direction === 'lower' && nextNumber < currentNumber);

    if (correct) {
        balance += 100;
        if (soundEnabled) winSound.play();
    } else {
        balance -= 100;
        if (soundEnabled) loseSound.play();
    }

    currentNumber = nextNumber;
    document.getElementById('balance').textContent = balance;
    document.getElementById('number').textContent = currentNumber;
}

document.getElementById('toggle-sound').addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    document.getElementById('toggle-sound').textContent = `Sound: ${soundEnabled ? 'On' : 'Off'}`;
});