import "./styles.sass";
import { WebsiteContent } from "../../../../contexts";
import { useContext } from "react";

const Platforms = () => {
  const {
    pages: {
      home: { platforms },
    },
  } = useContext(WebsiteContent);

  return (
    <div id="platforms" className="platforms section">
      <h1>{platforms.title}</h1>

      <div className="container">
        {platforms.images.map((item, index) => {
          return <img key={index} src={item} />;
        })}
      </div>
    </div>
  );
};

export default Platforms;
