document.addEventListener('DOMContentLoaded', function() {
	const rotator = document.querySelector('.rotator');
	const rotatorCases = document.querySelectorAll('.rotator__case');

	let currentIndex = 0;

	function rotateText() {
		rotatorCases[currentIndex].classList.remove('rotator__case_active');

		currentIndex = (currentIndex + 1) % rotatorCases.length;

		rotatorCases[currentIndex].classList.add('rotator__case_active');
	}

	setInterval(rotateText, 1000);
});