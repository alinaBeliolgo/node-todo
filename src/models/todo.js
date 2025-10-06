let tasks = [];
let idCounter = 1;

function getAll() {
    return tasks;
}

function create(title) {
    tasks.push({ id: idCounter++, title, done: false });
}

function toggle(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.done = !task.done;
}

function remove(id) {
    tasks = tasks.filter(t => t.id !== id);
}

module.exports = { getAll, create, toggle, remove };