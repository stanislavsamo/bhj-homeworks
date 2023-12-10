document.addEventListener("DOMContentLoaded", function() {
	const editor = document.getElementById("editor");

	const storedText = localStorage.getItem("editorText");
	if (storedText) {
		editor.value = storedText;
	}

	editor.addEventListener("input", function() {
		const currentText = editor.value;
		localStorage.setItem("editorText", currentText);
	});
});