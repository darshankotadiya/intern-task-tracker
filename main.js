import { updatedIntern } from './data.js';
import { allTasks } from './tasks.js';

// 1. State: Tasks ne manage karva mate array
let myTasks = [...allTasks]; ////////////

const renderApp = () => {
    // Intern Details Display
    const internDiv = document.getElementById('intern-details');
    const { name, status, skills } = updatedIntern; // Destructuring
    
    const skillTags = skills.map(s => `<span class="tag">${s}</span>`).join(''); // Map

    internDiv.innerHTML = `
        <div style="font-size: 18px; margin-bottom: 5px;"><strong>${name}</strong></div>
        <div>Status: <span style="color: #1a73e8; font-weight: bold;">${status}</span></div>
        <div style="margin-top: 10px;">${skillTags}</div>
    `;

    renderTasks();
};

const renderTasks = () => {
    const taskList = document.getElementById('task-list');
    
    //////////////////////////// UI update karva mate Map no use
    taskList.innerHTML = myTasks.map(task => `
        <li class="task-item ${task.completed ? 'done' : 'pending'}">
            <span>${task.title}</span>
            <span>${task.completed ? '✅' : '⏳'}</span>
        </li>
    `).join('');
};

// 2. Add Task Function
const handleAddTask = () => {
    const input = document.getElementById('taskInput');
    const title = input.value.trim();

    if (title === "") return alert("Write New Task!");

    const newTask = {
        id: Date.now(),
        title: title,
        completed: false
    };

    // Spread operator thi nawi list banavi (Immutability)
    myTasks = [newTask, ...myTasks];
    
    input.value = ""; // Input clear karo
    renderTasks(); // List refresh karo
};

// Event Listeners
document.getElementById('addBtn').addEventListener('click', handleAddTask);

// Initial Run
renderApp();