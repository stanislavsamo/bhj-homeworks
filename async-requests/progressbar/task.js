document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("form");
	const progress = document.getElementById("progress");

	form.addEventListener("submit", function(event) {
		event.preventDefault();

		const formData = new FormData(form);
		const xhr = new XMLHttpRequest();

		xhr.open("POST", form.action, true);

		xhr.upload.onprogress = function(e) {
			if (e.lengthComputable) {
				const percentComplete = (e.loaded / e.total) * 100;
				progress.value = percentComplete;
			}
		};

		xhr.onload = function() {
			if (xhr.status === 201 || xhr.status === 200) {
				console.log("Файл успешно загружен!");
			} else {
				console.error("Ошибка при загрузке файла. Код статуса:", xhr.status);
			}
		};

		xhr.onerror = function() {
			console.error("Произошла ошибка при выполнении запроса.");
		};

		xhr.send(formData);
	});
});