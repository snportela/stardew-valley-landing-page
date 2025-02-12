import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/assets/icons/logo.png";
import Hamburger from "../../../public/assets/icons/hamburger.png";
import Close from "../../../public/assets/icons/close.png";
import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./styles.sass";
import MenuItem, { MenuItemInterface } from "./menu-item";

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

  const menuItems: MenuItemInterface[] = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/about",
      name: "About",
    },
    {
      route: "/media",
      name: "Media",
    },
    {
      route: "/platforms",
      name: "Platforms",
    },
    {
      route: "/requirements",
      name: "Requirements",
    },
    {
      route: "/languages",
      name: "Languages",
    },
    {
      route: "/creator",
      name: "Creator",
    },
    {
      route: "/reviews",
      name: "Reviews",
    },
    {
      route: "/contact",
      name: "Contact",
    },
  ];

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
              {menuItems.map((item) => {
                return (
                  <MenuItem
                    item={item}
                    changeSection={changeSection}
                    currentLocation={currentLocation}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="nav-btn">
          <button
            className="hamburguerBtn"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={Hamburger} alt="" />
          </button>
          <div onClick={() => changeSection()} className="logo">
            <img src={Logo} alt="logo" />
            <Link to="/">Pelican Town</Link>
          </div>
        </div>
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
            {menuItems.map((item) => {
              return (
                <li
                  onClick={() => {
                    changeSection();
                    setIsMenuToggled(!isMenuToggled);
                  }}
                >
                  <Link
                    className={currentLocation === item.route ? "active" : ""}
                    to={item.route}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
