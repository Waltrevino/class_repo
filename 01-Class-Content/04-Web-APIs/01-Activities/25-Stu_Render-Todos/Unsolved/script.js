var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
todoList.innerHTML = "";
todoCountSpan.textContent = todos.length;
for (var i = 0; i < todos.length; i++) {
  var listItem = document.createElement("li");
  listItem.setAttribute("id", i);
  listItem.textContent = todos[i];
  todoList.append(listItem);
}