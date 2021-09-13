import React from "react";
import './styles.css'
import ProductCard from "../ProducCard/ProductCard";
import { useContext } from "react/cjs/react.development";
import ContextWrapper from "../../context/contextWrapper";

const ProductsList = ({ products = [], loading }) => {
  const {addProductToShoppingCart} = useContext(ContextWrapper);

  return (
    <div className="products-list">

      {
        loading?
        <p>Cargando...</p>
        : 
        products.length > 0?
      products.map((product) => {
        return <ProductCard key={product.idDrink} product={product} addProductToShoppingCart={addProductToShoppingCart} />
      })
      : <p>Sin resultados</p>
      }

    </div>
  );
};

export default ProductsList;
