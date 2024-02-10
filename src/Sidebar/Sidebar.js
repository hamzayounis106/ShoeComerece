import "./Sidebar.css";
import Category from "./Category/Category";
import Color from "./Color/Color";
import { TiShoppingCart } from "react-icons/ti";
import Price from "./Price/Price";
function Sidebar({ handelChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar_heading">
          <TiShoppingCart className="card_icon" />
        </div>
        <Category handelChange={handelChange} />
        <Price handelChange={handelChange} />
        <Color handelChange={handelChange} />
      </section>
    </>
  );
}

export default Sidebar;
