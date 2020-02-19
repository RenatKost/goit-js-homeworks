const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"');
const stopBtn = document.querySelector('button[data-action="stop"');

let timerId = null;
let isActive = false;

const handleStartRandomizer = () => {
    if (isActive) {
        return;
    }
    isActive = true;

    timerId = setInterval(() => {
        body.style.backgroundColor =
            colors[randomIntegerFromInterval(1, 5)];
    }, 1000);
};
const handleStopRandomizer = () => {
    isActive = false;
    body.style.backgroundColor = colors[0];

    clearInterval(timerId);
};

startBtn.addEventListener("click", handleStartRandomizer);
stopBtn.addEventListener("click", handleStopRandomizer);