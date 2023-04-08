import HeroImage from "../images/image-product-mobile.jpg";

const Header = () => {
  return (
    <div>
      <img className="hero-image" src={HeroImage} alt="perfume bottle" />
    </div>
  );
};

export default Header;
