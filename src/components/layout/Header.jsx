import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/">Coffee Delivery</Link>
      <Link to="/checkout">Cart</Link>
    </div>
  );
}

export default Header;
