import React from 'react'

export const ShowIncrement = React.memo( ({increment}) => {
    return  <>
                <button onClick={ () => increment() } className="btn btn-outline-primary">Incrementar</button>
            </>
})