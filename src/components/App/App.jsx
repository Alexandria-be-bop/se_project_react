import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import {
  coordinates,
  APIkey,
  // defaultClothingItems,
} from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import Profile from "../Profile/Profile";
import { getItems, addItems } from "../../utils/api";
import * as auth from "../../utils/api";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = ({ username, password }) => {
    // If username or password empty, return without sending a request.
    if (!username || !password) {
      return;
    }

    auth
      .authorize(username, password)
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        setIsLoggedIn(true);
        closeActiveModal();
        console.log(data);
      })
      .catch(console.error);
  };

  const handleRegistration = ({ email, password, name, avatarUrl }) => {
    auth
      .register(email, password, name, avatarUrl)
      .then(() => {
        // TODO: handle succesful registration
      })
      .catch(console.error);
  };

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {},
    city: "",
    isDay: true,
  });

  const [clothingItems, SetClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const onCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const newUserRegistration = () => {
    setActiveModal("register");
  };

  const addDeleteItemModal = () => {
    setActiveModal("remove-garment");
  };

  const addGarmentModal = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = (name, imageUrl, weather) => {
    // remove the no id error - Temp
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    addItems(name, imageUrl, weather).then((item) => {
      SetClothingItems([item, ...clothingItems]);
      closeActiveModal();
    });
  };

  // API weather lookup
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // API Clothing lookup
  useEffect(() => {
    getItems()
      .then((data) => {
        SetClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              onButtonClick={addGarmentModal}
              weatherData={weatherData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={onCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={onCardClick}
                      clothingItems={clothingItems}
                      onButtonClick={addGarmentModal}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="*" />
            </Routes>
          </div>
          {/* Modals */}
          <LoginModal
            activeModal={activeModal === "login-modal"}
            closeActiveModal={closeActiveModal}
            onLogin={handleLogin}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            handleRegistration={handleRegistration}
            closeActiveModal={closeActiveModal}
            newUserRegistration={newUserRegistration}
          />

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            closeActiveModal={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />

          <DeleteItemModal
            isOpen={activeModal === "remove-garment"}
            closeActiveModal={closeActiveModal}
            id={selectedCard._id}
            updateClothingItems={SetClothingItems}
          />

          <ItemModal
            activeModal={activeModal}
            closeActiveModal={closeActiveModal}
            selectedCard={selectedCard}
            addDeleteItemModal={addDeleteItemModal}
          />
          <Footer />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </BrowserRouter>
  );
}

export default App;
