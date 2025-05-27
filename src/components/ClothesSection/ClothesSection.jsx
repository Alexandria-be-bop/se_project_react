import ItemCard from "../ItemCard/ItemCard";
import "../ClothesSection/ClothesSection.css";

function ClothesSection({ onCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes__header">
        <p className="clothes__text">Your items</p>
        <button className="clothes__button">+ Add new</button>
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
