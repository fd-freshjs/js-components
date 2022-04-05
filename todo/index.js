const form = document.getElementById('add-todo');
form.addEventListener('submit', onSubmit);

const todoText = document.querySelector('[name="todo-text"]');

function onSubmit(event) {
  event.preventDefault();
  
  if (todoText.value === '') {
    todoText.style.border = '1px solid red';
    return;
  }

  // add new tag to list
  addTask(todoText.value);
  todoText.value = '';
}

const todoList = document.querySelector('#render-todos');
function addTask(value) {
  const task = document.createElement('li');
  task.textContent = value;
  todoList.append(task);
}
