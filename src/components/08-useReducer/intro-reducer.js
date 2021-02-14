const initialState = [ {
    id: 1,
    todo: "Comprar leche xd",
    done: false,
}]

const todoReducer = (state = initialState,action) => {
    
    if(action?.type == 'add') {
        return [...state,action.payload]
    }
    
    return state
}

let todos = todoReducer()



const newTodo = {
    id:2,
    todo: "Comprar pan xd",
    done: false
}

const accion = {
    type: 'add',
    payload: newTodo
}


todos = todoReducer(todos, accion)



console.log(todos)