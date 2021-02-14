import React from 'react'


export const TodoForm = ({handleSubmit,setTodo,todo}) => {

    return  <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)} value={todo} className="form-control" type="text" name="description" placeholder = "Aprender..." autoComplete="off"/>
                {todo==''? <button type="submit" className="btn btn-outline-primary mt-1 btn-block" disabled>Agregar</button> : <button type="submit" className="btn btn-outline-primary mt-1 btn-block">Agregar</button>}
            </form>
}