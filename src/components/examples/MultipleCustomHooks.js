import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import './MultipleCustomHooks.css'
export const MultipleCustomHooks = () => {
    const [counter, setCounter] = useState(1)
    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {author,quote} = !!data && data[0]
    return  <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {loading? <div className="alert alert-info text-center">Loading...</div> :<blockquote className="blockquote text-rigth">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote footer">{author}</footer>
            </blockquote>}

            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Next Quote</button>

            

            </>
}