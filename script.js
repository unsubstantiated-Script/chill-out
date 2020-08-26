const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerHTML = "Inhale...";
    container.className = 'container grow'
    setTimeout(() => {
        text.innerHTML = "Hold it...";
        setTimeout(() => {
            text.innerHTML = "Release! <br> Now go drink coffee";
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breathAnimation, totalTime);