import React, { useContext, useState } from "react";
import ContextWrapper from "../../context/contextWrapper";
import "./styles.css";

const Header = ({setShowShoppingCart, searchDrinkByName}) => {

  const [inputSearch, setInputSearch] = useState("");
  const {shoppingCart} = useContext(ContextWrapper);

  const handleChange = (e) => {
    if (e.target.value.length > 15)return;
    setInputSearch(e.target.value);
    searchDrinkByName(e.target.value);
  }


  return (
    <div className="header">
      <div className="header__title">
        <h2>Cocktails Ecommerce</h2>
        <button 
        onClick={() => setShowShoppingCart(true)}
        className="btn-showShoppingCart">
          <i className='bx bxs-cart bx-sm'></i>
          <span className="tooltip">{shoppingCart.drinks.length}</span>
        </button>
      </div>

      <div className="header__search">
        <div className="form-search">
          <input type="text" placeholder="Buscar un Cocktail" value={inputSearch} onChange={handleChange}/>
          <span>
            <i class="bx bx-search-alt-2 bx-sm"></i>
          </span>
        </div>

      </div>
    </div>
  );
};

export default Header;
