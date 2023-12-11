document.addEventListener("DOMContentLoaded", function() {
	const signinForm = document.getElementById("signin__form");
	const signinBtn = document.getElementById("signin__btn");
	const welcomeBlock = document.getElementById("welcome");
	const userIdSpan = document.getElementById("user_id");

	signinBtn.addEventListener("click", function(event) {
		event.preventDefault();

		const formData = new FormData(signinForm);

		const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					const response = JSON.parse(xhr.responseText);

					if (response.success) {
						localStorage.setItem("user_id", response.user_id);

						welcomeBlock.classList.add("welcome_active");
						userIdSpan.textContent = response.user_id;
					} else {
						alert("Неверный логин/пароль");
					}
				} else {
					console.error("Ошибка при отправке запроса");
				}
			}
		};

		xhr.send(formData);
	});

	const storedUserId = localStorage.getItem("user_id");
	if (storedUserId) {
		welcomeBlock.classList.add("welcome_active");
		userIdSpan.textContent = storedUserId;
	}
});