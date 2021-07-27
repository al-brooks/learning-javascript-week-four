const addTask = document.getElementById('addTask');
const submitTask = document.getElementById('submitTask');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

// submit task button logic - to Pending Tasks list
submitTask.addEventListener('click', function () {
  // task variable
  const task = addTask.value;

  // create li element
  const taskLi = document.createElement('li');

  // create task checkbox
  const taskCheck = document.createElement('input');
  taskCheck.setAttribute('type', 'checkbox');
  // giving it an id in order to reference it outside of this event
  taskCheck.setAttribute('id', 'checkBox');

  // create task span - header
  const taskTitle = document.createElement('span');
  taskTitle.innerHTML = task;

  // create remove button
  const rmButton = document.createElement('button');
  rmButton.innerHTML = 'Remove';

  // Add input, span and button to Li
  taskLi.appendChild(taskCheck);
  taskLi.appendChild(taskTitle);
  taskLi.appendChild(rmButton);

  pendingTasks.appendChild(taskLi);

  // Creating event for checking task box
  const checkBox = document.getElementById('checkBox');

  // remove button logic:
  rmButton.addEventListener('click', function () {
    const parent = this.parentElement.parentElement;
    if (parent.id === 'pendingTasks') {
      pendingTasks.removeChild(this.parentElement);
    } else {
      completedTasks.removeChild(this.parentElement);
    }
  });

  // Move between completed and pending
  checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
      completedTasks.appendChild(this.parentElement);
    } else {
      pendingTasks.appendChild(this.parentElement);
    }
  });
});
