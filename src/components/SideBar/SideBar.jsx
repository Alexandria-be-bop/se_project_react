import avatar from "../../assets/avatar.png";
import "../SideBar/SideBar.css"

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <img
          src={avatar}
          alt="Default avatar"
          className="sidebar__avatar"
        ></img>
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </>
  );
}
export default SideBar;
