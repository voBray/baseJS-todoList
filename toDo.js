const taskField = document.querySelector(".taskField")
const taskList = document.querySelector(".taskList")
const addButton = document.querySelector(".addButton")
const removeAllButton = document.querySelector(".removeAllButton")


function createTask(value){
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");

    const task = document.createElement("input");
    task.type = "text";
    task.value = value;
    task.setAttribute("readonly", "readonly");
    task.classList.add("task");
    taskContainer.appendChild(task);
    
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";
    completedButton.classList.add("completedButton");
    taskContainer.appendChild(completedButton);
    function completeTask(){
        task.classList.add("completedTask");
    };
    completedButton.addEventListener('click', completeTask);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("deleteButton");
    taskContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTask);

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







