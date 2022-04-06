const form = document.getElementById('add-todo');
const todoList = document.querySelector('#render-todos');
const todoText = document.querySelector('[name="todo-text"]');

// событие на отправку формы
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  // не обновлять страницу
  event.preventDefault();
  
  // проверить введенные данные - в данном случае одно поле
  if (todoText.value === '') {
    // пометить невалидное поле ввода
    todoText.style.border = '1px solid red';
    return;
  }

  // изменить состояние в js - добавить новую задачу в массив
  addTaskObj(todoText.value);
  // изменить состояние в html - отобразить новую задачу в списке
  addTaskToHTML(todoText.value);

  // сбросить форму
  todoText.value = '';
}

/* ======================== */

// массив обьектов задач
const tasks = [];
// отрисовать старые задачи после перезагрузки страницы
function initTasks() {
  // достать задачи из хранилища
  const string = localStorage.getItem('tasks');

  if (string) {
    // преобразовать в обьекты
    const taskArr = JSON.parse(string);
    tasks.push(...taskArr);
  }

  // вывести все задачи на страницу
  for(const task of tasks) {
    addTaskToHTML(task.text, task.done);
  }
}
initTasks();
// добавить новую задачу в массив
function addTaskObj(value) {
  // создать обект задачи
  const newTask = { text: value, done: false, createdAt: Date.now(), deleted: false };
  // в конец массива
  tasks.push(newTask);
  // записать все задачи в хранилище
  writeToStorage();
}
// обновить данные о задаче в массиве - отметить выполненение / мягкое удаление
function changeTask(index, data = {}) {
  const task = tasks[index];

  /* new */
  const newTask = { ...task, ...data };
  tasks[index] = newTask;

  /* short */
  // Object.assign(task, data);

  // записать все задачи в хранилище
  writeToStorage();
}
// записать все задачи в хранилище (защита от потери данных при перезагрузке страницы)
function writeToStorage() {
  // перевести массив в строку
  const string = JSON.stringify(tasks);
  // записать
  localStorage.setItem('tasks', string);
}


/* ======================== */
// отрисовать одну задачу в html
function addTaskToHTML(text, checked = false) {
  // создать li элем
  const task = document.createElement('li');
  const id = todoList.children.length;
  task.dataset.id = id;

  /* ======================== */

  // добавить внутрь li галку выполнения
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

  // добавить внутрь li текст задачи
  task.append(text);

  /* ======================== */

  // добавить внутрь li кнопку удаления
  const delBtn = document.createElement('button');
  delBtn.append('x');
  delBtn.addEventListener('click', (event) => {
    changeTask(id, { deleted: true });
    event.target.parentElement.remove();
  });
  task.append(delBtn);

  /* ======================== */

  // добавить li в html
  todoList.append(task);
}
