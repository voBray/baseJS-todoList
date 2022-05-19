const field = document.querySelector(".field")
const add = document.querySelector(".add")
const remove = document.querySelector(".remove")
const list = document.querySelector(".list")

function createTask(value){
const task = document.createElement("div");
task.textContent = value;
const checkbox = document.createElement("input");
checkbox.setAttribute("type","checkbox");
task.appendChild(checkbox);
checkbox.addEventListener('click', completeTask)
// checkbox.classList.add("status");
return task;
};

function addTask(){
    if(field !== ""){
        createTask(field.value);
        const newTask = createTask(field.value);
        list.appendChild(newTask);
        field.value = "";
    }
    else{
        alert("error");
    }
};

function completeTask(event){
    const target = event.target;
    console.log("task completed");
    if(target !== ""){
        target.parentElement.style.textDecoration ='line-through';
        target.classList.add("completed");
    }
    else{
        console.log("error, cant complete task")
    }
};

add.addEventListener('click', addTask)

// допилить удалялку