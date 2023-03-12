import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../styles/brand.css";

export default function Brand() {
  const [brands, setBrands] = useState();
  const [products, setProducts] = useState();
  const refBrand = useRef();

  useEffect(() => {
    getBrands();
  }, []);

  const getBrandByData = async (e) => {
    e.preventDefault();
    const id = refBrand.current.value;
    console.log("ID --> " , id);

    const rows = await axios.get(
      `http://localhost:3008/product/brand/?name=${id}`,
      (res, error) => {
        if (error) {
          console.log("Error uusllee ", error);
        }
      }
    );
    setProducts(rows.data);
    console.count("PRODUCTS ");
    console.log("ROWS ==> ", rows.data);
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



  return (
    <div>
      <div>
        <div className="containerBrand">
          <h4> Brand </h4>
          <div className="addProductForm">
            <select
              name="optionBrands"
              className="optionAddProduct"
              ref={refBrand}            >
              {brands &&
                brands.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <button onClick={(e) => getBrandByData(e)}>Find</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
                <th scope="col">Sale</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
            {products && products.map((el, index) => {
                return <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>URL</td>
                  <td>{el.name}</td>
                  <td>{el.price}$</td>
                  <td>{el.brand_name}</td>
                  <td>{el.cat_name}</td>
                  <td>{el.sale}%</td>
                  <td>
                    <button className="editBtn">Edit</button> / <button className="deleteBtn">Delete</button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
