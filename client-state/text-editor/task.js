document.addEventListener("DOMContentLoaded", function() {
	const editor = document.getElementById('editor');

	editor.addEventListener('input', () => {
		localStorage.setItem('text', editor.value);
	});

	editor.value = localStorage.getItem('text');

});