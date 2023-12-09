document.addEventListener("DOMContentLoaded", function() {
	let taskInput = document.getElementById("task__input");
	let taskList = document.getElementById("tasks__list");
	let addTaskButton = document.getElementById("tasks__add");
	let form = document.getElementById("tasks__form");

	function createTaskElement(taskText) {
		let taskElement = document.createElement("div");
		taskElement.className = "task";

		let taskTitle = document.createElement("div");
		taskTitle.className = "task__title";
		taskTitle.textContent = taskText;

		let removeButton = document.createElement("a");
		removeButton.href = "#";
		removeButton.className = "task__remove";
		removeButton.textContent = "×";

		removeButton.addEventListener("click", function(event) {
			event.preventDefault();
			taskList.removeChild(taskElement);
		});

		taskElement.appendChild(taskTitle);
		taskElement.appendChild(removeButton);

		return taskElement;
	}

	function addTask() {
		let taskText = taskInput.value.trim();
		if (taskText !== "") {
			let taskElement = createTaskElement(taskText);
			taskList.appendChild(taskElement);
			taskInput.value = "";
		}
	}

	addTaskButton.addEventListener("click", function(event) {
		event.preventDefault();
		addTask();
	});

	form.addEventListener("keypress", function(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			addTask();
		}
	});
});