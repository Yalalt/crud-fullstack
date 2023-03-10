import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/loader.css";

export default function Loader() {
  const [loadPage, setLoadPage] = useState(2);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);
 
  useEffect(() => {
    getProductsData();
  }, [loadPage]);

  const getProductsData = async () => {
    try {
      const rows = await axios.get(`http://localhost:3008/product/?prod_no=${loadPage}`);
      setProductsData(rows.data);
  
      console.count("Data ");
      console.log("ROWS ==> ", rows.data);
    } catch (error) {
      console.log("Error uusllee... ", error);
    }
  };

  const loadMoreProduct = () => {
    setLoadPage((prev) => prev + 2);
  };

  return (
    <div>
      <div>
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
          <div>
            <button className="btn" onClick={() => loadMoreProduct()}>
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
