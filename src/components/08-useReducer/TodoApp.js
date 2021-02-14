import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { TodoList } from './TodoList'

const init = () => {

    return JSON.parse(localStorage.getItem("todo")) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [todo, setTodo] = useState("")

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos))
    },[todos])


    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo!='') {
            const newTodo = {
                id: new Date().getTime(),
                desc: todo,
                done: false
            }

            const accion = {
                type: 'add',
                payload: newTodo
            }
        
            dispatch(accion)
            setTodo('')
        }else {setTodo('')}
    }

    const deleteTodo = (id) => {
        const accion = {
            type:'delete',
            payload: id
        }

        dispatch(accion)
    }

    const handleToggle = (id) => {
        const accion = {
            type: 'completed',
            payload: id
        }

        dispatch(accion)
    }

    return  <>
                <h1>Todo App: ( {todos.length} )</h1>
                <hr/>

                

                <TodoList   todos={todos}
                            todo={todo}
                            setTodo={setTodo} 
                            handleToggle={handleToggle} 
                            deleteTodo={deleteTodo} 
                            handleSubmit={handleSubmit} />
                    
                

            </>
}