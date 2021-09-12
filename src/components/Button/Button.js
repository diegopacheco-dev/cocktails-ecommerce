import React from 'react'
import './styles.css'

const Button = ({title, action, size="md"}) => {
    return (
        <button
        className={`button ${size}`} 
        onClick={() => action()}>
           {title} 
        </button>
    )
}

export default Button
