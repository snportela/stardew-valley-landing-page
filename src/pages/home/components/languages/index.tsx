import "./styles.sass";
import English from "/assets/icons/united-kingdom.png";
import Japan from "/assets/icons/japan.png";
import Germany from "/assets/icons/germany.png";
import Spain from "/assets/icons/spain.png";
import Brazil from "/assets/icons/brazil.png";
import Russia from "/assets/icons/russia.png";
import China from "/assets/icons/china.png";
import France from "/assets/icons/france.png";
import Italy from "/assets/icons/italy.png";
import Hungary from "/assets/icons/hungary.png";
import SouthKorea from "/assets/icons/south-korea.png";
import Turkey from "/assets/icons/turkey.png";

const Languages = () => {
  return (
    <div id="languages" className="languages section">
      <h1>Languages</h1>
      <ul>
        <li>
          <img src={English} alt="English flag" /> English
        </li>
        <li>
          <img src={Germany} alt="German flag" /> German
        </li>
        <li>
          <img src={Spain} alt="Spanish flag" />
          Spanish - Spain
        </li>
        <li>
          <img src={Japan} alt="Japanese flag" /> Japanese
        </li>
        <li>
          <img src={Brazil} alt="Brazillian flag" />
          Portuguese - Brazil
        </li>
        <li>
          <img src={Russia} alt="Russian flag" />
          Russian
        </li>
        <li>
          <img src={China} alt="Chinese flag" />
          Simplified Chinese
        </li>
        <li>
          <img src={France} alt="French flag" />
          French
        </li>
        <li>
          <img src={Italy} alt="Italian flag" />
          Italian
        </li>
        <li>
          <img src={Hungary} alt="Hungarian flag" />
          Hungarian
        </li>
        <li>
          <img src={SouthKorea} alt="South Korean flag" />
          Korean
        </li>
        <li>
          <img src={Turkey} alt="Turkish flag" />
          Turkish
        </li>
      </ul>
    </div>
  );
};

export default Languages;
