// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.innerHTML = `
        <input type="checkbox" class="complete-checkbox">
        <span class="task-text">${taskText}</span>
        <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(listItem);

    taskInput.value = "";
}

// Function to delete a task
function deleteTask(deleteButton) {
    const listItem = deleteButton.parentElement;
    const taskList = document.getElementById("task-list");
    taskList.removeChild(listItem);
}

// Function to toggle task completion
function toggleComplete(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}

// Function to toggle dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const app = document.getElementById("app");
    app.classList.toggle("dark-mode-app");

    // Toggle text color based on dark mode
    const taskTexts = document.querySelectorAll(".task-text");
    for (const taskText of taskTexts) {
        taskText.classList.toggle("dark-mode-text");
    }
}

// Event listener for the "Add Task" button
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);

// Event listener for the task list to handle deletes and completion toggles
const taskList = document.getElementById("task-list");
taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
        deleteTask(e.target);
    }
    if (e.target.classList.contains("complete-checkbox")) {
        toggleComplete(e.target);
    }
});
