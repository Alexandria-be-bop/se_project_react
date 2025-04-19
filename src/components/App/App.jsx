import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../main/main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
      {/* Garment Modal */}
      <ModalWithForm title={"New garment"} buttonText={"Add garment"}>
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
              name="Temp"
              type="radio"
              className="modal__radio-input"
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
              name="Temp"
              type="radio"
              className="modal__radio-input"
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
              name="Temp"
              type="radio"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
