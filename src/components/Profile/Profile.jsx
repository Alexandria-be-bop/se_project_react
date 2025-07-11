import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ onCardClick, clothingItems, onButtonClick, editProfile }) {
  return (
    <>
      <div className="profile">
        <section className="profile__sidebar">
          <SideBar 
          editProfile={editProfile}
          />
        </section>
        <section className="profile__clothing_items">
          <ClothesSection
            onCardClick={onCardClick}
            clothingItems={clothingItems}
            onButtonClick={onButtonClick}
          />
        </section>
      </div>
    </>
  );
}
export default Profile;
