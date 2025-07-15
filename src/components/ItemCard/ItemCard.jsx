import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const handleCardClick = () => onCardClick(item);

  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.includes(currentUser.currentUser._id);

  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__title">{item.name}</h2>
        {currentUser.currentUser._id ? (
          <button
            className={`card__like-btn ${
              isLiked ? "card__like-btn-liked" : ""
            }`}
            onClick={() => handleCardLike({ id: item._id, isLiked })}
            aria-label={isLiked ? "Unlike item" : "Like item"}
          />
        ) : null}
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClick}
      />
    </div>
  );
}

export default ItemCard;
