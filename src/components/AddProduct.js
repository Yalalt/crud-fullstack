import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/addproduct.css";

export default function AddProduct() {
  const addCatInputRef = useRef(null);
  const addBrandInputRef = useRef(null);

  const addCategoryInput = (e) => {
    e.preventDefault();
    console.log("REF is ==> ", addCatInputRef.current.value);

    const newCategory = { name: addCatInputRef.current.value };
    axios
      .post("http://localhost:3008/category", newCategory)
      .then((response) => {
        
        toast.success("Successfully saved category");
      });
  };
  
  const addBrandInput = (e) => {
    e.preventDefault();
    console.log("REF is ==> ", addBrandInputRef.current.value);

    const newBrand = { name: addBrandInputRef.current.value };
    axios
      .post("http://localhost:3008/brand", newBrand)
      .then((response) => {
        console.log(response);

        toast.success("Successfully saved brand");
      });
  };

  return (
    <div>
      <div>
        <div className="containerAddProduct">
          <div className="addProductForm">
            <h3>Add Product</h3>
          </div>
          <div className="addProductForm">
            <input
              type="text"
              name="username"
              placeholder="Name"
              className="addProductInputValue"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="addProductInputValue"
            />
          </div>
          <div className="addProductForm">
            <input
              type="text"
              name="image"
              placeholder="Image"
              className="addProductInputValue"
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              className="addProductInputValue"
            />
          </div>
          <div className="addProductForm">
            <select className="optionAddProduct">
              <option>Laptops</option>
              <option>Appliances</option>
              <option>Tablet</option>
              <option>Telescope</option>
              <option>Cameras</option>
              <option>Electronics</option>
            </select>
          </div>
          <div className="addProductForm">
            <button onClick={addCategoryInput}>Add Product + </button>
          </div>
          <div className="addProductForm">
            <h3>Add Category</h3>
          </div>
          <div className="addProductForm">
            <input
              ref={addCatInputRef}
              type="text"
              name="addCategory"
              className="addCategoryInput"
              placeholder="Category"
            />
          </div>
          <div className="addProductForm">
            <button onClick={(e) => addCategoryInput(e)}>
              Add Category +{" "}
            </button>
          </div>
          <div className="addProductForm">
            <input
              ref={addBrandInputRef}
              type="text"
              name="addBrand"
              className="addCategoryInput"
              placeholder="Brand"
            />
          </div>
          <div className="addProductForm">
            <button onClick={addBrandInput}>Add Brand + </button>
          </div>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </div>
  );
}
