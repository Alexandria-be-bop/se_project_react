import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({
  onCardClick,
  clothingItems,
  onButtonClick,
  handleCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

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
        {clothingItems
          .filter((item) => item.owner == currentUser.currentUser._id)
          .map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              handleCardLike={handleCardLike}
            />
          ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
