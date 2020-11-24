// Dom Selectors
const input = document.querySelector('.todo-input');
// const inputs = document.querySelectorAll('input')
// const todo = document.querySelector('#todos .todo');
// todo.classList.toggle('done');
const notCompleted = document.querySelector('.notCompleted');
const completed = document.querySelectorAll('.completed');
const addButton = document.querySelector('.addButton');
const editButton = document.querySelector('.editButton');
const removeButton = document.querySelector('.removeButton');
// Event listeners
addButton.addEventListener('click', addItem);
// editButton.addEventListener('click', editItem);
// removeButton.addEventListener('click', removeItem);

function addItem(e) {
  e.preventDefault();
  console.log('You clicked me!!!!');
  // inputs[2].checked
  const item = document.createElement('div');
  item.classList.add('item');
  const check = document.createElement('INPUT');
  check.setAttribute('type', 'checkbox');
  const edit = document.createElement('button');
  edit.classList.add('editButton');
  edit.textContent = 'Edit';
  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.classList.add('removeButton');

  const paragraph = document.createElement('p');
  paragraph.innerText = input.value;
  item.appendChild(check);
  item.appendChild(paragraph);
  item.appendChild(edit);
  item.appendChild(del);
  notCompleted.appendChild(item);
}
