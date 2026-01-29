import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Profil from "./pages/Profil";
import Quotes from "./pages/Quotes";
import InfoCard from "./pages/InfoCard";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Profil />} />
          <Route path="/infocard" element={<InfoCard />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
