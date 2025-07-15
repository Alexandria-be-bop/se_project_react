import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  onCardClick,
  clothingItems,
  onButtonClick,
  editProfile,
  handleLogout,
  handleCardLike,
}) {
  return (
    <>
      <div className="profile">
        <section className="profile__sidebar">
          <SideBar
            editProfile={editProfile}
            handleLogout={handleLogout}
          />
        </section>
        <section className="profile__clothing_items">
          <ClothesSection
            onCardClick={onCardClick}
            clothingItems={clothingItems}
            onButtonClick={onButtonClick}
            handleCardLike={handleCardLike}
          />
        </section>
      </div>
    </>
  );
}
export default Profile;
