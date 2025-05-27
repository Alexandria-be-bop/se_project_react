import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ onCardClick, clothingItems }) {
  return (
    <>
      <div className="profile">
        <section className="profile__sidebar">
          <SideBar />
        </section>
        <section className="profile__clothing_items">
          <ClothesSection
            onCardClick={onCardClick}
            clothingItems={clothingItems}
          />
        </section>
      </div>
    </>
  );
}
export default Profile;
