import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/category.css";

const CATEGORY = [1000, 1001, 1002, 1003, 1004, 1005, 1006];

export default function Category() {
  const [productsData, setProductsData] = useState();

  // http://localhost:3008/product/category/?name=1001

  const getProductsData = async (id) => {
    try {
      const rows = await axios.get(
        `http://localhost:3008/product/category/?name=${CATEGORY[id]}`
      );
      setProductsData(rows.data);
      console.log("ROWS ==> ", rows.data);
    } catch (error) {
      console.log("Error uusllee ", error);
    }
  };

  return (
    <div>
      {productsData ? (
        <div className="containerProducts">
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
              {productsData.map((el, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>URL</td>
                    <td>{el.name}</td>
                    <td>{el.price}$</td>
                    <td>{el.brand_name}</td>
                    <td>{el.cat_name}</td>
                    <td>{el.sale}%</td>
                    <td>
                      <button className="editBtn">Edit</button> /{" "}
                      <button className="deleteBtn">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div className="cardboxContainer">
            <div className="cardBox" onClick={() => getProductsData(3)}>
              <div className="cardBoxContent">
                <h3>Cameras</h3>
                <img src="#" alt="image category" />
              </div>
              <div className="circle"></div>
            </div>
            <div className="cardBox" onClick={() => getProductsData(1)}>
              <div className="cardBoxContent">
                <h3>Computers</h3>
                <img src="#" alt="image category" />
              </div>
              <div className="circle"></div>
            </div>
            <div className="cardBox" onClick={() => getProductsData(0)}>
              <div className="cardBoxContent">
                <h3>Television</h3>
                <img src="#" alt="image category" />
              </div>
              <div className="circle"></div>
            </div>
            <div className="cardBox" onClick={() => getProductsData(6)}>
              <div className="cardBoxContent">
                <h3>Home Furniture</h3>
                <img src="#" alt="image category" />
              </div>
              <div className="circle"></div>
            </div>
            <div className="cardBox" onClick={() => getProductsData(2)}>
              <div className="cardBoxContent">
                <h3>Tablets</h3>
                <img src="#" alt="image category" />
              </div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
