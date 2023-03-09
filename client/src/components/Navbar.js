import "../styles/navbar.css";

export default function Navbar(props) {
    const {menuItem, current, index, currentCompHandler} = props;

    // <Navbar menuItem={menu} key={index} current={current} setCurrent={setCurrent} />

  return (
    <div>
      <div>
        <div className="containerNavbar">
        <button key={index + 1} onClick={() => currentCompHandler(menuItem, index)} className={ menuItem.value === "all" || menuItem.value === current.value ? "activeBtn": "inactiveBtn"}>
              {menuItem.name}
            </button>
        </div>
      </div>
    </div>
  );
}
