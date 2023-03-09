import React, { useEffect, useState } from "react";
import Products from "./components/Products.js";
import Loader from "./components/Loader.js";
import Filter from "./components/Filter.js";
import AddProduct from "./components/AddProduct.js";
import Navbar from "./components/Navbar.js";
import "./App.css";

const buttonMenus = [
  {
    name: "All product",
    value: "all",
    components: <Products />,
  },
  {
    name: "Load more",
    value: "more",
    components: <Loader />,
  },
  {
    name: "Filter by category",
    value: "category",
    components: <Filter filter="category" />,
  },
  {
    name: "Filter by brand",
    value: "brand",
    components: <Filter filter="brand" />,
  },
  {
    name: "Add product",
    value: "add",
    components: <AddProduct />,
  },
];



function App() {
  const [current, setCurrent] = useState(buttonMenus[0]);


  useEffect(() => {
    const curr = localStorage.getItem("menuVal");
    if(curr) {
      const currMenu = buttonMenus.find(el => {
        if(el.value === curr) {
          return el;
        }
      });

      setCurrent(currMenu);
    }
  }, []);

  function currentCompHandler(menu) {
    setCurrent(menu);
    localStorage.setItem("menuVal", menu.value);
  }


  return (
    <div className="App">
      <div className="menuContainer">
        {buttonMenus.map((menu, index) => {
          return (
            <Navbar
              menuItem={menu}
              key={index}
              index={index}
              current={current}
              currentCompHandler={currentCompHandler}
            />
          );
        })}
      </div>
      <div>{current.components}</div>
    </div>
  );
}

export default App;
