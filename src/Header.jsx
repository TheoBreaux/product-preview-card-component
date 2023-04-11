import HeroImage from "../images/image-product-mobile.jpg";
import SideBarImage from "../images/image-product-desktop.jpg";

const Header = () => {
  return (
    <div>
      <div>
        <img
          className="sidebar-image-main"
          src={SideBarImage}
          alt="perfume bottle"
        />
      </div>
      <img className="hero-image" src={HeroImage} alt="perfume bottle" />
    </div>
  );
};

export default Header;
