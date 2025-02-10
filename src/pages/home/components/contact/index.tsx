import "./styles.sass";
import Phone from "../../../../../public/assets/icons/phone-call.png";
import Location from "../../../../../public/assets/icons/location.png";
import Mail from "../../../../../public/assets/icons/mail.png";

const Contact = () => {
  return (
    <div id="contact" className="contact section">
      <h1>Contact Us</h1>
      <div className="container">
        <div className="contact-left">
          <h2>Ask us anything</h2>
          <p>
            <img src={Phone} alt="Phone icon" />
            (555) 26021 - 20161
          </p>
          <p>
            <img src={Location} alt="Location icon" />
            Ferngill Republic
          </p>
          <p>
            <img src={Mail} alt="Mail icon" />
            pelicantown@email.com
          </p>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" id="name" name="name" placeholder="NAME" />
            <input type="text" id="email" name="email" placeholder="EMAIL"/>
            <textarea name="message" id="message" placeholder="MESSAGE"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
