A simple todo list app:

<li>Add a new todo: Users can add a new todo.</li>

<li>Remove a todo: Users can remove a todo.</li>

<li>Mark a todo as completed/incomplete: Users can toggle a todo's completed status.</li>

<li>Mark a todo as priority/non-priority: Users can toggle a todo's priority status.</li>


<li>Filter todos: Users can filter the todos by selecting their status (all, completed, non-completed, priority, non-priority). For example, if the user selects "completed", only the completed todos will be shown.</li>

<li>Save todos (Optional): The app saves the todos to localStorage. This will allow the todos to persist even after the user refreshes the page.</li>

<li>Validation: Users are not allowed to add an empty todo. If the user tries to submit an empty todo, an alert message should be displayed.</li>

<br>

Javascript part:
1. Construct the array of object that stores the intended data. We know that it's a checkbox for completion and priority. Those two become Boolean.
2. Functions: Add, Remove, Toggle the 2 Boolean variables: Completion and priority.
3. Add todos item and remove todos item functions, we're going to target the item through array.
4. To toggle boolean attribute, we use negate operator ! inside the toggle function. It was update the data to the opposite of existing state(true, false).
5. Connect the Object in JavaScript and update it to the DOM
6. As the sub-functions setup above, here we work on the function that update DOM.
7. Intialize variable: the [task list div].
8. For each of item in the array (which is each object), input them accordingly with DOM. Hence, we're using a loop.
9. When the task item is attributed with Priority, Non-priority, Completed, we add the class accordingly.
10. Append each ( object / todoItem), into the [task list div].
11. We add event listeners with HTML attributes (checkbox = onchange; button = onclick), when event fire, it reupdates the whole thing and print the data out again.
12. Let's implement filter feature.
13. Whenever we update the DOM through the updateToDom function, we check if the radio buttons are checked (Priority, Non-priority, Completed).
14. We set conditions. For example, if it's priority checked, items that with isPriority = false will not display. Thus, we use "return" in the conditional statement to skip it.
15. Apply the same logic to Non-Priority and Completed.
16. Save data into local storage which will be setItem. Stringify the object.
17. Store it in the initialisation of variable (todos), parse the string back into object. 
18. Add on an || operator such that when parsing in the data is null, which means no data in local storage, initialise it with empty array.