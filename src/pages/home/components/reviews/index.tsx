import "./styles.sass";
import LinkIcon from "../../../../assets/link.png";

const Reviews = () => {
  return (
    <div id="reviews" className="reviews section">
      <h1>Reviews</h1>
      <div className="container">
        <div className="review">
          <a href="https://www.giantbomb.com/reviews/stardew-valley-review/1900-739/">
            <img src={LinkIcon} alt="" />
            Giant Bomb
          </a>
          <p>
            “Far more than just a farming game, this one-man labor of love is
            filled with seemingly endless content and heart.” - 5/5
          </p>
        </div>
        <div className="review">
          <a href="https://www.destructoid.com/reviews/review-stardew-valley/#post">
            <img src={LinkIcon} alt="" />
            Destructoid
          </a>
          <p>
            “The core mechanics and relaxing aesthetic merge so well together
            that players will sink in to the experience and never want to
            leave.” - 95
          </p>
        </div>
        <div className="review">
          <a href="https://www.cgmagonline.com/review/game/stardew-valley-pc-review/">
            <img src={LinkIcon} alt="" />
            CGMagazines
          </a>
          <p>
            “Stardew Valley has been the most rich and heartwarming experience
            I've had in a game in years.” - 95
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
