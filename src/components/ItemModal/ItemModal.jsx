import "./ItemModal.css";

function ItemModal({
  activeModal,
  closeActiveModal,
  selectedCard,
  addDeleteItemModal,
}) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
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
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal_image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>
        </div>
        <button
          onClick={addDeleteItemModal}
          className="modal__Delete-btn"
          type="button"
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
