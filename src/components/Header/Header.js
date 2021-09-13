import React from "react";
import "./styles.css";

const Header = ({showShoppingCart}) => {
  return (
    <div className="header">
      <div className="header__title">
        <h2>Cocktails Ecommerce</h2>
        <button className="btn-showShoppingCart">
          <i className='bx bxs-cart bx-sm'></i>
          <span className="tooltip">{0}</span>
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
