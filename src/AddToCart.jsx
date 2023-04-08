import React from "react";
import CartIcon from "../images/icon-cart.svg";

const AddToCart = () => {
  return (
    <div>
      <div className="pricing">
        <h1 className="discount">$149.99</h1>
        <p className="regular-price">$169.99</p>
      </div>

      <div className="pricing-div">
        <button>
          <div className="add-to-cart">
            <img className="cart" src={CartIcon} alt="shopping cart icon" />
            <p className="atc">Add to Cart</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
