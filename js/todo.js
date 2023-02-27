const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove()
}

function paintTodo(newToDo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newToDo
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
    paintTodo(newToDo)
    toDos.push(newToDo)
    saveToDos();
    console.log("todos: ", toDos)
}
todoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(){
    console.log("hello")
}

const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos)
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    parsedToDos.forEach(sayHello)
}