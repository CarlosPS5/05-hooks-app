import React, { useRef } from 'react'
import '../examples/MultipleCustomHooks.css'

export const FocusScreen = () => {

    const inputRef = useRef()
    //console.log(ref)

    const handleClick = () => {
        inputRef.current.select()
    }
    return  <>
                <h1>Focus Screen</h1>
                <hr/>

                <input ref={inputRef} type="text" className="form-control" placeholder="Su nombre"/>
                <button onClick={handleClick} className="btn btn-outline-primary mt-5">Focus</button>
            </>
}