import "./styles.sass";
import Steam from "../../../../../public/assets/images/STEAM_logo.png";
import PS4 from "../../../../../public/assets/images/PS4_logo.png";
import Xbox from "../../../../../public/assets/images/XBOXOne_logo.png";
import Switch from "../../../../../public/assets/images/NintendoSwitch_logo.png";
import IOS from "../../../../../public/assets/images/iOS_logo.png";
import Android from "../../../../../public/assets/images/android_logo.png";

const Platforms = () => {
  return (
    <div id="platforms" className="platforms section">
      <h1>Platforms</h1>

      <div className="container">
        <img src={Steam} alt="" />
        <img src={PS4} alt="" />
        <img src={Xbox} alt="" />
        <img src={Switch} alt="" />
        <img src={IOS} alt="" />
        <img src={Android} alt="" />
      </div>
    </div>
  );
};

export default Platforms;
