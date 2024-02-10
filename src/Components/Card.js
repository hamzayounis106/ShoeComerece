import React from "react";
import { FaShoppingBag } from "react-icons/fa";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  // console.log(newPrice);
  return (
    <section className="card">
      <div className="card_img">
        <img src={img} className="image_card" />
      </div>
      <div className="card_title">{title}</div>
      <div className="card_rating">
        {star}
        {star}
        {star}
        {star}
        {star}
        <span className="card_reviews_count">{reviews}</span>
      </div>
      <div className="card_price">
        <div>
          <del>{prevPrice}</del>
          {newPrice}
        </div>
        <div className="card_bag">
          <FaShoppingBag className="bag_icon" />
        </div>
      </div>
    </section>
  );
}

export default Card;
