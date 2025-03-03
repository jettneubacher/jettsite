import Name from "./components/Name.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Name />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
