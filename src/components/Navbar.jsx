import { motion } from "motion/react";
import { useState } from "react";

function Navbar() {
  const [selectedId, setSelected] = useState(null);

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
        <div>
          <ul>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                class="btn"
                href="#about"
                role="button"
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                class="btn"
                href="#projects"
                role="button"
              >
                Projects
              </motion.a>
            </li>

            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                class="btn"
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
