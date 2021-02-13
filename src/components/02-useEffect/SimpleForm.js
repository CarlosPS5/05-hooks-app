import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import './SimpleForm.css'

export const SimpleForm = () => {

    const[formState, setFormState] = useState({
        name:'',
        email:''
    })

    const {name,email} = formState


    useEffect(() => {

    },[])

    useEffect(() => {

    },[email])



    return  <>
                <h1>Use Effect</h1>
                <hr/>
                <div className="form-group">
                    <input onChange={(e) => setFormState({...formState,name:e.target.value})} type="text" name="name" placeholder="Tu nombre" autoComplete="off" value={name}/>
                    <br/>
                    <input onChange={(e) => setFormState({...formState,email:e.target.value})} type="text" name="email" placeholder="Tu email" autoComplete="off" value={email} />
                </div>

                {(name=='123') && <Message />}
            </>
}