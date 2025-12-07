function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const timestamp = new Date().toLocaleString();
  const taskItem = createTaskItem(taskText, timestamp, false);
  document.getElementById("pendingList").appendChild(taskItem);
  input.value = "";
}

function createTaskItem(text, time, isCompleted) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = `<strong>${text}</strong><div class="timestamp">Added: ${time}</div>`;
  li.appendChild(span);

  const btns = document.createElement("div");
  btns.className = "task-buttons";

  if (!isCompleted) {
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => markComplete(li, text);
    btns.appendChild(completeBtn);
  }

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editTask(li, text);
  btns.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();
  btns.appendChild(deleteBtn);

  li.appendChild(btns);
  return li;
}

function markComplete(li, text) {
  li.remove();
  const timestamp = new Date().toLocaleString();
  const completedItem = createTaskItem(text, timestamp, true);
  completedItem.querySelector(".timestamp").textContent = `Completed: ${timestamp}`;
  document.getElementById("completedList").appendChild(completedItem);
}

function editTask(li, oldText) {
  const newText = prompt("Edit your task:", oldText);
  if (newText && newText.trim() !== "") {
    li.querySelector("strong").textContent = newText.trim();
  }
}
