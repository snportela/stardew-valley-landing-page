import "./styles.sass";
import { useContext } from "react";
import { WebsiteContent } from "../../../../contexts";

const Languages = () => {
  const {
    pages: {
      home: { languages },
    },
  } = useContext(WebsiteContent);

  return (
    <div id="languages" className="languages section">
      <div className="content">
        <h1>{languages.title}</h1>
        <ul>
          {languages.languagesList.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.image} />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
