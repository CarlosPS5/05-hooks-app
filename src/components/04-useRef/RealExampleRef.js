import React, { useState } from 'react'
import '../examples/MultipleCustomHooks.css'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'

export const RealExampleRef = ()=> {

    const [show,setShow] = useState(false)

    return  <>
                <h1>Real Example Ref</h1>
                <hr/>

                {show && <MultipleCustomHooks/>}
                <button className="btn btn-warning m-10" onClick={() => setShow(!show)}>{show? 'Hide' : 'Show'}</button>
            </>
}