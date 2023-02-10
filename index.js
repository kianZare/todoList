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
    // console.log(e)

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
    const classList = [...e.target.classList];
    const item = e.target;
    console.log(item.parentElement.parentElement)
    
    if(classList[1] === "fa-check-square") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed")
    } else if (classList [1] === "fa-trash-alt"){
        const todo = item.parentElement.parentElement;
        todo.remove();
    }
};





