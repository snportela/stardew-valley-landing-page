import "./styles.sass";
import { useContext } from "react";
import { WebsiteContent } from "../../../../contexts";

const Requirements = () => {
  const {
    pages: {
      home: { requirements },
    },
  } = useContext(WebsiteContent);
  return (
    <div id="requirements" className="requirements section">
      <h1>{requirements.title}</h1>
      <div className="container">
        {requirements.cards.map((card, index) => {
          return (
            <div key={index} className="card">
              <img src={card.image} alt={`${card.platform} + Logo`} />
              <ul>
                {card.requirementsList.map((requirement, index) => {
                  return <li key={index}>{requirement}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requirements;
