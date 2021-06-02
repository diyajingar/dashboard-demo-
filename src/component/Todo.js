import React from 'react'


export default function Todo({todo,toggleTodo}) {
function hundleTodoClick() {
toggleTodo(todo.id)
}
    return (
        <div>
            <input type="checkbox" checked={todo.complete} onChange={hundleTodoClick} /> 
           <label>
           {todo.name}
           </label>
        </div>
    )
}
