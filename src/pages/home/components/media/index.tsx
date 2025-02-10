import AwesomeSlider from "react-magical-carousel";
import "./styles.sass";

const Media = () => {
  const images = [
    "/assets/images/StardewValley_5.png",
    "/assets/images/1_1screenshot15.png",
    "/assets/images/StardewValley_12-1.png",
    "/assets/images/NightMarket-1-1.png",
    "/assets/images/StardewValley_11.png",
    "/assets/images/StardewValley_4.png",
  ];

  return (
    <div id="media" className="media section">
      <div className="container">
        <AwesomeSlider
          passedSlides={images}
          slideWidth={"100%"}
          ratio={9 / 16}
          slideMargin={0}
          renderJumpBtns={true}
        />
      </div>
    </div>
  );
};

export default Media;
