import Brand from "./Brand.js";
import Category from "./Category.js";
import "../styles/filter.css";


export default function Filter(props) {
  return (
    <div>
      <div>
        <div className="containerFilter">
          {props.filter === "category" ? (
            <Category />
          ) : (
            <Brand />
          )}
        </div>
      </div>
    </div>
  );
}
