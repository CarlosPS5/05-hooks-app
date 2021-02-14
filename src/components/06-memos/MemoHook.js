import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado'


export const Memohook = () => {

    const {state,increment} = useCounter(100)
    const [show,setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(state),[state])

    return  <>
                <h1>Memo Hook</h1>
                <h3>Counter <small>{state}</small></h3>
                <hr/>
                <p>{memoProcesoPesado}</p>


                <button className="btn btn-primary" onClick={() => increment(1)}> +1 </button>
                <button className="btn btn-warning ml-3" onClick={() => setShow(!show)}> Show/Hide {JSON.stringify(show)} </button>
            </>
}