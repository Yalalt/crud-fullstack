import "../styles/products.css";
import { useReactTable} from "@tanstack/react-table";


export default function Products() {

    const table = useReactTable(options);

  return (
    <div>
      <div>
        <div className="containerProducts">
          {table}
        </div>
      </div>
    </div>
  );
}
