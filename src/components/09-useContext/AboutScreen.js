import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user,setUser} = useContext(UserContext)

    return  <>
                <h1>About Screen</h1>
                <hr/>

                <pre className="container">
                    {JSON.stringify(user)}
                </pre>

                <button className="btn btn-danger" onClick={() => setUser({})}>Logout</button>
            </>
}