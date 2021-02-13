import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const [state,setState] = useState({data:null,loading:true,error:null})

    const isMounted = useRef(true)

    useEffect(() => {

        return () => {
            isMounted.current = false
        }
    },[])

    useEffect(async () => {
        setState({...state,loading:true})
        const response = await fetch(url)
        const data = await response.json()

        setTimeout(() => {
            isMounted.current && setState({data,loading:false,error:null})
            
        }, 4000);
        

    },[url])

    
    return state
}