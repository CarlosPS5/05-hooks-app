import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'

import './SimpleForm.css'

export const FormWithCustomHook = () => {

    const[formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password: ''
    })

    const {name,email,password} = formValues

    useEffect(() => {
        console.log("Email cambió")
    },[email])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    

    return  <form onSubmit={handleSubmit}>
                <h1>Custom Hook Form</h1>
                <hr/>
                <div className="form-group">
                    <input onChange={handleInputChange} type="text" name="name" placeholder="Tu nombre" autoComplete="off" value={name}/>
                    <br/>
                    <input onChange={handleInputChange} type="text" name="email" placeholder="Tu email" autoComplete="off" value={email} />
                    <br/>
                    <input onChange={handleInputChange} type="password" name="password" placeholder="*********"  value={password}/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
}