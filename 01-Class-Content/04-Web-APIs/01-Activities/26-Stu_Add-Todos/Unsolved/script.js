var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var todoText = document.querySelector("#todo-text");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  renderItems();
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var newTodo = todoText.value.trim();
  console.log(newTodo);
  todos.push(newTodo);
  renderTodos();
  todoText.value = "";
})

function renderItems() {
  todoList.innerHTML = "";
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}