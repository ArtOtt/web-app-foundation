const btn = document.querySelector("button");
const body = document.querySelector("body");
const list = document.querySelector("#list");
const input = document.querySelector("#input");
// Radio buttons
const open = document.querySelector("#open");
const all = document.querySelector("#all");
const done = document.querySelector("#done");

const toDo = {
  todos: [
    { description: "First TO-Do", done: true },
    { description: "Second TO-Do", done: false },
  ],
};

function render() {
  // Clean the ul
  list.innerHTML = "";

  loadFromStorage();

  // filter for done, open, all
  let filteredTodos;
  if (done.checked) {
    // check if done
    filteredTodos = toDo.todos.filter((todo) => todo.done);
  } else if (open.checked) {
    // check is
    filteredTodos = toDo.todos.filter((todo) => !todo.done);
  } else {
    // if all selected
    filteredTodos = toDo.todos;
  }

  // Put the todos from filteredTodos in DOM
  filteredTodos.forEach((todo) => {
    // Create an Li Element
    const liElement = document.createElement("li");

    // To find out which checkbox clicked
    liElement.toDoObject = todo;

    // Create a checkbox for Li Element
    const checkbox = document.createElement("input");
    // Add a type Attribute to checkbox
    checkbox.type = "checkbox";
    // Add to checked Attribute a value from toDo.todos.done
    checkbox.checked = todo.done;
    // Add the checkbox to Li Element/liElement
    liElement.appendChild(checkbox);

    // Create an inner Text for liElement
    const liText = document.createTextNode(todo.description);
    // Join liText with liElement
    liElement.append(liText);

    // Add liElement to list Element
    list.appendChild(liElement);
  });
}

render();

// Add new Todo
btn.addEventListener("click", function () {
  // Space be trimmed
  const newToDoText = input.value.trim();
  // Checkin empty space
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

// Check if checkbox is checked
list.addEventListener("change", (e) => {
  const checkbox = e.target;
  const liElement = checkbox.parentElement;
  const todo = liElement.toDoObject;
  todo.done = checkbox.checked;

  localStorage.setItem("toDoItem", JSON.stringify(toDo));
});

function loadFromStorage() {
  // load from storage
  const storedToDo = localStorage.getItem("toDoItem");

  if (storedToDo) {
    // check if !null
    const readyFromStorage = JSON.parse(storedToDo);
    // Add to toDo
    toDo.todos = readyFromStorage.todos;
  }
}

//Event-Listener for radio button
open.addEventListener("change", render);
all.addEventListener("change", render);
done.addEventListener("change", render);
