import React from "react";
import './styles.css'
import ProductCard from "../ProducCard/ProductCard";

const ProductsList = ({ products = [] }) => {
  return (
    <div className="products-list">

      {
      products.map((product) => {
        return <ProductCard key={product.idDrink} product={product} action={() => alert("añadiendo producto")} />
      })
      }

    </div>
  );
};

export default ProductsList;
