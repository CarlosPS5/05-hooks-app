import React, { useEffect, useState } from 'react'

export const Message = () => {

    const[coors, setCoors] = useState({x:0,y:0})
    
    useEffect(() => {

        const mousemove = (e) => {
            const coors = {x:e.x,y:e.y}
            setCoors(coors)

        }

        //console.log("Componente montado")
        window.addEventListener('mousemove', mousemove)
        return () => {
            window.removeEventListener('mousemove', mousemove)
            //console.log("Componente desmontado")
        }
    }, [])


    return  <>  
                <h1>X: {coors.x}</h1>
                <h1>Y: {coors.y}</h1>
            </>
}