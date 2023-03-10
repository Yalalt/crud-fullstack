import "../styles/products.css";
import data from "../ecommerce.json";

export default function Products() {
  console.clear();
  console.log(data);
  console.log(data[4].data);

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
              {data[4].data.map((el, index) => {
                return <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>URL</td>
                  <td>{el.name}</td>
                  <td>{el.price}$</td>
                  <td>{el.brand_id}</td>
                  <td>{el.category_id}</td>
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
