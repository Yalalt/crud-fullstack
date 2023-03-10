import "../styles/navbar.css";

export default function Navbar(props) {
  const { menuItem, current, index, currentCompHandler } = props;

  // console.clear();
  // console.count("Line ");
  // console.log("menu ITEM ...", menuItem);
  // console.log("menu current ...", current);
  // console.log("Local storage ==> ", localStorage.getItem("menuVal"));

  return (
    <div className="containerNavbar">
      <button
        key={index + 1}
        onClick={() => currentCompHandler(menuItem)}
        className={
          menuItem.value === current.value ? "activeBtn" : "inactiveBtn"
        }
      >
        {menuItem.name}
      </button>
    </div>
  );
}
