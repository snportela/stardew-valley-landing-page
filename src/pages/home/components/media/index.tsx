import ReactMagicalCarousel from "react-magical-carousel";
import "./styles.sass";

const Media = () => {
  const media = [
    {
      type: "video",
      link: "/assets/videos/movie_max.mp4",
    },
    {
      type: "image",
      link: "/assets/images/StardewValley_5.png",
    },
    {
      type: "image",
      link: "/assets/images/StardewValley_12-1.png",
    },
    {
      type: "image",
      link: "/assets/images/NightMarket-1-1.png",
    },
    {
      type: "image",
      link: "/assets/images/1_1screenshot15.png",
    },
    {
      type: "image",
      link: "/assets/images/StardewValley_11.png",
    },
    {
      type: "image",
      link: "/assets/images/StardewValley_4.png",
    },
  ];

  return (
    <div id="media" className="media section">
      <h1>Media</h1>
      <div className="container">
        <ReactMagicalCarousel
          slideWidth={"100%"}
          ratio={9 / 16}
          transition={800}
          slideMargin={0}
          renderJumpBtns={true}
          renderDotBtns={true}
          nextBtn={(onJump) => <div onClick={onJump} className="nextBtn"></div>}
          previousBtn={(onJump) => (
            <div onClick={onJump} className="previousBtn"></div>
          )}
        >
          {media.map((media, index) => {
            if (media.type === "image") {
              return <img key={index} src={media.link} alt="" />;
            } else {
              return (
                <video width="100%" height="100%" controls autoPlay muted>
                  <source src={media.link} type="video/mp4" />
                </video>
              );
            }
          })}
        </ReactMagicalCarousel>
      </div>
    </div>
  );
};

export default Media;
