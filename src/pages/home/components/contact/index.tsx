import "./styles.sass";
import { useContext } from "react";
import { WebsiteContent } from "../../../../contexts";

const Contact = () => {
  const {
    pages: {
      home: { contact },
    },
  } = useContext(WebsiteContent);
  return (
    <div id="contact" className="contact section">
      <h1>{contact.title}</h1>
      <div className="container">
        <div className="contact-left">
          <h2>{contact.subtitle}</h2>
          {contact.contactInfo.map((item, index) => {
            return (
              <span key={index}>
                <img src={item.icon} alt={`${item.type} + icon`} />
                {item.description}
              </span>
            );
          })}
        </div>
        <div className="contact-right">
          <form>
            {contact.form.map((item, index) => {
              return (
                <div key={index}>
                  {item.type === "input" && (
                    <input
                      type="text"
                      id={item.name}
                      name={item.name}
                      placeholder={item.placeholder}
                    />
                  )}
                  {item.type === "textarea" && (
                    <textarea
                      name={item.name}
                      id={item.name}
                      placeholder={item.placeholder}
                    />
                  )}
                </div>
              );
            })}
            <button>{contact.buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
