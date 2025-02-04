import About from "./components/about";
import Hero from "./components/hero";
import Media from "./components/media";
import "./styles.sass";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Media />
    </div>
  );
};

export default Home;
