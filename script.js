document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addBtn');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    // Create task item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
      li.classList.add('fade-out');
      li.addEventListener('animationend', () => {
        li.remove();
      });
    });

    // Assemble the list item
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  });
});



