import "./styles.sass";
import English from "../../../../../public/assets/icons/united-kingdom.png";
import Japan from "../../../../../public/assets/icons/japan.png";
import Germany from "../../../../../public/assets/icons/germany.png";
import Spain from "../../../../../public/assets/icons/spain.png";
import Brazil from "../../../../../public/assets/icons/brazil.png";
import Russia from "../../../../../public/assets/icons/russia.png";
import China from "../../../../../public/assets/icons/china.png";
import France from "../../../../../public/assets/icons/france.png";
import Italy from "../../../../../public/assets/icons/italy.png";
import Hungary from "../../../../../public/assets/icons/hungary.png";
import SouthKorea from "../../../../../public/assets/icons/south-korea.png";
import Turkey from "../../../../../public/assets/icons/turkey.png";

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
