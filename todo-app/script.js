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
    // add to toDo
    toDo.todos.push(newTodo);
    // convert toDo in JSON
    const jsn = JSON.stringify(toDo);
    //Local storage
    localStorage.setItem("toDoItem", jsn);
    //console.log(toDo);
    render();
  }
});

function loadFromStorg() {
  const storedToDo = localStorage.getItem("toDoItem");

  const solo = JSON.parse(storedToDo);

  if (storedToDo) {
    // add to toDo
    toDo.todos = solo.todos;
  }
}
