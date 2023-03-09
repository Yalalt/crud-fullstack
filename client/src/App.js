import React, { useEffect, useState } from "react";
import Products from "./components/Products.js";
import Loader from "./components/Loader.js";
import Filter from "./components/Filter.js";
import AddProduct from "./components/AddProduct.js";
import "./App.css";
import Navbar from "./components/Navbar.js";

const buttonMenus = [
  {
    name: "All product",
    value: "all",
    components: <Products />
  },
  {
    name: "Load more",
    value: "more",
    components: <Loader />
  },
  {
    name: "Filter by category",
    value: "category",
    components: <Filter filter="category" />
  },
  {
    name: "Filter by brand",
    value: "brand",
    components: <Filter filter="brand" />
  },
  {
    name: "Add product",
    value: "add",
    components: <AddProduct />
  },
];

function App() {
  const [current, setCurrent] = useState();
  let currentVal;

  useEffect(() => {
    if(localStorage.getItem("menuVal")) {
      currentVal = localStorage.getItem("menuVal");
      console.log(buttonMenus.find(currentVal));
    } else {
      setCurrent(buttonMenus[0]);
    }
  },[]);

  function currentCompHandler(menu, index) {
    setCurrent(menu);
    localStorage.setItem("menuVal", menu.value);
  }

// 

  return (
    <div className="App">
      <div className="containerNavbar">
        {buttonMenus.map((menu, index) => {
          return (
            <Navbar menuItem={menu} key={index} index={index} current={current}  currentCompHandler={currentCompHandler} />
          )
        })}
        <div>
          {
            current.components
          }
        </div>
      </div>
    </div>
  );
}

export default App;
