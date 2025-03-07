import "./styles.sass";
import { useContext } from "react";
import { WebsiteContent } from "../../../../contexts";

const About = () => {
  const {
    pages: {
      home: { about },
    },
  } = useContext(WebsiteContent);

  return (
    <div id="about" className="about section">
      <div className="content">
        <div className="description">
          <h1 dangerouslySetInnerHTML={{ __html: about.title }}></h1>
          <h2>{about.subtitle}</h2>
        </div>

        <div className="features">
          {about.features.map((feature, index) => {
            return (
              <div key={index}>
                <img src={feature.image} />
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
