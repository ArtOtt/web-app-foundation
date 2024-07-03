const btn = document.querySelector("button");
const body = document.querySelector("body");

const toDo = {
  todos: [
    { description: "First TO-Do", done: true },
    { description: "Second TO-Do", done: false },
  ],
};

function render() {
  const list = document.querySelector("#list");

  // cleaning the ul
  list.innerHTML = "";

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
  });
}

render();
