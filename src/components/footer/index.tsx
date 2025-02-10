import "./styles.sass";
import Logo from "../../../public/assets/icons/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [currentLocation, setCurrentLocation] = useState("");

  const changeSection = () => {
    setTimeout(() => {
      const section = document.getElementById(
        window.location.pathname.replace("/", "")
      );
      if (section) {
        setCurrentLocation("/" + section.id);
        window.scrollTo({
          top: section.offsetTop - 100,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setCurrentLocation("/");
      }
    });
  };

  return (
    <footer className="footer">
      <div onClick={() => changeSection()} className="logo">
        <img src={Logo} alt="logo" />
        <Link to="/">Pelican Town</Link>
      </div>
      <p>Copyright &copy; Pelican Town {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
