import AwesomeSlider from "react-magical-carousel";
import "./styles.sass";

const Media = () => {
  const images = [
    "/assets/images/StardewValley_5.png",
    "/assets/images/StardewValley_12-1.png",
    "/assets/images/NightMarket-1-1.png",
    "/assets/images/1_1screenshot15.png",
    "/assets/images/StardewValley_11.png",
    "/assets/images/StardewValley_4.png",
  ];

  return (
    <div id="media" className="media section">
      <h1>Media</h1>
      <div className="container">
        <AwesomeSlider
          slideWidth={"100%"}
          ratio={9 / 16}
          jumpInterval={4000}
          // transition={1000}
          slideMargin={0}
          renderJumpBtns={true}
          renderDotBtns={true}
          nextBtn={(onJump) => <div onClick={onJump} className="nextBtn"></div>}
          previousBtn={(onJump) => (
            <div onClick={onJump} className="previousBtn"></div>
          )}
        >
          {images.map((image) => (
            <img src={image} alt="" />
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Media;
