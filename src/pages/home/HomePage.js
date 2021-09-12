import React, { useEffect } from 'react'
import { getCocktails } from '../../services/services'

const HomePage = () => {

    useEffect(() => {
        getCocktails().then(console.log)
    }, [])

    return (
        <div>
            <div>
                <div>
                    Header
                </div>
                <div>
                    ProductsList
                </div>
            </div>

            <div>
                ShoppingCart
            </div>
        </div>
    )
}

export default HomePage
