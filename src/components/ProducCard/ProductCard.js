import React from "react";
import Button from "../Button/Button";
import "./styles.css";

const ProductCard = ({ product, action }) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={product.strDrinkThumb} alt="" />
      </div>

      <div className="product-card__info">
        <h4>{product.strDrink}</h4>
        <p>S/ {product.precio}0 </p>
        <Button>Añadir</Button>
      </div>
    </div>
  );
};

export default ProductCard;
