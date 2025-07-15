import { useEffect, useState } from "react";
import "./LoginModal.css";

const LoginModal = ({
  activeModal,
  closeActiveModal,
  handleLogin,
  newUserRegistration,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
    setData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!activeModal) {
      setData({ email: "", password: "" });
    }
  }, [activeModal]);

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

        {/* login form  */}
        <h2 className="modal__title">Log in</h2>
        <form
          onSubmit={handleSubmit}
          className="modal__form"
        >
          <label
            htmlFor="email"
            className="modal__label"
          >
            Email*
          </label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            required
            value={data.email}
            onChange={handleChange}
            className="modal__input"
          />
          <label
            htmlFor="password"
            className="modal__label"
          >
            Password*
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={data.password}
            onChange={handleChange}
            className="modal__input"
          />
          <div className="modal__button-container">
            <button
              type="submit"
              className="modal__submit"
            >
              Log In
            </button>
            <button
              onClick={newUserRegistration}
              type="button"
              className="modal__button modal__button-gray"
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
