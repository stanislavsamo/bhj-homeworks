const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {

	const valueElement = dropdown.querySelector('.dropdown__value');
	const list = dropdown.querySelector('.dropdown__list');
	const links = dropdown.querySelectorAll('.dropdown__link');


	valueElement.addEventListener('click', () => {

		list.classList.toggle('dropdown__list_active');
	});

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			list.classList.remove('dropdown__list_active');

			valueElement.textContent = link.textContent;
		});
	});
});