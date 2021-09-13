import React from 'react'
import Button from '../Button/Button'
import './styles.css'

const ShoppingCart = () => {
    return (
        <div className="shopping-cart">
            <div className="shopping-cart__header">
                <button className="btn-hide-cart">
                <i class='bx bx-chevron-left bx-md'></i>
                </button>
                <h4>Carrito de Compras</h4>
            </div>

            <div className="shopping-cart__body">
                body
            </div>

            <div className="shopping-cart__footer">
                <div className="total">
                    <p className="total__title">Total</p>
                    <div className="total__info">
                        <p className="cantidad-items">(4 items)</p>
                        <p className="monto">S/ 50</p>
                    </div>
                </div>
                <Button size="lg">Continuar</Button>
            </div>
        </div>
    )
}

export default ShoppingCart
