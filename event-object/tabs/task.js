const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const tabIndex = Array.from(tabs).indexOf(tab);

		tabContents.forEach((content) => {
			content.classList.remove('tab__content_active');
		});

		tabContents[tabIndex].classList.add('tab__content_active');

		tabs.forEach((t) => {
			t.classList.remove('tab_active');
		});

		tab.classList.add('tab_active');
	});
});
