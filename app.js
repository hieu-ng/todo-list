loadEvents();
// load every event in the page
function loadEvents() {
  document.querySelector('form')
    .addEventListener('submit', submit);
  document.getElementById('clear')
    .addEventListener('click', clearList);
  document.querySelector('ul')
    .addEventListener('click', deleteOrTick);

}
// subit data function
function submit(e) {
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if (input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML =
    `<input type="checkbox"><label>${task}</label><span class="delete">❌</span>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard')
    .style.display = 'block';
}

// clear the LIST
function clearList(e) {
  let ul = document.querySelector('ul')
    .innerHTML = '';
}

// deleteTick
function deleteOrTick(e) {
  if (e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// delete task
function deleteTask(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// tick a task
function tickTask(e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
    task.style.color = "#f76a8c";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#204051";
  }
}
