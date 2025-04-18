import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <form className="modal__form">
          <h2 className="modal__title">New garment</h2>
          <button
            className="modal__close-btn"
            type="button"
          >
            <img
              src="../src/assets/close-btn.svg"
              alt="x"
            />
          </button>
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
          <button
            type="submit"
            className="modal__submit"
          >
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
