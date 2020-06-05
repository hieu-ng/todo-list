loadEvents();
// load every event in the page
function loadEvents() {
  document.querySelector('form')
    .addEventListener('submit', submit);
}
// subit data function
function submit(e) {
  e.preventDefault();
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
    `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard')
    .style.display = 'block';

  loadEvents();
  // load every event in the page
  function loadEvents() {
    document.querySelector('form')
      .addEventListener('submit', submit);
    // recently added
    document.getElementById('clear')
      .addEventListener('click', clearList);

  }

  function clearList(e) {
    // setting the ul innerHML to an empty string
    let ul = document.querySelector('ul')
      .innerHTML = '';
  }

  function tickTask(e) {
    const task = e.target.nextSibling;
    if (e.target.checked) {
      task.style.textDecoration = "line-through";
      task.style.color = "#ff0000";
    } else {
      task.style.textDecoration = "none";
      task.style.color = "#2f4f4f";
    }
  }
