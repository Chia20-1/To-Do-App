const todos = JSON.parse(localStorage.getItem('todos')) || []

// Initialize  DOM variables
// Work on dynamic entry and printing of the data
// We're referring to our sample cases in index.html for the DOM
/*
    <div class="task-item completed">
            <input type="checkbox">
            <p>Dummy 1</p>
            <button class="prioritize-btn">Priortize</button>
            <button class="delete-btn">Delete</button>
    </div>
*/

function updateToDOM() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = "";

    todos.forEach((todo, index) => {

        // Checking condition to filter what data to display

        // If priority filter is selected,  array items with IsPriority = false will be skipped when running the loop. Thus, only priority items are displayed.
        if (filterPriority.checked && todo.isPriority === false) return;

        // If non-priority filter is selected,  array items with IsPriority = true will be skipped when running the loop. Thus, only non-priority items are displayed.
        if (filterNonPriority.checked && todo.isPriority === true) return;

        // If completed filter is selected, array items with isCompleted = false will be skipped. So, only those with isCompleted = true are displayed.
        if (filterCompleted.checked && todo.isCompleted === false) return;

        const todoItem = document.createElement('div');
        todoItem.classList.add('task-item');

        if (todo.isPriority) {
            todoItem.classList.add('priority');
        }

        if (todo.isCompleted) {
            todoItem.classList.add('completed');
        }

        todoItem.innerHTML = `
            <input type="checkbox" onchange="toggleTodo(${index})" ${todo.isCompleted ? "checked" : ""}>
            <p>${todo.title}</p>
            <button class="prioritize-btn" onclick="togglePriority(${index})">Priortize</button>
            <button class="delete-btn" onclick="removeTodo(${index})">Delete</button>
        `

        taskList.appendChild(todoItem)
    })

    // Save item to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const input = document.querySelector('.add-todo-form input');
    const value = input.value;

    if (value === "") {
        alert("Please enter a valid task!");
        return;
    }
    const newTodo = {
        title: value,
        isCompleted: false,
        isPriority: false,
    }

    todos.push(newTodo);
    updateToDOM();

    input.value = "";
}

function removeTodo(index) {
    todos.splice(index, 1);
    updateToDOM();
}

function toggleTodo(index) {
    todos[index].isCompleted = !todos[index].isCompleted;
    updateToDOM();
}

function togglePriority(index) {
    todos[index].isPriority = !todos[index].isPriority;
    updateToDOM();
}

// Prevent form refresh on submit
const form = document.querySelector(".add-todo-form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

// Implement filters. Initialize DOM variables & Create event listeners
const filterAll = document.querySelector("#filter-all");
const filterPriority = document.querySelector("#filter-priority");
const filterNonPriority = document.querySelector("#filter-non-priority");
const filterCompleted = document.querySelector("#filter-completed");

filterAll.addEventListener("change", () => { updateToDOM() });
filterPriority.addEventListener("change", () => { updateToDOM() });
filterNonPriority.addEventListener("change", () => { updateToDOM() });
filterCompleted.addEventListener("change", () => { updateToDOM() });


// Run the function when page is loaded
updateToDOM()