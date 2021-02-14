import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import './Layout.css'

export const Layout = () => {

    const [counter, setCounter] = useState(1)
    const [boxSize, setBoxSize] = useState({})
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {quote} = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    },[quote])
    return  <>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className="blockquote text-rigth">

                <pre>
                    {JSON.stringify(boxSize,null,3)}
                </pre>

                <p  ref={pTag} className="mb-0">{quote}</p>

            </blockquote>

            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Next Quote</button>

            

            </>
}