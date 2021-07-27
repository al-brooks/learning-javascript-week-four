const addTask = document.getElementById('addTask');
const submitTask = document.getElementById('submitTask');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

// submit task button logic - to Pending Tasks list
submitTask.addEventListener('click', function () {
  if (addTask.value === '') {
    alert('Please enter your task!');
  } else {
    // task variable
    const task = addTask.value;

    // create li element
    const taskLi = document.createElement('li');
    taskLi.setAttribute('class', 'listBox');

    // create task checkbox
    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.setAttribute('class', 'checkBox');

    // create task span - header
    const taskTitle = document.createElement('span');
    taskTitle.setAttribute('class', 'taskTitle');
    taskTitle.innerHTML = task;

    // create remove button
    const rmButton = document.createElement('button');
    rmButton.setAttribute('class', 'removeButton');
    rmButton.innerHTML = 'Remove';

    // Add input, span and button to Li
    taskLi.appendChild(taskCheck);
    taskLi.appendChild(taskTitle);
    taskLi.appendChild(rmButton);

    pendingTasks.appendChild(taskLi);

    // remove button logic:
    rmButton.addEventListener('click', function () {
      const parent = this.parentElement.parentElement;
      if (parent.id === 'pendingTasks') {
        pendingTasks.removeChild(this.parentElement);
      } else {
        completedTasks.removeChild(this.parentElement);
      }
    });

    //   Move between completed and pending
    taskCheck.addEventListener('change', function () {
      if (taskCheck.checked === true) {
        completedTasks.appendChild(this.parentElement);
      } else if (taskCheck.checked === false) {
        pendingTasks.appendChild(this.parentElement);
      }
    });

    // Dragging List Items: Enter Code Below
  }
});
