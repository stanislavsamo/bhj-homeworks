const cookieImage = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
let clickCount = 0;
let growing = true;

cookieImage.onclick = function() {
	clickCount++;
	counterElement.textContent = clickCount;

	if (growing) {
		cookieImage.style.width = '220px';
	} else {
		cookieImage.style.width = '200px';
	}

	growing = !growing;
}