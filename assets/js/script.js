let tasks = [
    { id: 01, description: "Hacer compras", completed: true },
    { id: 02, description: "Estudiar para la prueba", completed: false },
    { id: 03, description: "Sacar a pasear al perrito", completed: false }
];


function renderTasks() {
    const taskTable = document.getElementById("taskTable");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    taskTable.innerHTML = ""; 

    tasks.forEach(task => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.id}</td>
            <td class="${task.completed ? "completed" : ""}">${task.description}</td>
            <td><input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${task.id})"></td>
            <td><button class="delete" onclick="deleteTask(${task.id})">✖</button></td>
        `;

        taskTable.appendChild(row);
    });

    
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = taskInput.value.trim();

    if (taskDescription === "") {
        alert("Por favor, ingresa una descripción para la tarea.");
        return;
    }

    const newTask = {
        id: Math.floor(Math.random() * 20), 
        description: taskDescription,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = ""; 
    renderTasks();
}


function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}


function toggleTask(taskId) {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}


renderTasks();
