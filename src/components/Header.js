import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cart from "../images/cart-shopping-solid.svg";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";


const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.warn("data in header", result);
  return (
    <div className="header">
      <input type="text" placeholder="Search" onChange={(event) => dispatch(productSearch(event.target.value))} />
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img src={cart} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
