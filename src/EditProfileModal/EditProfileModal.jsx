import { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./EditProfileModal.css";

const currentUser = CurrentUserContext;
const EditProfileModal = ({ activeModal, closeActiveModal }) => {
  const [data, setData] = useState({
    username: currentUser.username || "",
    avatarUrl: currentUser.avatarUrl || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`modal ${activeModal ? "modal_opened" : ""}`}>
      {/* close button */}
      <div className="modal__content">
        <button
          onClick={closeActiveModal}
          className="modal__close-btn"
          type="button"
        >
          <img
            src="../src/assets/close-btn.svg"
            alt="x"
          />
        </button>

        {/* Change profile data form  */}
        <h2 className="modal__title">Change profile data</h2>
        <form className="modal__form">
          <label
            htmlFor="username"
            className="modal__label"
          >
            Name*
          </label>
          <input
            id="username"
            type="text"
            placeholder="Name"
            value={data.username}
            onChange={handleChange}
            className="modal__input"
            required
          />
          <label
            htmlFor="avatarUrl"
            className="modal__label"
          >
            Avatar URL*
          </label>
          <input
            id="avatarUrl"
            type="url"
            placeholder="Avatar URL"
            value={data.avatarUrl}
            onChange={handleChange}
            className="modal__input"
            required
          />
          <div className="modal__button-container">
            <button
              type="submit"
              className="modal__submit"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
