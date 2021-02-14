import React from 'react'

export const Small = React.memo( ({value}) => {

    console.log("ME volvi a llamar k pedo")
    return  <>
                <small>{value}</small>
            </>
}
)