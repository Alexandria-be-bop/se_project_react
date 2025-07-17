import { useContext, useState, useEffect, useId } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./EditProfileModal.css";

export default function EditProfileModal({
  activeModal,
  closeActiveModal,
  handleProfileUpdate,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [data, setData] = useState({ name: "", avatar: "" });
  const [avatarError, setAvatarError] = useState("");

  const nameId = useId();
  const avatarId = useId();

  useEffect(() => {
    if (activeModal) {
      setData({ name: currentUser.name, avatar: currentUser.avatar });
    } else {
      setAvatarError("");
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
  };

  const isAvatarValid = (avatar) => {
    try {
      new URL(avatar);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid = data.name.trim() && isAvatarValid(data.avatar);

  const handleAvatarValidation = (e) => {
    if (isAvatarValid(e.target.value)) {
      setAvatarError("");
    } else {
      setAvatarError("Invalid avatar");
    }
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={onProfileUpdate}
      disabled={!isDataChanged || !isFormValid}
    >
      <label
        htmlFor={nameId}
        className="modal__label"
      >
        Name*
        <input
          id={nameId}
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
        htmlFor={avatarId}
        className="modal__label"
      >
        Avatar URL*
        <input
          id={avatarId}
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          value={data.avatar}
          onChange={handleChange}
          className="modal__input"
          required
          onBlur={handleAvatarValidation}
        />
        <p className={`modal__errorMessage`}>{avatarError}</p>
      </label>
    </ModalWithForm>
  );
}
