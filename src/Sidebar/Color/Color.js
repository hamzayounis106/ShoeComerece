import React from "react";
import "./Color.css";
import Input from "../../Components/Input";

function Color({ handelChange }) {
  return (
    <>
      <div className="color_container">
        <div className="color_lable">Color</div>
        <div className="lables_container">
          <Input
            handelChange={handelChange}
            value=""
            title="All"
            color="All"
            name="color"
          />
          <Input
            handelChange={handelChange}
            value="black"
            title="Black"
            color="Black"
            name="color"
          />

          <Input
            handelChange={handelChange}
            value="red"
            title="Red"
            color="Red"
            name="color"
          />
          <Input
            handelChange={handelChange}
            value="blue"
            title="Blue"
            color="Blue"
            name="color"
          />
          <Input
            handelChange={handelChange}
            value="green"
            title="Green"
            color="Green"
            name="color"
          />
        </div>
      </div>
    </>
  );
}

export default Color;
