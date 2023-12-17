const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const btn = document.querySelector('.btn');
const welcome = document.querySelector('.welcome');

const forms = () => {
	const xhr = new XMLHttpRequest();

	try {
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
		xhr.responseType = 'json';
		const formData = new FormData(form);
		xhr.send(formData);
	} catch (error) {
		console.error('Ошибка при отправке запроса:', error);
	}

	xhr.addEventListener('load', function() {
		if (xhr.status === 200 || xhr.status === 201) {
			const data = xhr.response;
			localStorage.setItem('user_id', data.user_id);

			if (data.success === false) {
				alert('Неверный логин/пароль');
				welcome.classList.remove('welcome_active');
			} else if (data.success === true) {
				welcome.textContent = `Добро пожаловать, пользователь #${data.user_id}`;
				welcome.classList.add('welcome_active');
			}
		} else {
			console.error('Ошибка при обработке ответа. Статус:', xhr.status);
		}
	});
}

const userGreetings = () => {
	const result = localStorage.getItem('user_id');
	if (result === null) {
		welcome.classList.remove('welcome_active');
	} else {
		welcome.textContent = `Добро пожаловать, пользователь #${result}`;
		welcome.classList.add('welcome_active');
	}
}

const btnForms = () => {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		forms();
	});
}

document.addEventListener('DOMContentLoaded', () => {
	userGreetings();
	const result = localStorage.getItem('user_id');
	if (result !== null) {
		signin.classList.remove('signin_active');
	}
});

btnForms();