import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/addproduct.css";

export default function AddProduct() {
  const notifySuccess = () => {
    toast.success("Successfully saved product");
  }

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
            <button onClick={notifySuccess}>Add Product + </button>
          </div>
          <div className="addProductForm">
            <h3>Add Category</h3>
          </div>
          <div className="addProductForm">
            <input type="text" name="addCategory" className="addCategoryInput" placeholder="Category" />
          </div>
          <div className="addProductForm">
            <button onClick={notifySuccess}>Add Category + </button>
          </div>
          <div className="addProductForm">
            <input type="text" name="addBrand" className="addCategoryInput" placeholder="Brand" />
          </div>
          <div className="addProductForm">
            <button onClick={notifySuccess}>Add Brand + </button>
          </div>
          <ToastContainer position='bottom-right' />


        </div>
      </div>
    </div>
  );
}
