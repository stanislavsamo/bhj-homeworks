function handleScroll() {
	const revealElements = document.querySelectorAll('.reveal');

	revealElements.forEach((revealElement) => {
		const revealRect = revealElement.getBoundingClientRect();
		const windowHeight = window.innerHeight;

		if (revealRect.top < windowHeight && revealRect.bottom >= 0) {
			revealElement.classList.add('reveal_active');
		} else {
			revealElement.classList.remove('reveal_active');
		}
	});
}

window.addEventListener('scroll', handleScroll);

handleScroll();