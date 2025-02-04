import "./styles.sass";

const Header = () => {
  return <header className="header">
    <a href="/" className="logo">Home</a>
    <nav className="navbar">
      <ul>
        <li>
          <a className="active" href="#about">About</a>
        </li>
        <li>
          <a href="#media">Media</a>
        </li>
        <li>
          <a href="#requirements">Requirements</a>
        </li>
        <li>
          <a href="#languages">Languages</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#creator">Creator</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>;
};

export default Header;
