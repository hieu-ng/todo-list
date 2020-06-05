 loadEvents();
 // load every event in the page
 function loadEvents() {
  document.querySelector('form')
    .addEventListener('submit', submit);
  document.getElementById('clear')
    .addEventListener('click', clearList);
  // recently added
  document.querySelector('ul')
    .addEventListener('click', deleteOrTick);

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
    task.style.color = "#ff0000";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
 }
