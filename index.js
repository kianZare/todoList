// selectors:
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");

//  Event Listeners :
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener('click', checkRemove);


// Functions :

function addTodo (e) {
    e.preventDefault();
    console.log(e)

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = `
    <li>${todoInput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`;
    todoDiv.innerHTML = newTodo;
    // append to todolist:
    todoList.appendChild(todoDiv);
    todoInput.value = "";
};

function checkRemove (e) {
    console.log(e)
}




