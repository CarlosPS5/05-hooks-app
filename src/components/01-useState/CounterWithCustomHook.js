import React from 'react'
import './CounterApp.css'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const{state, increment, decrement, reset} = useCounter(100)



    return  <>
                <h1>Counter with Custom Hook: {state}</h1>
                <hr/>
                <button className="btn btn-primary" onClick={() => increment(5)}>+ 1</button>
                <button className="btn btn-primary" onClick={reset}>Reset</button>
                <button className="btn btn-primary" onClick={() => decrement(5)}>- 1</button>

            </>
}