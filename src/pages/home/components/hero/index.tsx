import { useEffect, useState } from "react";
import Background from "/assets/images/parallax-background.png";
import HeroLogo from "/assets/images/main_logo.png";
import Parallax1 from "/assets/images/parallax1.png";
import Parallax2 from "/assets/images/parallax2.png";
import Parallax3 from "/assets/images/parallax3.png";
import Divider from "/assets/images/sdv_divider.png";
import Stars from "/assets/images/stars.png";
import Cloud from "/assets/images/cloud.png";
import Bird from "/assets/images/stardew_bird.gif";
import "./styles.sass";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container section disable-select">
      <div className="hero">
        <img
          className="hero-logo"
          src={HeroLogo}
          alt="Stardew Valley"
          style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
        />
        <img
          className="background"
          src={Background}
          alt="background"
          style={{ transform: `translateY(-${offsetY / 5}px)` }}
        />
        <img className="cloud" src={Cloud} alt="Cloud" />
        <img className="bird" src={Bird} alt="Bird" />
        <div className="stars-container">
          <img className="stars" src={Stars} />
          <img className="stars" src={Stars} />
        </div>
        <img
          className="mountains mountains-back"
          src={Parallax1}
          alt="Mountain background"
          style={{ transform: `translateY(${offsetY / 3.6}px)` }}
        />
        <img
          className="mountains mountains-middle"
          src={Parallax2}
          alt="Mountain background"
          style={{ transform: `translateY(${offsetY / 6.2}px)` }}
        />
        <img
          className="mountains mountains-front"
          src={Parallax3}
          alt="Mountain background"
          style={{ transform: `translateY(${offsetY / 8}px)` }}
        />
        <img className="ground" src={Divider} alt="Divider background" />
      </div>
    </div>
  );
};

export default Hero;
