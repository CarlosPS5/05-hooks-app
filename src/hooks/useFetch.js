import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state,setState] = useState({data:null,loading:true,error:null})

    useEffect(async () => {
        setState({...state,loading:true})
        const response = await fetch(url)
        const data = await response.json()
        setState({data,loading:false,error:null})

    },[url])
    return state
}