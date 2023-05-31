import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Experience from"./Pages/Experience"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import ProjectDisplay from './Pages/ProjectDisplay';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Experience" element={<Experience />}/>
          <Route path="/Projects/:id" element={<ProjectDisplay/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
