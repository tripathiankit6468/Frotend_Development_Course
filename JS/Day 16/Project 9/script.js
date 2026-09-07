const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

const taskCount = document.getElementById("taskCount");


// Add task when button is clicked

addBtn.addEventListener("click", addTask);


// Add task when Enter is pressed

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Add task function

function addTask() {

    const taskValue = taskInput.value.trim();


    // Don't add empty task

    if (taskValue === "") {

        alert("Please enter a task!");

        return;
    }


    // Create list item

    const li = document.createElement("li");

    li.classList.add("task");


    // Create task text

    const taskText = document.createElement("span");

    taskText.classList.add("task-text");

    taskText.textContent = taskValue;


    // Create delete button

    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("delete-btn");

    deleteBtn.textContent = "Delete";


    // Mark task as completed

    taskText.addEventListener("click", function () {

        li.classList.toggle("completed");

    });


    // Delete task

    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateTaskCount();

    });


    // Add elements to li

    li.appendChild(taskText);

    li.appendChild(deleteBtn);


    // Add li to list

    taskList.appendChild(li);


    // Clear input

    taskInput.value = "";

    taskInput.focus();


    // Update count

    updateTaskCount();

}


// Update task count

function updateTaskCount() {

    const tasks = document.querySelectorAll(".task");

    taskCount.textContent = tasks.length;

}