import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./EditProfileModal.css";
import Profile from "../components/Profile/Profile";

const EditProfileModal = ({
  activeModal,
  closeActiveModal,
  handleProfileUpdate,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  const onProfileUpdate = (event) => {
    event.preventDefault();
    handleProfileUpdate(data);
    setData({ name: "", avatar: "" });
  };

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
        <form
          onSubmit={onProfileUpdate}
          className="modal__form"
        >
          <label
            htmlFor="name"
            className="modal__label"
          >
            Name*
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            className="modal__input"
            required
          />
          <label
            htmlFor="avatar"
            className="modal__label"
          >
            Avatar URL*
          </label>
          <input
            id="avatar"
            type="url"
            name="avatar"
            placeholder="Avatar URL"
            value={data.avatar}
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
