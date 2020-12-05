var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    var btn = document.createElement("button");
    li.textContent = todo;
    li.setAttribute("data-index", i);
    todoList.appendChild(li);
    btn.textContent = "Completo"
    li.appendChild(btn);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

document.addEventListener("click", removeTodo);

function removeTodo(event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    var index = event.target.parentElement.getAttribute("data-index");
    console.log("data-index: ", index);
    todos.splice(index, 1);
    renderTodos();
  }

}