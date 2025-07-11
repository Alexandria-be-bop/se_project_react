import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
  onSubmit,
}) {
  return (
    <div className={`modal ${activeModal && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
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
        <form
          onSubmit={onSubmit}
          className="modal__form"
        >
          {children}
          <button
            type="submit"
            className="modal__submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
