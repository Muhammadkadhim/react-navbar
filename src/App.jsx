import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// style file
import "./styles/App.css";

// pages
import { PageOne } from "./pages/PageOne";
import { PageTwo } from "./pages/PageTwo";
import { PageThree } from "./pages/PageThree";
import { PageFour } from "./pages/PageFour";
import { Home } from "./pages/Home";

function App() {
  const [showItems, setShowItems] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Router>
      <nav>
        <div className="logo">
          <h1>
            <Link to="/">Navbar</Link>
          </h1>
        </div>
        <ul className={`${showItems ? "show-items" : ""}`}>
          <li>
            <Link to="1">Page 1</Link>
          </li>
          <li>
            <Link to="2">Page 2</Link>
          </li>
          <li>
            <Link to="3">Page 3</Link>
          </li>
          <li
            className="dropdown-items-container"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <Link to="#">
              Dropdown{" "}
              <span
                class="iconify"
                data-icon="dashicons:arrow-down-alt2"
                style={{ fontSize: "1.2rem" }}
              ></span>
            </Link>
            <ol
              className={`dropdown-items ${
                showDropdown ? "show-dropdown" : ""
              }`}
            >
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ol>
          </li>
          <li>
            <Link to="4">Page 4</Link>
          </li>
          <li className="contact-button">
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <div className="toggle-button" onClick={() => setShowItems(!showItems)}>
          <span
            class="iconify"
            data-icon="charm:menu-hamburger"
            style={{ fontSize: "2rem" }}
          ></span>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<PageOne />} />
          <Route path="/2" element={<PageTwo />} />
          <Route path="/3" element={<PageThree />} />
          <Route path="/4" element={<PageFour />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
