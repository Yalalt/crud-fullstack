import "../styles/products.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [productsData, setProductsData] = useState([]);

  // console.clear();
  // console.log(data);
  // console.log(data[4].data);

  const getProductsData = async () => {
    const rows = await axios.get("http://localhost:3008/product", (res, error) => {
      if(error) {
        console.log("Error uusllee ", error);
      }
    });
    setProductsData(rows.data);
    console.log("ROWS ==> ", rows.data);
  }

  useEffect(() => {
    getProductsData();
  }, []);

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
