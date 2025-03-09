import { useEffect, useState } from "react";
import HeroLogo from "/assets/images/main_logo.png";
// import stardewbackground from "/assets/images/stardewbackground.png";
import Parallax from "/assets/images/parallax4.png";
import Parallax2 from "/assets/images/parallax7.png";
import Parallax3 from "/assets/images/parallax8.png";
import Divider from "/assets/images/sdv_divider-s.png";
import Cloud from "/assets/images/cloud.png";
import Bird from "/assets/images/stardew_bird.gif";
import "./styles.sass";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container section">
      <div className="hero">
        <img
          className="hero-logo"
          src={HeroLogo}
          alt="Stardew Valley"
          style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
        />
        <img
          className="background"
          src={'https://stardewvalley.net/wp-content/themes/stardewvalley/images/parallax/parallax1.png'}
          alt="background"
          style={{ transform: `translateY(-${offsetY / 8}px)` }}
          // style={{ transform: `translateY(-${offsetY * 0.12}px)` }}
          // style={{ bottom:  }}
        />
        <img className="cloud" src={Cloud} alt="Cloud" />
        <img className="bird" src={Bird} alt="Bird" />
        <div className="stars-container">
          <img
            className="stars"
            src={'https://stardewvalley.net/wp-content/themes/stardewvalley/images/parallax/parallax2.png'}
            // alt="background"
            // style={{ transform: `translateY(-${offsetY / 8}px)` }}
            // style={{ transform: `translateY(-${offsetY * 0.12}px)` }}
            // style={{ bottom:  }}
          />
          <img
            className="stars"
            src={'https://stardewvalley.net/wp-content/themes/stardewvalley/images/parallax/parallax2.png'}
            // alt="background"
            // style={{ transform: `translateY(-${offsetY / 8}px)` }}
            // style={{ transform: `translateY(-${offsetY * 0.12}px)` }}
            // style={{ bottom:  }}
          />
        </div>
        <img
          className="mountains mountains-back"
          src={Parallax}
          alt="Mountain background"
          style={{ transform: `translateY(${offsetY / 4}px)` }}
          // style={{ transform: `translateY(-${offsetY * 0.08}px)` }}
          // style={{ bottom:  }}
        />
        <img
          className="mountains mountains-middle"
          src={Parallax3}
          alt="Mountain background"
          style={{ transform: `translateY(${offsetY / 6.5}px)` }}
          // style={{ transform: `translateY(-${offsetY * 0.12}px)` }}
          // style={{ bottom:  }}
        />
        <img
          className="mountains mountains-front"
          src={Parallax2}
          alt="Mountain background"
          style={{ transform: `translateY(${offsetY / 8}px)` }}
          // style={{ bottom:  }}
        />
        <img className="ground" src={Divider} alt="Divider background" />
      </div>
    </div>
  );
};

export default Hero;
