const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-text">${text}</span>
        <span>
            <button class="complete-btn" title="Mark as done">✔</button>
            <button class="delete-btn" title="Delete">✖</button>
        </span>
    `;
    todoList.appendChild(li);
    todoInput.value = '';
    li.querySelector('.complete-btn').onclick = () => {
        li.classList.toggle('completed');
    };
    li.querySelector('.delete-btn').onclick = () => {
        li.remove();
    };
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTodo();
});
