import React from "react";
import Input from "../../Components/Input";
import "./Price.css";
function Price({handelChange}) {
  return (
    <>
      <div className="price_container">
        <div className="price_lable">Price</div>
        <div className="lables_container">
          <Input
            handelChange={handelChange}
            value=""
            title="All"
            name="price"
          />
          <Input
            handelChange={handelChange}
            value={50}
            title="$0-$50"
            name="price"
          />

          <Input
            handelChange={handelChange}
            value={100}
            title="$51-$100"
            name="price"
          />
          <Input
            handelChange={handelChange}
            value={150}
            title="$101- $150"
            name="price"
          />
          <Input
            handelChange={handelChange}
            value={200}
            title="Over $150"
            name="price"
          />
        </div>
      </div>
    </>
  );
}

export default Price;
