import React from "react";
import "./Recomended.css";
import Button from "../Components/Button";
function Recomended({ OnhandleClick }) {
  return (
    <div className="Recomended_container">
      <h2>Recommended</h2>
      <div className="buttons_container">
        <Button OnClickhandler={OnhandleClick} value="" title="All" />
        <Button OnClickhandler={OnhandleClick} value="Nike" title="Nike" />
        <Button OnClickhandler={OnhandleClick} value="Adidas" title="Adidas" />
        <Button OnClickhandler={OnhandleClick} value="puma" title="puma" />
        <Button OnClickhandler={OnhandleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
}

export default Recomended;
