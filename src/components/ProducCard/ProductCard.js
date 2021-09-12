import React from 'react'

const ProductCard = ({product, action}) => {
    return (
        <div>
            <img src={product.strDrinkThumb} alt="" />
            <p>{product.strDrink}</p>
            <p>{product.precio} </p>
        </div>
    )
}

export default ProductCard
