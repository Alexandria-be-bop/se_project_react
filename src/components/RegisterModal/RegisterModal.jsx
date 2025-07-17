import { useId, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

export default function RegisterModal({
  handleRegistration,
  activeModal,
  closeActiveModal,
  onLoginClick,
}) {
  const [emailError, setEmailError] = useState("");
  const [avatarError, setAvatarError] = useState("");

  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();
  const avatarId = useId();

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onRegistration = (e) => {
    e.preventDefault();
    handleRegistration(data);
    setData({ email: "", password: "", name: "", avatar: "" });
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isAvatarValid = (avatar) => {
    try {
      new URL(avatar);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid =
    isEmailValid(data.email) &&
    data.password.trim() &&
    data.name.trim() &&
    isAvatarValid(data.avatar);

  const handleEmailValidation = (e) => {
    if (isEmailValid(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email");
    }
  };

  const handleAvatarValidation = (e) => {
    if (isAvatarValid(e.target.value)) {
      setAvatarError("");
    } else {
      setAvatarError("Invalid avatar");
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      altButtonText="or Log In"
      altButtonOnClick={onLoginClick}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={onRegistration}
      disabled={!isFormValid}
    >
      <label
        htmlFor={emailId}
        className="modal__label"
      >
        Email*
        <input
          id={emailId}
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="modal__input"
          required
          onBlur={handleEmailValidation}
          autoComplete="email"
        />
        <p className={`modal__errorMessage`}>{emailError}</p>
      </label>

      <label
        htmlFor={passwordId}
        className="modal__label"
      >
        Password*
        <input
          id={passwordId}
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className="modal__input"
          required
          autoComplete="new-password"
        />
      </label>

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
          autoComplete="name"
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
