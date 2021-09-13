import React, { useEffect, useState } from "react";
import "./styles.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import { getCocktails, searchCocktail } from "../../services/services";
import Header from "../../components/Header/Header";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import ShoppingCartState from "../../context/ShoppingCartState";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [loadingDrinks, setLoadingDrinks] = useState(true);

  const initialCharge = () => {
    setLoadingDrinks(true);
    getCocktails().then((data) => {
      setProducts(data)
      setLoadingDrinks(false);
    });
  }

  const searchDrinkByName = (search) => {
    if (search.trim().length === 0) {
      initialCharge();
      return;
    }
    setLoadingDrinks(true);
    searchCocktail(search).then(data => {
      setProducts(data);
      setLoadingDrinks(false);

    })
  }


  useEffect(() => {
    initialCharge();
  }, []);

  return (
    <ShoppingCartState>
      <div className="homepage">
        <div>
          <div>
            <Header setShowShoppingCart={setShowShoppingCart} searchDrinkByName={searchDrinkByName} />
          </div>
          <div>
            <ProductsList products={products} loading={loadingDrinks}/>
          </div>
        </div>

        <ShoppingCart
          showShoppingCart={showShoppingCart}
          setShowShoppingCart={setShowShoppingCart}
        />
      </div>
    </ShoppingCartState>
  );
};

export default HomePage;
