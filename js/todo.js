const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove()
    console.log(li)
}

function paintTodo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id;
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button")
    button.innerText = " ❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button)
    todoList.appendChild(li)

}

function handleToDoSubmit(e){
    e.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value= "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos();
    console.log("todos: ", toDos)
}
todoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos)
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
} 