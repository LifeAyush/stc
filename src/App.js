import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Groups from "./Pages/Groups/Groups";
import Events from "./Pages/Events/Events";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import TeamCard from "./Components/Cards/TeamCard/TeamCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tcard" element={<TeamCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;