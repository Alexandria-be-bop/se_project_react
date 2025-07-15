import { useContext, useState, useEffect } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./EditProfileModal.css";

export default function EditProfileModal({
  activeModal,
  closeActiveModal,
  handleProfileUpdate,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [data, setData] = useState({ name: "", avatar: "" });

  useEffect(() => {
    if (activeModal) {
      setData({ name: currentUser.name, avatar: currentUser.avatar });
    } else {
      setData({ name: "", avatar: "" });
    }
  }, [activeModal, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const isDataChanged =
    data.name !== currentUser.name || data.avatar !== currentUser.avatar;

  const onProfileUpdate = (e) => {
    e.preventDefault();
    if (!isDataChanged) return;
    handleProfileUpdate(data);
    closeActiveModal();
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={onProfileUpdate}
      disabled={!isDataChanged}
    >
      <label
        htmlFor="name"
        className="modal__label"
      >
        Name*
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          className="modal__input"
          required
          maxLength={30}
        />
      </label>

      <label
        htmlFor="avatar"
        className="modal__label"
      >
        Avatar URL*
        <input
          id="avatar"
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          value={data.avatar}
          onChange={handleChange}
          className="modal__input"
          required
        />
      </label>
    </ModalWithForm>
  );
}
