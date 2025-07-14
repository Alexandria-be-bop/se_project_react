import { useContext } from "react";
import "../SideBar/SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ editProfile, handleLogout }) {
  const { currentUser } = useContext(CurrentUserContext);

  const logout = () => {
    handleLogout();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img
          src={currentUser.avatar}
          alt="User avatar"
          className="sidebar__avatar"
        ></img>
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__body">
        <button
          type="button"
          className="modal__button"
          onClick={editProfile}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="modal__button"
          onClick={logout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
export default SideBar;
