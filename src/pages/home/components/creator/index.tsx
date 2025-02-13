import "./styles.sass";
import CALogo from "/assets/images/ca_logo.gif";

const Creator = () => {
  return (
    <div id="creator" className="creator section">
      <h1>Creator</h1>
      <div className="container">
        <img src={CALogo} alt="ConcernedApe" />

        <p>
          ConcernedApe is Eric Barone, the creator and lead developer of Stardew
          Valley, as well as the name of the company he founded to continue game
          development. From 2012 to 2019, he was the sole developer of the game
          (except the multiplayer networking code in 1.3) and created all art,
          sound effects, and music. He currently resides in Seattle, Washington.
        </p>
      </div>
    </div>
  );
};

export default Creator;
