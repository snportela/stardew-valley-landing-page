import About from "./components/about";
import Contact from "./components/contact";
import Creator from "./components/creator";
import Hero from "./components/hero";
import Languages from "./components/languages";
import Media from "./components/media";
import Platforms from "./components/platforms";
import Requirements from "./components/requirements";
import Reviews from "./components/reviews";
import "./styles.sass";

const Home = () => {
  return (
    <div id="home" className="home content">
      <Hero />
      <About />
      <Media />
      <Platforms />
      <Requirements />
      <Languages />
      <Creator />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
