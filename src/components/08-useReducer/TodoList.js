import React from 'react'
import { TodoForm } from './TodoForm'
import { TodoListItem } from './TodoListItem'


export const TodoList = ({todos,todo,setTodo,handleToggle,deleteTodo,handleSubmit}) => {

    

    return  <ul className="list-group list-group-flush">
                <div className="row">
                    <div className="col-sm-7">

                        {todos.map((todo,index) =>  <TodoListItem index={index} todo={todo} handleToggle={handleToggle} deleteTodo={deleteTodo} />)}

                    </div>
                    <div className="col-sm-5">

                        <h4>Agregar Todo</h4>
                        <hr/>

                        <TodoForm   handleSubmit={handleSubmit}
                                    setTodo={setTodo}
                                    todo={todo}/>

                    </div>
                </div>
            </ul>
}