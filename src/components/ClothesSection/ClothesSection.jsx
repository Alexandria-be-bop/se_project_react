import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ onCardClick, clothingItems, onButtonClick }) {
  // const userCards = cards.filter(card => card.owner === CurrentUserContext?._id);
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__text">Your items</p>
        <button
          onClick={onButtonClick}
          type="button"
          className="clothes-section__button"
        >
          + Add new
        </button>
      </div>
      {/* display all clothing */}
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
