let tasks = [
    { id: 16, description: "Hacer compras", completed: true },
    { id: 60, description: "Estudiar para la prueba", completed: false },
    { id: 24, description: "Sacar a pasear al perritogit ", completed: false }
];

// Función para renderizar la lista de tareas en la página
function renderTasks() {
    const taskTable = document.getElementById("taskTable");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    taskTable.innerHTML = ""; // Limpiar la tabla antes de volver a llenarla

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

    // Actualizar contadores
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}

// Función para agregar una nueva tarea
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = taskInput.value.trim();

    if (taskDescription === "") {
        alert("Por favor, ingresa una descripción para la tarea.");
        return;
    }

    const newTask = {
        id: Math.floor(Math.random() * 1000), // Generar un ID único
        description: taskDescription,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = ""; // Limpiar el input
    renderTasks();
}

// Función para eliminar una tarea
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

// Función para marcar/desmarcar una tarea como completada
function toggleTask(taskId) {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

// Renderizar tareas iniciales
renderTasks();
