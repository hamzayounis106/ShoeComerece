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
            name="category"
          />
          <Input
            handelChange={handelChange}
            value="black"
            title="Black"
            color="Black"
            name="category"
          />

          <Input
            handelChange={handelChange}
            value="red"
            title="Red"
            color="Red"
            name="category"
          />
          <Input
            handelChange={handelChange}
            value="blue"
            title="Blue"
            color="Blue"
            name="category"
          />
          <Input
            handelChange={handelChange}
            value="green"
            title="Green"
            color="Green"
            name="category"
          />
        </div>
      </div>
    </>
  );
}

export default Color;
