import React from "react";

const ProductsList = ({ products = [] }) => {
  return (
    <div className="products-list">

      {
      products.map((product) => {
        return <p>Product Card</p>;
      })
      }

    </div>
  );
};

export default ProductsList;
