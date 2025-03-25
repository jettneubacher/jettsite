import Name from "./components/Name.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { Toggle } from "./components/Toggle.jsx";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage(preference);

  return (
    <>
      <div data-theme={isDark ? "dark" : "light"}>
        <Navbar />
        <Name />
        <About />
        <Projects />
        <Contact />
        <Toggle handleChange={() => setIsDark(!isDark)} />
      </div>
    </>
  );
}

export default App;
