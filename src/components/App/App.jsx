import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../main/main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const addGarmentModal = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          onButtonClick={addGarmentModal}
          weatherData={weatherData}
        />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
        />
      </div>
      {/* Garment Modal */}
      <ModalWithForm
        title={"New garment"}
        buttonText={"Add garment"}
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
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
      <ItemModal
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        selectedCard={selectedCard}
        onButtonClick={closeActiveModal}
      />
    </div>
  );
}

export default App;
