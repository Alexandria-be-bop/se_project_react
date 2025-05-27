import { deleteItems, getItems } from "../../utils/api";
import "./DeleteItemModal.css";

function DeleteItemModal({ isOpen, closeActiveModal, id, updateClothingItems }) {
  const handleDelete = () => {
    deleteItems(id).then(() => {
      getItems().then((updatedItems) => {
        updateClothingItems(updatedItems);
      });
      closeActiveModal();
    });
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_delete-modal">
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
        <p className="modal__text_type_warning">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <div className="modal__actions">
          <button
            onClick={handleDelete}
            className="modal__button modal__button-delete"
          >
            Yes, delete item
          </button>
          <button
            onClick={closeActiveModal}
            className="modal__button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteItemModal;
