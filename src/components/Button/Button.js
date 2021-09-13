import React from 'react'
import './styles.css'

const Button = ({children, action=()=> console.log("continuar compra"), size="md"}) => {
    return (
        <button
        className={`button ${size}`} 
        onClick={() => action()}>
           {children} 
        </button>
    )
}

export default Button
