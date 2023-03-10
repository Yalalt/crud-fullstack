import { useState } from 'react';
import "../styles/loader.css";


export default function Loader() {
  const [loadPage, setLoadPage] = useState(5);

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
              <tr>
                <th scope="row">1</th>
                <td>URL</td>
                <td>Iphone 13 pro</td>
                <td>3.500.000$</td>
                <td>Apple</td>
                <td>Phone</td>
                <td>10%</td>
                <td><button className="editBtn">Edit</button> / <button className="deleteBtn">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>URL</td>
                <td>Iphone 13 pro</td>
                <td>3.500.000$</td>
                <td>Apple</td>
                <td>Phone</td>
                <td>10%</td>
                <td><button className="editBtn">Edit</button> / <button className="deleteBtn">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>URL</td>
                <td>Iphone 13 pro</td>
                <td>3.500.000$</td>
                <td>Apple</td>
                <td>Phone</td>
                <td>10%</td>
                <td><button className="editBtn">Edit</button> / <button className="deleteBtn">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>URL</td>
                <td>Iphone 13 pro</td>
                <td>3.500.000$</td>
                <td>Apple</td>
                <td>Phone</td>
                <td>10%</td>
                <td><button className="editBtn">Edit</button> / <button className="deleteBtn">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>URL</td>
                <td>Iphone 13 pro</td>
                <td>3.500.000$</td>
                <td>Apple</td>
                <td>Phone</td>
                <td>10%</td>
                <td><button className="editBtn">Edit</button> / <button className="deleteBtn">Delete</button></td>
              </tr>
            </tbody>
          </table>
          <div>
            <button className='btn'>Load more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
