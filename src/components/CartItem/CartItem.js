import React from "react";
import "./styles.css";

const CartItem = ({drink, increaseProductQuantity, decreaseProductQuantity, deleteDrink}) => {
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={drink.img} alt="" />
      </div>

      <div className="cart-item__info">
        <div className="cart-item__header">
          <p className="cart-item__title">{drink.name}</p>
          <button 
          onClick={()=>deleteDrink(drink.id)}
          className="btn-delete-item">
            <i class="bx bx-x bx-sm"></i>
          </button>
        </div>

        <div className="cart-item__options">

          <p className="cart-item__price">S/ {drink.price}</p>
          <div className="cart-item__quantity">
            <button 
            onClick={() => decreaseProductQuantity(drink.id)}
            className="btn-quantity subtract">-</button>
            <p>{drink.quantity}</p>
            <button
            onClick={() => increaseProductQuantity(drink.id)}
            
            className="btn-quantity add">+</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
