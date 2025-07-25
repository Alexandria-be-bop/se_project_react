import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

export default function AddItemModal({
  activeModal,
  closeActiveModal,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [urlError, setUrlError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit(name, imageUrl, weather);
    setName("");
    setImageUrl("");
    setWeather("");
  };

  const isUrlValid = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid = name.trim() && isUrlValid(imageUrl) && weather.trim();

  const handleUrlValidation = (e) => {
    if (isUrlValid(e.target.value)) {
      setUrlError("");
    } else {
      setUrlError("Invalid avatar");
    }
  };
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      disabled={!isFormValid}
    >
      <label
        htmlFor="name"
        className="modal__label"
      >
        Name
        <input
          id="name"
          type="text"
          className="modal__input"
          placeholder="Name"
          maxLength="12"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label
        htmlFor="imageUrl"
        className="modal__label"
      >
        Image
        <input
          id="imageUrl"
          type="url"
          className="modal__input"
          placeholder="Image Url"
          required
          onChange={handleImageChange}
          value={imageUrl}
          onBlur={handleUrlValidation}
        />
        <p className={`modal__errorMessage`}>{urlError}</p>
      </label>

      {/* radio */}
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          type="radio"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="hot"
            value={"hot"}
            name="Temp"
            type="radio"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label
          htmlFor="warm"
          type="radio"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="warm"
            value={"warm"}
            name="Temp"
            type="radio"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          type="radio"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="cold"
            value={"cold"}
            name="Temp"
            type="radio"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
