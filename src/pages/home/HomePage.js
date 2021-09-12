import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import { getCocktails } from '../../services/services'

const HomePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getCocktails().then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div>
                <div>
                    Header
                </div>
                <div>
                    <ProductsList products={products}/>
                </div>
            </div>

            <div>
                ShoppingCart
            </div>
        </div>
    )
}

export default HomePage
