import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import './Nav.css'
function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav_container">
        <input
        className="input_search"
          type="text"
          onChange={handleInputChange}
          placeholder="Enter you shoes seach..."
          value={query}
        />
      </div>
      <div className="profile_container">
        <TiShoppingCart className="profile_icons" />
        <AiOutlineUser className="profile_icons" />
        <AiOutlineHeart className="profile_icons" />
      </div>
    </nav>
  );
}

export default Nav;
