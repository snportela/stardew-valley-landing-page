import "./styles.sass";
import { useContext } from "react";
import { WebsiteContent } from "../../../../contexts";

const Reviews = () => {
  const {
    pages: {
      home: { reviews },
    },
  } = useContext(WebsiteContent);

  return (
    <div id="reviews" className="reviews section">
      <div className="content">
        <h1>{reviews.title}</h1>
        <div className="container">
          {reviews.reviewsList.map((item, index) => {
            return (
              <div key={index} className="review">
                <a href={item.link}>
                  <img src={item.icon} />
                  {item.name}
                </a>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
