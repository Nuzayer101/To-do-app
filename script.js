const addtask = () => {
  const taskInput = document.getElementById("inputTask");
  const taskInputvalue = taskInput.value.trim();

  if (taskInputvalue !== "") {
    const taskList = document.getElementById("tasklist");
    const li = document.createElement("li");
    li.innerHTML =
      ' <input type="checkbox">' +
      taskInputvalue +
      '<button onclick="deleteTask(this)" class="delete">Delete</button>';
    taskList.appendChild(li);

    taskInput.value = "";
  } else {
    alert("Please enter a task");
    return;
  }
};

const deleteTask = (btn) => {
  let li = btn.parentNode;
  li.remove();
};

const deletechecked = () => {
  const tasklist = document.getElementById("tasklist");

  const checkedboxs = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  checkedboxs.forEach((element) => {
    const li = element.parentNode;
    li.parentNode.removeChild(li);
  });
};
