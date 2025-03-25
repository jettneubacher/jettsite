import { motion } from "motion/react";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      class="main-item"
      id="projects"
    >
      <h1 class="main-header">Projects</h1>
      <br></br>
      <div class="pContainer">
        <motion.div class="card" whileHover={{ scale: 1.1 }}>
          <div class="card-body">
            <h5 class="card-title">This Website!</h5>
            <p class="card-text">
              Built using React, Vite, Bootstrap, and Motion
            </p>
          </div>
        </motion.div>
        <motion.div class="card" whileHover={{ scale: 1.1 }}>
          <div class="card-body">
            <h5 class="card-title">
              Social Media, AI, and Art: A new avant-garde
            </h5>
            <p class="card-text">
              Research paper and interview with artist Alex Both
            </p>
            <a
              href="https://drive.google.com/file/d/1IvqWH6fQpb56MnOU50VPv9tf54Zt0ETg/view?usp=sharing"
              target="blank"
              class="btn"
            >
              View
            </a>
          </div>
        </motion.div>
        <motion.div class="card" whileHover={{ scale: 1.1 }}>
          <div class="card-body">
            <h5 class="card-title">
              OpenAI API Chatbot, Text with Walt Whitman
            </h5>
            <p class="card-text">
              React/Vite Frontend chat app, connected to Heroku backend that
              calls the OpenAI API. Utilizes AI prompt engineering and manually
              managed API state
            </p>
            <a
              href="https://jettneubacher.github.io/chatbot"
              target="blank"
              class="btn"
            >
              View
            </a>
          </div>
        </motion.div>
        <motion.div class="card" whileHover={{ scale: 1.1 }}>
          <div class="card-body">
            <h5 class="card-title">Flutter CodeLabs: First App</h5>
            <p class="card-text">
              Google CodeLabs guided Flutter project. My first app built for the
              web with Flutter and Dart
            </p>
            <a
              href="https://jettneubacher.github.io/flutter1/"
              target="blank"
              class="btn"
            >
              View
            </a>
          </div>
        </motion.div>
        <motion.div class="card" whileHover={{ scale: 1.1 }}>
          <div class="card-body">
            <h5 class="card-title">Next Project</h5>
            <p class="card-text">In progress...</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;
