function addTask() {
    const taskName = document.getElementById('taskInput').value;
    const dateTime = document.getElementById('dateInput').value;
    const priority = document.getElementById('priorityInput').value; // Get the selected priority
  
    if (taskName === '' || dateTime === '') {
      alert('Please fill all fields!');
      return;
    }
  
    // Separate Date & Time
    const [date, time] = dateTime.split('T');
  
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
  
    // Determine the priority color based on the selected value
    let priorityColor = '';
    if (priority === 'high') {
      priorityColor = 'red';
    } else if (priority === 'medium') {
      priorityColor = 'blue';
    } else if (priority === 'low') {
      priorityColor = 'green';
    }
  
    taskItem.innerHTML = `
      <div>
        <span class="task-name"><strong>Task:</strong> ${taskName}</span><br>
        <small><strong>Date:</strong> ${date}</small> &nbsp;&nbsp;
        <small><strong>Time:</strong> ${time}</small><br>
        <span class="priority-label" style="background-color: ${priorityColor}; color: white; padding: 5px; border-radius: 5px;">
          <strong>Priority:</strong> ${priority.charAt(0).toUpperCase() + priority.slice(1)}
        </span>
      </div>
      <div class="task-buttons">
        <button onclick="completeTask(this)">✔️</button>
        <button onclick="editTask(this)">✏️</button>
        <button onclick="deleteTask(this)">🗑️</button>
      </div>
    `;
  
    taskList.appendChild(taskItem);
  
    // Clear inputs
    document.getElementById('taskInput').value = '';
    document.getElementById('dateInput').value = '';
    document.getElementById('priorityInput').value = 'low'; // Reset priority
  }
  
  // Mark task as completed
  function completeTask(button) {
    const taskItem = button.closest('.task');
    taskItem.classList.toggle('completed');
  }
  
  // Edit task
  function editTask(button) {
    const taskItem = button.closest('.task');
    const taskNameElement = taskItem.querySelector('.task-name');
    const currentName = taskNameElement.innerText.replace('Task: ', '');
  
    const newName = prompt('Edit Task Name:', currentName);
    if (newName !== null && newName.trim() !== '') {
      taskNameElement.innerText = `Task: ${newName}`;
    }
  }
  
  // Delete task
  function deleteTask(button) {
    const taskItem = button.closest('.task');
    taskItem.remove();
  }
  