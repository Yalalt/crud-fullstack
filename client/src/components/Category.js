import "../styles/category.css";

export default function Category() {
  return (
    <div>
      <div>
        <div className="cardboxContainer">
          <div className="cardBox">
            <div className="cardBoxContent">
              <h3>Cameras</h3>
              <img src="#" alt="image category" />
            </div>
            <div className="circle"></div>
          </div>
          <div className="cardBox">
            <div className="cardBoxContent">
              <h3>Laptops</h3>
              <img src="#" alt="image category" />
            </div>
            <div className="circle"></div>
          </div>
          <div className="cardBox">
            <div className="cardBoxContent">
              <h3>Television</h3>
              <img src="#" alt="image category" />
            </div>
            <div className="circle"></div>
          </div>
          <div className="cardBox">
            <div className="cardBoxContent">
              <h3>Home Furniture</h3>
              <img src="#" alt="image category" />
            </div>
            <div className="circle"></div>
          </div>
          <div className="cardBox">
            <div className="cardBoxContent">
              <h3>Phones</h3>
              <img src="#" alt="image category" />
            </div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
