import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

export default function LoginModal({
  activeModal,
  closeActiveModal,
  handleLogin,
  newUserRegistration,
  loginError,
  clearLoginError,
}) {
  const [data, setData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
    setData({ email: "", password: "" });
  };

  // clear fields when not active
  useEffect(() => {
    if (!activeModal) {
      setEmailError("");
      clearLoginError();
      setData({ email: "", password: "" });
    }
  }, [activeModal, clearLoginError]);

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = isEmailValid(data.email) && data.password.trim();

  const handleEmailValidation = (e) => {
    if (isEmailValid(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email");
    }
  };
  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      altButtonText="or Sign Up"
      altButtonOnClick={newUserRegistration}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      disabled={!isFormValid}
    >
      <label
        htmlFor="email"
        className="modal__label"
      >
        Email*
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="modal__input"
          required
          onBlur={handleEmailValidation}
        />
        <p className={`modal__errorMessage`}>{emailError}</p>
      </label>

      <label
        htmlFor="password"
        className="modal__label"
      >
        Password*
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className="modal__input"
          required
        />
        <p className={`modal__errorMessage`}>{loginError}</p>
      </label>
    </ModalWithForm>
  );
}
