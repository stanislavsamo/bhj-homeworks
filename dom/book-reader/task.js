document.addEventListener('DOMContentLoaded', function() {
	const controlFontSizes = document.getElementsByClassName('font-size');

	for (let i = 0; i < controlFontSizes.length; i++) {
		controlFontSizes[i].addEventListener('click', function(event) {
			event.preventDefault();

			for (let j = 0; j < controlFontSizes.length; j++) {
				controlFontSizes[j].classList.remove('font-size_active');
			}

			this.classList.add('font-size_active');

			const newSize = this.getAttribute('data-size');
			const bookContent = document.getElementById('book');

			bookContent.classList.remove('book_fs-small', 'book_fs-big');

			if (newSize === 'small') {
				bookContent.classList.add('book_fs-small');
			} else if (newSize === 'big') {
				bookContent.classList.add('book_fs-big');
			}
		});
	}
});  