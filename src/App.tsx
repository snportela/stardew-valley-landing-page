import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import { useState } from "react";
import { WebsiteContent } from "./contexts";
import { websiteContentJSON } from "./data";

const App = () => {
  const [content, setContent] = useState<any>(websiteContentJSON);

  return (
    <WebsiteContent.Provider value={content}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:section" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </WebsiteContent.Provider>
  );
};

export default App;
