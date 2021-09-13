import React, { useEffect, useState } from "react";
import ContextWrapper from "./contextWrapper";

const ShoppingCartState = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({
    drinks: [],
    total_cost: 0,
  });

  const newShoppingCartState = (state) => {
    setShoppingCart({...state});
    storeState(state);
  }

  const loadStorage = () => {
    const state = localStorage.getItem('shoppingCart');
    if (state) {
      setShoppingCart(JSON.parse(state));
    } else {
      storeState(shoppingCart);
    }
  }
  const storeState = (state) => {
    localStorage.setItem('shoppingCart', JSON.stringify(state));
  }
  useEffect(() => {
    loadStorage();
  }, [])


  const updateTotalCost = (shoppingCart) => {
    let totalCostUpdate = shoppingCart.drinks.reduce((contador, drink) => {
      return (contador += drink.quantity * drink.price);
    }, 0);
    return Number.parseFloat(totalCostUpdate).toFixed(2);
  };

  const addProductToShoppingCart = (objDrink) => {
    const { ...shoppingCartCopy } = shoppingCart;

    let drink = shoppingCartCopy.drinks.find(
      (drink) => drink.id === objDrink.idDrink
    );

    if (drink) {
      // SI EL COCKTAIL YA SE ENCUENTRA EN EL CARRITO
      drink.quantity++;

      newShoppingCartState({
        total_cost: updateTotalCost(shoppingCartCopy),
        drinks: shoppingCartCopy.drinks,
      });
    } else {
      // SI EL COCKTAIL NO SE ENCUENTRA EN EL CARRITO
      shoppingCartCopy.drinks.push({
        id: objDrink.idDrink,
        name: objDrink.strDrink,
        img: objDrink.strDrinkThumb,
        price: objDrink.precio,
        quantity: 1,
      });

      newShoppingCartState({
        drinks: shoppingCartCopy.drinks,
        total_cost: updateTotalCost(shoppingCartCopy),
      });
    }
  };

  const increaseProductQuantity = (idDrink) => {
    const { ...shoppingCartCopy } = shoppingCart;
    const drink = shoppingCartCopy.drinks.find((drink) => drink.id === idDrink);
    drink.quantity++;
    shoppingCartCopy.total_cost = updateTotalCost(shoppingCartCopy);

    newShoppingCartState({ ...shoppingCartCopy });
  };

  const decreaseProductQuantity = (idDrink) => {
    const { ...shoppingCartCopy } = shoppingCart;
    const drink = shoppingCartCopy.drinks.find((drink) => drink.id === idDrink);
    if (drink.quantity === 1) return;
    drink.quantity--;
    shoppingCartCopy.total_cost = updateTotalCost(shoppingCartCopy);

    newShoppingCartState({ ...shoppingCartCopy });
  };

  const deleteDrink = (idDrink) => {
    const { ...shoppingCartCopy } = shoppingCart;
    shoppingCartCopy.drinks = shoppingCartCopy.drinks.filter(
      (drink) => drink.id !== idDrink
    );
    shoppingCartCopy.total_cost = updateTotalCost(shoppingCartCopy);

    newShoppingCartState({ ...shoppingCartCopy });
  };


  return (
    <div>
      <ContextWrapper.Provider
        value={{
          shoppingCart,
          addProductToShoppingCart,
          increaseProductQuantity,
          decreaseProductQuantity,
          deleteDrink
        }}
      >
        {children}
      </ContextWrapper.Provider>
    </div>
  );
};

export default ShoppingCartState;
