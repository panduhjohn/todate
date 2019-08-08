function getCurrentDateAndTime() {
  return new Date().toLocaleString();
}

let todos = [
  [
    `Be able to mark todos "done".`,
    false,
    getCurrentDateAndTime(),
  ],
  [
    `Allow user interaction through the DOM`,
    false,
    getCurrentDateAndTime(),
  ],
  [
    `Add dates to todos.`,
    false,
    getCurrentDateAndTime(),
  ],
]
const addButton = document.querySelector(`.add-todo`);
addButton.onclick = addItem;

function printTodo(value) {
  const li = document.createElement('li');
  const ol = document.querySelector('.todo-list');
  const paraTodo = document.createElement('p');
  const paraDate = document.createElement('p');
  paraTodo.innerText = value;
  paraDate.innerText = todos[todos.length - 1];
  ol.appendChild(li);
  const paragraph = document.querySelector(`li:nth-last-child(1)`);
  paragraph.appendChild(paraTodo);
  paragraph.appendChild(paraDate);
}

function addItem() {
  const userInput = document.querySelector(`.todo-input`).value;
  addToArray(userInput);
  printTodo(userInput);
}
function addToArray(str) {
  todos.push([str, false, getCurrentDateAndTime()]);

  // push(): Add items to the end of an array
  // shift(): Remove an item from the beginning of an array
  // pop(): Remove an item from the end of an array
  // unshift(): Add items to the beginning of an array
}





// //*********** HOW .appendChild() works ***************
// // const ol = document.querySelector("#summaryOL");
//   // const li = document.createElement('li');
//   // const text = document.createTextNode(txt);
//   // li.appendChild(text);
//   // ol.appendChild(li);
// //   ^ ==========    ^== this (li) goes into the ol
