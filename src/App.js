import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Homepage from "./Home";
import Publicationpage from "./Publication";
import Newspage from "./News";
import Projectpage from "./Project";
import Peoplepage from "./People";
import NewsDetail from './NewsDetail';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ flexGrow: 1 }}>
            <li>
              <Link to="/">BASIL</Link>
            </li>
          </ul>
          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/News" onClick={toggleMenu}>News</Link>
              </li>
              <li>
                <Link to="/Publication" onClick={toggleMenu}>Publication</Link>
              </li>
              <li>
                <Link to="/Project" onClick={toggleMenu}>Project</Link>
              </li>
              <li>
                <Link to="/People" onClick={toggleMenu}>People</Link>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/News" element={<Newspage />} />
            <Route path="/Publication" element={<Publicationpage />} />
            <Route path="/Project" element={<Projectpage />} />
            <Route path="/People" element={<Peoplepage />} />
            <Route path="/News/:id" element={<NewsDetail />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
