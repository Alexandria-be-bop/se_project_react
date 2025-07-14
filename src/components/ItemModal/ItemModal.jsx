import { useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  closeActiveModal,
  selectedCard,
  addDeleteItemModal,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner === currentUser.currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `modal__Delete-btn ${
    isOwn ? "" : "modal__delete-btn_hidden"
  }`;

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
          className={`${itemDeleteButtonClassName}`}
          type="button"
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
