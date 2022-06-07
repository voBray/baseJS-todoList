const taskField = document.querySelector(".taskField")
const taskList = document.querySelector(".taskList")
const addButton = document.querySelector(".addButton")
const removeAllButton = document.querySelector(".removeAllButton")


function createTask(value){
    
    const task = document.createElement("input");
    task.type = "text";
    task.value = value;
    task.setAttribute("readonly", "readonly");
    task.classList.add("task");
    
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";
    completedButton.classList.add("completedButton");
    completedButton.addEventListener('click', () => {
        task.classList.add("completedTask");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener('click', deleteTask);

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskContainer.appendChild(task);
    taskContainer.appendChild(completedButton);
    taskContainer.appendChild(deleteButton);

    return taskContainer;
};

function deleteTask(event){
    event.target.parentNode.remove();
};

function addTask(){
    if(taskField.value !== ""){
        const newTask = createTask(taskField.value);

        taskList.appendChild(newTask);
        taskField.value = "";
    }
};

function removeAllTasks(){
    taskList.innerHTML = '';
};

addButton.addEventListener('click', addTask);
removeAllButton.addEventListener('click', removeAllTasks);
