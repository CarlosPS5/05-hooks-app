import userEvent from '@testing-library/user-event'
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext)

    const usuario = {
        id: 1,
        name: "Carlos",
        email: "carlos.perez@lis-solutions.es"
    }

    return  <>
                <h1>Login Screen</h1>
                <hr/>
                <button className="btn btn-primary" onClick={() => setUser(usuario)}>Login</button>
            </>
}