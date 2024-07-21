document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const renderTodos = () => {
        todosWrapper.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.className = `todo-item ${todo.checked ? 'todo-item--checked' : ''}`;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.checked;
            checkbox.addEventListener('change', () => {
                todo.checked = !todo.checked;
                saveTodos();
                renderTodos();
            });

            const span = document.createElement('span');
            span.className = 'todo-item__description';
            span.textContent = todo.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'todo-item__delete';
            deleteBtn.textContent = 'Видалити';
            deleteBtn.addEventListener('click', () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            todoItem.appendChild(checkbox);
            todoItem.appendChild(span);
            todoItem.appendChild(deleteBtn);

            todosWrapper.appendChild(todoItem);
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            todos.push({ text, checked: false });
            saveTodos();
            renderTodos();
            input.value = '';
        }
    });

    renderTodos();
});
