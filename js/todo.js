// const toDoForm = document.getElementById("todo_form");
const toDoForm = document.querySelector("#todo_form");
const toDoInput = document.querySelector("#todo_input");
const toDoList = document.querySelector("#todo_list");

let todos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(evt) {
  console.log(evt);
  const li = evt.target.parentElement;
  li.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "OK 😁";
  button.addEventListener("click", deleteToDo);
  span.innerText = newToDo.text;

  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(evt) {
  evt.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };

  paintToDo(newToDoObj);
  todos.push(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
