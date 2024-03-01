function addTask() {
    const taskInput = document.getElementById("taskInput");
    const datetimeInput = document.getElementById("datetimeInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    const datetimeValue = datetimeInput.value;

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            li.remove();
        };

        const dateTimeSpan = document.createElement("span");
        dateTimeSpan.classList.add("datetime");
        dateTimeSpan.textContent = formatDateTime(datetimeValue);

        li.appendChild(dateTimeSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
        datetimeInput.value = "";
    }
}

function formatDateTime(datetimeString) {
    const datetime = new Date(datetimeString);
    return `${datetime.toLocaleDateString()} ${datetime.toLocaleTimeString()}`;
}
