import "./styles.sass";
import WindowsLogo from "../../../../assets/windows.png";
import MacLogo from "../../../../assets/mac-os-logo.png";
import LinuxLogo from "../../../../assets/linux-platform.png";

const Requirements = () => {
  return (
    <div id="requirements" className="requirements section">
      <h1>System Requirements</h1>
      <div className="container">
        <div className="card">
          <img src={WindowsLogo} alt="Windows Logo" />
          <ul>
            <li>OS *: Windows Vista or greater</li>
            <li>Processor: 2 Ghz</li>
            <li>Memory: 2 GB RAM</li>
            <li>Graphics: 256 mb video memory, shader model 3.0+</li>
            <li>DirectX: Version 10</li>
            <li>Storage: 500 MB available space</li>
          </ul>
        </div>
        <div className="card">
          <img src={MacLogo} alt="MacOS Logo" />
          <ul>
            <li>OS: Mac OSX 10.10+</li>
            <li>Processor: 2 Ghz</li>
            <li>Memory: 2 GB RAM</li>
            <li>Graphics: 256 mb video memory, OpenGL 2</li>
            <li>Storage: 500 MB available space</li>
          </ul>
        </div>
        <div className="card">
          <img src={LinuxLogo} alt="Linux Logo" />
          <ul>
            <li>OS: Ubuntu 12.04 LTS</li>
            <li>Processor: 2 Ghz</li>
            <li>Memory: 2 GB RAM</li>
            <li>Graphics: 256 mb video memory, OpenGL 2</li>
            <li>Storage: 500 MB available space</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
