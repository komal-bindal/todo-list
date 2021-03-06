let add = document.getElementById("add");
let cleanup = document.getElementById("cleanup");
let sort = document.getElementById("sort");
let reset = document.getElementById("reset");
let inputElement = document.getElementById("input");
let list = document.getElementById("list");

const addHandleClick = () => {
  let val = inputElement.value;
  let newTask = document.createElement("li");
  newTask.innerText = val;
  newTask.classList.add("listItem");
  list.appendChild(newTask);
  inputElement.value = "";
  newTask.onclick = () => {
    console.log("clicked");
    newTask.classList.toggle("disabled");
  };
};

add.onclick = addHandleClick;

inputElement.onkeypress = (e) => {
  if (e.which == 13) {
    e.preventDefault();
    addHandleClick();
  }
};

reset.onclick = () => (inputElement.value = "");

cleanup.onclick = () => {
  let doneTasks = list.getElementsByClassName("disabled");
  while (doneTasks.length > 0) {
    doneTasks[0].remove();
  }
};

sort.onclick = () => {
  let doneTasks = list.getElementsByClassName("disabled");
  for (i = 0; i < doneTasks.length; i++) {
    list.append(list.getElementsByClassName("disabled")[0]);
  }
};
