const form = document.getElementById('add-todo');
form.addEventListener('submit', onSubmit);

const todoList = document.querySelector('#render-todos');
const todoText = document.querySelector('[name="todo-text"]');
function onSubmit(event) {
  event.preventDefault();
  
  if (todoText.value === '') {
    todoText.style.border = '1px solid red';
    return;
  }

  // add new tag to list
  addTaskToHTML(todoText.value);
  addTaskObj(todoText.value);
  todoText.value = '';
}

/* ======================== */

const tasks = [];
function initTasks() {
  const string = localStorage.getItem('tasks');

  if (string) {
    const taskArr = JSON.parse(string);
    tasks.push(...taskArr);
  }

  for(const task of tasks) {
    addTaskToHTML(task.text, task.done);
  }
}
initTasks();
function addTaskObj(value) {
  const newTask = { text: value, done: false, createdAt: Date.now(), deleted: false };
  tasks.push(newTask);
  writeToStorage();
}
function changeTask(index, data = {}) {
  const task = tasks[index];

  /* new */
  const newTask = { ...task, ...data };
  tasks[index] = newTask;

  /* short */
  // Object.assign(task, data);
  writeToStorage();
}
function writeToStorage() {
  const string = JSON.stringify(tasks);
  localStorage.setItem('tasks', string);
}


/* ======================== */
function addTaskToHTML(text, checked = false) {
  const task = document.createElement('li');
  const id = todoList.children.length;
  task.dataset.id = id;

  /* ======================== */

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = checked;
  checkbox.addEventListener('change',
  (event) => {
    const checkbox = event.target;
    const done = checkbox.checked;

    changeTask(id, { done: done });
  });
  task.append(checkbox);

  /* ======================== */

  task.append(text);

  /* ======================== */
  const delBtn = document.createElement('button');
  delBtn.append('x');
  delBtn.addEventListener('click', (event) => {
    changeTask(id, { deleted: true });
    event.target.parentElement.remove();
  });
  task.append(delBtn);
  /* ======================== */

  todoList.append(task);
}
