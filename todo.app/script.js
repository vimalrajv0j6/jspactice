var inputList = document.querySelector(".addtask");
var input = document.getElementById("input");
var addBtn = document.getElementById("btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todos.forEach((task) => createTodo(task));

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value.trim() === "") return;
  const task = input.value.trim();
  createTodo(task);
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
});

function createTodo(task) {
  const list = document.createElement("li");
  list.classList.add("addlist");
  list.textContent = task;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("delete");

  del.addEventListener("click", () => {
    list.remove();
    const index = todos.indexOf(task);
    if (index > -1) {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });

  list.appendChild(del);
  inputList.appendChild(list);
}
