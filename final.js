
let todos = [];


const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');

function renderTodos() {
   
    todoList.innerHTML = '';

    
    todos.forEach((todo, index) => {
        
        const li = document.createElement('li');
        li.className = todo.complete ? 'completed' : '';

        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.complete;
        checkbox.addEventListener('change', () => {
            
            todo.complete = !todo.complete;
            renderTodos();
        });

        
        const text = document.createTextNode(todo.text);

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.addEventListener('click', () => {
            
            todos.splice(index, 1);
            renderTodos();
        });

        
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);

        
        todoList.appendChild(li);
    });
}


todoForm.addEventListener('submit', (event) => {
    
    event.preventDefault();

   
    const todoText = document.getElementById('todoInput').value;

    
    todos.push({ text: todoText, complete: false });

    
    document.getElementById('todoInput').value = '';

    
    renderTodos();
});


renderTodos();