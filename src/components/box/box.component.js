import React from 'react'

const ComponentBox = (props) => {
    return (
        <div>
            <h3> {props.name} </h3>
            <h4> Id articulo {props.id} </h4>
        </div>
    )
}

export default ComponentBox