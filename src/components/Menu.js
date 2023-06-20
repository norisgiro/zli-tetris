import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <button className="Button" onClick={onClick}>
      ZLI TETRIS
    </button>
  </div>
);

export default Menu;
