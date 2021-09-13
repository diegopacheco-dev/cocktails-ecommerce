import React from "react";
import './styles.css'
import ProductCard from "../ProducCard/ProductCard";
import { useContext } from "react/cjs/react.development";
import ContextWrapper from "../../context/contextWrapper";

const ProductsList = ({ products = [] }) => {
  const {addProductToShoppingCart} = useContext(ContextWrapper);
  
  return (
    <div className="products-list">

      {
      products.map((product) => {
        return <ProductCard key={product.idDrink} product={product} addProductToShoppingCart={addProductToShoppingCart} />
      })
      }

    </div>
  );
};

export default ProductsList;
