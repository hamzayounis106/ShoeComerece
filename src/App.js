import Nav from "./Navigation/Nav.js";
import Recomended from "./Recomended/Recomended.js";
import Products from "./Products/Products.js";
import Sidebar from "./Sidebar/Sidebar.js";
import products from "./db/data";
import Card from "./Components/Card.js";
import "./index.css";
import { useState } from "react";
function App() {
  //UseState for the category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setquery] = useState("");

  //Picking the query from navigation
  const handleInputChange = (e) => {
    setquery(e.target.value);
    // console.log("object")
  };
  //Picking the Button from the Recomended
  const OnhandleClick = (e) => {
    setSelectedCategory(e.target.value.toLowerCase());
    setquery("");
  };
  //Picking the radios from the Sidebar
  const handelChange = (e) => {
    console.log("radio")
    setSelectedCategory(e.target.value.toLowerCase());
  };

  //Filtering Data for Query
  const FIltereditems = products.filter(
    (p) => p.title?.toLowerCase().indexOf(query?.toLowerCase()) !== -1
  );

  //Final Filteration

  function filteredData(products, query, selected) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = FIltereditems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category.toLowerCase() === selected ||
          color.toLowerCase() === selected ||
          company.toLowerCase() === selected ||
          newPrice === selected ||
          title.toLowerCase() === selected
      );
    }
    //Passing the the filteredProducts details to cards throug props

    if (Array.isArray(filteredProducts)) {
      return filteredProducts.map((product, index) => (
        <Card
          key={index}
          img={product.img}
          title={product.title}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
          company={product.company}
          color={product.color}
          category={product.category}
        />
      ));
    } else {
      console.log("null bro");
      return null;
    }
  }

  //Collecting the result

  const result = filteredData(products, query, selectedCategory);

  return (
    <>
      <div className="wrapper">
        <div>
          <Sidebar handelChange={handelChange} />
        </div>
        <div>
          <Nav query={query} handleInputChange={handleInputChange} />
          <Recomended OnhandleClick={OnhandleClick} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
}

export default App;
