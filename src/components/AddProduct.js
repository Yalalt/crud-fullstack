import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/addproduct.css";

export default function AddProduct() {
  const [categories, setCategories] = useState();
  const [brands, setBrands] = useState();
  const addCatInputRef = useRef(null);
  const addBrandInputRef = useRef(null);

  const refName = useRef();
  const refPrice = useRef();
  const refImageUrl = useRef();
  const refStock = useRef();
  const refSale = useRef();
  const refDesc = useRef();
  const refBrand = useRef();
  const refCategory = useRef();

  useEffect(() => {
    getCategoriesData();
    getBrands();
  }, []);

  const getCategoriesData = async () => {
    try {
      const rows = await axios.get("http://localhost:3008/category");

      setCategories([...rows.data.result]);
      // console.log("Categories list, Addproduct Window ==> ", rows.data.result);
    } catch (error) {
      console.log("Error uusllee ", error);
    }
  };

  const getBrands = async () => {
    try {
      const rows = await axios.get("http://localhost:3008/brand");

      setBrands([...rows.data.result]);

      console.log("Brands list, Addproduct Window ==> ", rows.data.result);
    } catch (error) {
      console.log("Error uusllee brand not found: ", error);
    }
  };

  const addProductInput = (e) => {
    e.preventDefault();

    const newProduct = {
      name: refName.current.value,
      brandId: refBrand.current.value,
      categoryId: refCategory.current.value,
      desc: refDesc.current.value,
      sale: refSale.current.value,
      price: refPrice.current.value,
      stock: refStock.current.value,
      image: refImageUrl.current.value,
    };

    console.log("Product REFS is ==> ", newProduct);
    axios
      .post("http://localhost:3008/product", newProduct)
      .then((response) => {
        toast.success("Successfully saved product");
        console.log(response);
      });
  };

  const addCategoryInput = (e) => {
    e.preventDefault();
    console.log("REF is ==> ", addCatInputRef.current.value);

    const newCategory = { name: addCatInputRef.current.value };
    axios
      .post("http://localhost:3008/category", newCategory)
      .then((response) => {
        toast.success("Successfully saved category");
        getCategoriesData();
      });
  };

  const addBrandInput = (e) => {
    e.preventDefault();
    console.log("REF is ==> ", addBrandInputRef.current.value);

    const newBrand = { name: addBrandInputRef.current.value };
    axios.post("http://localhost:3008/brand", newBrand).then((response) => {
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
              ref={refName}
              type="text"
              name="username"
              placeholder="Name"
              className="addProductInputValue"
            />
            <input
              ref={refPrice}
              type="text"
              name="price"
              placeholder="Price"
              className="addProductInputValue"
            />
          </div>
          <div className="addProductForm">
            <input
              ref={refImageUrl}
              type="text"
              name="image"
              placeholder="Image"
              className="addProductInputValue"
            />
            <input
              ref={refStock}
              type="number"
              name="stock"
              placeholder="Stock product"
              className="addProductInputValue"
            />
          </div>
          <div className="addProductForm">
            <input
              ref={refSale}
              type="number"
              name="sale"
              placeholder="Sale"
              className="addProductInputValue"
            />
            <input
              ref={refDesc}
              type="text"
              name="description"
              placeholder="Description"
              className="addProductInputValue"
            />
          </div>
          <div className="addProductForm">
            <select name="optionBrands" className="optionAddProduct" ref={refBrand} >
              {brands &&
                brands.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="addProductForm">
            <select className="optionAddProduct" ref={refCategory}>
              {categories &&
                categories.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="addProductForm">
            <button onClick={(e) => addProductInput(e)}>Add Product + </button>
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
