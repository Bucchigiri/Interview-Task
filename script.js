// Creating 3 new variables for functionality
const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');

// Function to add a new task
function addTask() {
  const newTaskValue = newTaskInput.value;
  if (newTaskValue) {
    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = newTaskValue;

    // Add a checkbox to mark task completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    listItem.appendChild(checkbox);

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    // Toggle strikethrough on checkbox change
    checkbox.addEventListener('change', () => {
      listItem.classList.toggle('strikethrough', checkbox.checked);
    });

    // Toggle delete list on click
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = '';
  }
}

// Add event listener to the button
addTaskButton.addEventListener('click', addTask);
