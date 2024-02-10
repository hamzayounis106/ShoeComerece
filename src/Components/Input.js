import React from "react";

function Input({ handelChange, value, title, name }) {
  return (
    <label className="sidebar_lable_container">
      <input type="radio" value={value} onChange={handelChange} name={name} />
      <span>{title}</span>
    </label>
  );
}

export default Input;
