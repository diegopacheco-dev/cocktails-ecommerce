import React, { useContext } from "react";
import ContextWrapper from "../../context/contextWrapper";
import "./styles.css";

const Header = ({setShowShoppingCart}) => {

  const {shoppingCart} = useContext(ContextWrapper);

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
        <form className="form-search">
          <input type="text" placeholder="Buscar un Cocktail" />
          <button>
            <i class="bx bx-search-alt-2 bx-sm"></i>
          </button>
        </form>

      </div>
    </div>
  );
};

export default Header;
