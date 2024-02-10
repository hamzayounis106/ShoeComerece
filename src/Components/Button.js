import React from "react";

function Button({ OnClickhandler, value, title }) {
  return (
    <button onClick={OnClickhandler} value={value}>
      {title}
    </button>
  );
}

export default Button;
