// Dom Selectors
const input = document.querySelector('.todo-input');
const notCompleted = document.querySelector('.notCompleted')
const completed = document.querySelectorAll('.completed')
const addButton = document.querySelector('.addButton');
const editButton = document.querySelector('.editButton')
const removeButton = document.querySelector('.removeButton')
// Event listeners
addButton.addEventListener('click', addItem);
// editButton.addEventListener('click', editItem);
// removeButton.addEventListener('click', removeItem);

function addItem(e) {
  e.preventDefault();
  console.log("You clicked me!!!!")
  const item = document.createElement("div");
  item.classList.add("item");
  const paragraph = document.createElement('p')
  paragraph.innerText = input.value;
  item.appendChild(paragraph);
  notCompleted.appendChild(item)
} 