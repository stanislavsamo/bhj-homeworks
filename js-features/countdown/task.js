const timerElement = document.getElementById("timer");

const initialSeconds = parseInt(timerElement.textContent);

let currentSeconds = initialSeconds;

function updateTimer() {
	if (currentSeconds > 0) {
		currentSeconds -= 1;
		timerElement.textContent = currentSeconds;
	} else {
		clearInterval(interval);
		alert("Вы победили в конкурсе!");
	}
}

updateTimer();

const interval = setInterval(updateTimer, 1000);