import React, { useEffect, useState } from 'react'
import './styles.css'
import ProductsList from '../../components/ProductsList/ProductsList'
import { getCocktails } from '../../services/services'
import Header from '../../components/Header/Header'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'

const HomePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getCocktails().then(data => setProducts(data))
    }, [])

    return (
        <div className="homepage">
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <ProductsList products={products}/>
                </div>
            </div>

            <div>
                <ShoppingCart />
            </div>

        </div>
    )
}

export default HomePage
