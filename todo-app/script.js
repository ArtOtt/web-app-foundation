const btn = document.querySelector("button");
const body = document.querySelector("body");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

const toDo = {
  todos: [
    { description: "First TO-Do", done: true },
    { description: "Second TO-Do", done: false },
  ],
};

function render() {
  // cleaning the ul
  list.innerHTML = "";

  loadFromStorg();
  //put the todos from toDo in DOM
  toDo.todos.forEach((todo) => {
    // create an Li Element
    const liElement = document.createElement("li");

    // to find out whitch checkbox clicked
    liElement.toDoObject = todo;

    // create a checkbox for Li Element
    const checkbox = document.createElement("input");
    //add a type Attribute to checkbox
    checkbox.type = "checkbox";
    //add  to checked Attribute a value from toDo.todos.done
    checkbox.checked = todo.done;
    //add the checkbox to Li Element/liElement
    liElement.appendChild(checkbox);

    //create an inner Text for liElement
    const liText = document.createTextNode(todo.description);
    //join liText with liElement
    liElement.append(liText);

    //add liElement to list Element
    list.appendChild(liElement);

    // load from local storage
  });
}

render();
// add new Todo
btn.addEventListener("click", function () {
  //space be trimmed
  const newToDoText = input.value.trim();
  //checkin empty space
  if (newToDoText != "") {
    const newTodo = {
      description: newToDoText,
      done: false,
      id: Date.now() * Math.random(),
    };

    let isDuplicate = false;
    for (let i = 0; i < toDo.todos.length; i++) {
      if (toDo.todos[i].description === newTodo.description) {
        isDuplicate = true;
        break;
      }
    }
    // Check for duplicate descriptions
    if (!isDuplicate) {
      // Add to toDo
      toDo.todos.push(newTodo);

      // Convert toDo to JSON
      const jsn = JSON.stringify(toDo);

      // Save to Local storage
      localStorage.setItem("toDoItem", jsn);

      // Render the updated list
      render();
    }
  }
});

//check is checkbox checked

list.addEventListener("change", (e) => {
  const checkbox = e.target;
  const liElement = checkbox.parentElement;
  const todo = liElement.toDoObject;
  todo.done = checkbox.checked;

  localStorage.setItem("toDoItem", JSON.stringify(toDo));
});

function loadFromStorg() {
  const storedToDo = localStorage.getItem("toDoItem");

  const readyFromStorg = JSON.parse(storedToDo);

  if (storedToDo) {
    // add to toDo
    toDo.todos = readyFromStorg.todos;
  }
}
