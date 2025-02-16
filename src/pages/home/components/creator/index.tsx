import "./styles.sass";
import CALogo from "/assets/images/ca_logo.gif";
import { useContext } from "react";
import { WebsiteContent } from "../../../../contexts";

const Creator = () => {
  const {
    pages: {
      home: { creator },
    },
  } = useContext(WebsiteContent);
  return (
    <div id="creator" className="creator section">
      <h1>{creator.title}</h1>
      <div className="container">
        <img src={CALogo} alt="ConcernedApe" />

        <p>{creator.text}</p>
      </div>
    </div>
  );
};

export default Creator;
