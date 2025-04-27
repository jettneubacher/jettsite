import { motion } from "motion/react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [selectedId, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div class="navCT">
      <nav className="nav">
        <motion.a
          whileHover={{ scale: 1.2 }}
          class="btn"
          href="#name"
          role="button"
        >
          Jett
        </motion.a>

        {/* Mobile menu toggle button */}
        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Desktop and mobile nav links */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="btn"
                href="#about"
                role="button"
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="btn"
                href="#projects"
                role="button"
              >
                Projects
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="btn"
                href="#contact"
                role="button"
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
