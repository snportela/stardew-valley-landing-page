// import ReactMagicalCarousel from "./awesome-slider/AwesomeSlider";
import { useContext } from "react";
import { WebsiteContent } from "../../../../contexts";
import "./styles.sass";
import ReactMagicalCarousel from "react-magical-carousel";

const Media = () => {
  const {
    pages: {
      home: { media },
    },
  } = useContext(WebsiteContent);

  return (
    <div id="media" className="media section">
      <h1>Media</h1>
      <div className="container">
        <ReactMagicalCarousel
          slideWidth={"100%"}
          ratio={9 / 16}
          transition={800}
          slideMargin={"0"}
          renderJumpBtns={true}
          renderDotBtns={true}
          nextBtn={(onJump) => <div onClick={onJump} className="nextBtn"></div>}
          previousBtn={(onJump) => (
            <div onClick={onJump} className="previousBtn"></div>
          )}
        >
          {media.sliderMedia.map((media, index) => {
            if (media.type === "image") {
              return <img key={index} src={media.link} alt="" />;
            } else {
              return (
                <iframe
                  src={media.link}
                  allow="autoplay"
                  width="100%"
                  height="100%"
                ></iframe>
              );
            }
          })}
        </ReactMagicalCarousel>
      </div>
    </div>
  );
};

export default Media;
