import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/assets/icons/logo.png";
import Hamburger from "../../../public/assets/icons/hamburger.png";
import Close from "../../../public/assets/icons/close.png";
import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./styles.sass";

const Header = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  const isMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  useEffect(() => {
    let sections = document.querySelectorAll(".section") as any;
    sections = Array.from(sections);

    window.addEventListener("wheel", () => {
      for (let index = 0; index < sections.length; index++) {
        if (window.scrollY <= sections[index].offsetTop) {
          if (window.location.pathname !== "/" + sections[index].id) {
            history.pushState({}, "", "/" + sections[index].id);
            setCurrentLocation("/" + sections[index].id);
          }
          break;
        }
      }
    });

    const section = document.getElementById(location.pathname.replace("/", ""));
    if (section) {
      setCurrentLocation("/" + section.id);
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "instant",
      });
    } else {
      setCurrentLocation("/");
    }
  }, []);

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
    <header className="header">
      {isMediumScreen ? (
        <div className="navbar">
          <div onClick={() => changeSection()} className="logo">
            <img src={Logo} alt="logo" />
            <Link to="/">Pelican Town</Link>
          </div>
          <nav className="menu">
            <ul>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/" ? "active" : ""}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/about" ? "active" : ""}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/media" ? "active" : ""}
                  to="/media"
                >
                  Media
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/platforms" ? "active" : ""}
                  to="/platforms"
                >
                  Platforms
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={
                    currentLocation === "/requirements" ? "active" : ""
                  }
                  to="/requirements"
                >
                  Requirements
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/languages" ? "active" : ""}
                  to="/languages"
                >
                  Languages
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/creator" ? "active" : ""}
                  to="/creator"
                >
                  Creator
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/reviews" ? "active" : ""}
                  to="/reviews"
                >
                  Reviews
                </Link>
              </li>
              <li onClick={() => changeSection()}>
                <Link
                  className={currentLocation === "/contact" ? "active" : ""}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <button
          className="hamburguerBtn"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img src={Hamburger} alt="" />
        </button>
      )}

      {!isMediumScreen && isMenuToggled && (
        <nav className="navbar-mobile">
          <button
            className="hamburguerBtn"
            onClick={() => {
              changeSection();
              setIsMenuToggled(!isMenuToggled);
            }}
          >
            <img src={Close} alt="" />
          </button>
          <ul>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link className={currentLocation === "/" ? "active" : ""} to="/">
                Home
              </Link>
            </li>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link
                className={currentLocation === "/about" ? "active" : ""}
                to="/about"
              >
                About
              </Link>
            </li>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link
                className={currentLocation === "/media" ? "active" : ""}
                to="/media"
              >
                Media
              </Link>
            </li>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link
                className={currentLocation === "/requirements" ? "active" : ""}
                to="/requirements"
              >
                Requirements
              </Link>
            </li>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link
                className={currentLocation === "/languages" ? "active" : ""}
                to="/languages"
              >
                Languages
              </Link>
            </li>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link
                className={currentLocation === "/creator" ? "active" : ""}
                to="/creator"
              >
                Creator
              </Link>
            </li>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link
                className={currentLocation === "/reviews" ? "active" : ""}
                to="/reviews"
              >
                Reviews
              </Link>
            </li>
            <li
              onClick={() => {
                changeSection();
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Link
                className={currentLocation === "/contact" ? "active" : ""}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
