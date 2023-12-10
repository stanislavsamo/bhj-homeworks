document.addEventListener("DOMContentLoaded", function() {
	const taskInput = document.getElementById("task__input");
	const taskList = document.getElementById("tasks__list");
	const addTaskButton = document.getElementById("tasks__add");
	const form = document.getElementById("tasks__form");

	function createTaskElement(taskText) {
		return `
		<div class="task">
		  <div class="task__title">${taskText}</div>
		  <a href="#" class="task__remove">&times;</a>
		</div>
	  `;
	}

	function addTask() {
		const taskText = taskInput.value.trim();
		if (taskText !== "") {
			taskList.insertAdjacentHTML("beforeend", createTaskElement(taskText));
			taskInput.value = "";
		}
	}

	addTaskButton.addEventListener("click", function(event) {
		event.preventDefault();
		addTask();
	});

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		addTask();
	});

	taskList.addEventListener("click", function(event) {
		if (event.target.classList.contains("task__remove")) {
			event.preventDefault();
			const taskElement = event.target.closest(".task");
			taskList.removeChild(taskElement);
		}
	});
});