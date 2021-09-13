import React from "react";
import "./styles.css";

const CartItem = ({name, img, price, quantity}) => {
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={img} alt="" />
      </div>

      <div className="cart-item__info">
        <div className="cart-item__header">
          <p className="cart-item__title">{name}</p>
          <button className="btn-delete-item">
            <i class="bx bx-x bx-sm"></i>
          </button>
        </div>

        <div className="cart-item__options">

          <p className="cart-item__price">S/ {price}</p>
          <div className="cart-item__quantity">
            <button className="btn-quantity subtract">-</button>
            <p>{quantity}</p>
            <button className="btn-quantity add">+</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
