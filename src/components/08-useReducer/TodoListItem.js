import React from 'react'

export const TodoListItem = ({todo,handleToggle,deleteTodo,index}) => {

    return  <li key={todo.id} className="list-group-item">
                <p onClick={() => handleToggle(todo.id)} className={`text-center ${todo.done && 'completed'}`}>{index + 1} - {todo.desc}</p>
                <p onClick={() => deleteTodo(todo.id)} className="text-center"><button className="btn btn-danger">Borrar</button></p>
            </li>
}