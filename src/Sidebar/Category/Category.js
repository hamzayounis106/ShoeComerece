import React from "react";
import "./Category.css";
import Input from "../../Components/Input";
function Category({ handelChange }) {
  return (
    <div className="category_container">
      <div className="category_lable">Category</div>
      <div className="lables_container">
        <Input
          handelChange={handelChange}
          value=""
          title="All"
          name="category"
        />
        <Input
          handelChange={handelChange}
          value="sneakers"
          title="Sneakers"
          name="category"
        />

        <Input
          handelChange={handelChange}
          value="flats"
          title="Flats"
          name="category"
        />
        <Input
          handelChange={handelChange}
          value="sandals"
          title="Sandals"
          name="category"
        />
        <Input
          handelChange={handelChange}
          value="heels"
          title="Heels"
          name="category"
        />
      </div>
    </div>
  );
}

export default Category;
