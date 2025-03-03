import { motion } from "motion/react";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -75px 0px" }}
      class="main-item"
      id="projects"
    >
      <h1>Projects</h1>
      <br></br>
      <div class="row">
        <div class="col">
          <motion.div class="card" whileHover={{ scale: 1.1 }}>
            <div class="card-body">
              <h5 class="card-title">This Website!</h5>
              <p class="card-text">
                Built using React, Vite, Bootstrap, and Motion
              </p>
            </div>
          </motion.div>
        </div>
        <div class="col">
          <motion.div class="card" whileHover={{ scale: 1.1 }}>
            <div class="card-body">
              <h5 class="card-title">
                Social Media, AI, and Art: A new avant-garde
              </h5>
              <p class="card-text">
                Senior Research Paper completed for my Digital Technologies and
                Emerging Media, Eloquentia Perfecta course
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
        </div>
        <div class="col">
          <motion.div class="card" whileHover={{ scale: 1.1 }}>
            <div class="card-body">
              <h5 class="card-title">Next Project</h5>
              <p class="card-text">In progress...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
