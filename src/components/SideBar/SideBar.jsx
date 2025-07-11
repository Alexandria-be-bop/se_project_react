import { useContext } from "react";
import avatar from "../../assets/avatar.png";
import "../SideBar/SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ editProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser?.avatar;
  const name = currentUser?.name;
console.log(CurrentUserContext)
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <img
          src={avatar}
          alt="User avatar"
          className="sidebar__avatar"
        ></img>
        <p className="sidebar__username">name</p>
      </div>
      <div className="sidebarBody">
        <button
          type="button"
          className="modal__button"
          onClick={editProfile}
        >
          Change profile data
        </button>
      </div>
    </div>
  );
}
export default SideBar;
