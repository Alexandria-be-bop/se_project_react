import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";
import { addItems } from "../../utils/api";

export default function AddItemModal({
  isOpen,
  closeActiveModal,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const HandleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const additem = {
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    };
    onAddItemModalSubmit(name, imageUrl, weather);
    setName("");
    setImageUrl("");
    setWeather("");
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
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
        />
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
            onChange={HandleWeatherChange}
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
            onChange={HandleWeatherChange}
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
            onChange={HandleWeatherChange}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
