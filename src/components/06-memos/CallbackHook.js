import React, { useCallback, useState } from 'react'
import '../examples/MultipleCustomHooks.css'
import { ShowIncrement } from './ShowIncrement'


export const CallbackHook = () => {

    const [counter,setCounter] = useState(10)

    console.log("Me volví a generar :(")

    const increment = useCallback( () => {
        setCounter(c => c + 1)
    }, [setCounter])

    return  <>
                <h1>Callback Hook</h1>
                <hr/>
                <h4>Counter {counter}</h4>
                <ShowIncrement increment={increment} />
                
            </>
}