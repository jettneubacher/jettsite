import { motion } from "motion/react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -75px 0px" }}
      class="main-item"
      id="about"
    >
      <h1>About me</h1>
      <p>
        Born and raised in Colorado Springs, CO, I am a recent Fordham
        University CS graduate with a love for learning, coding, and playing the
        drums. I am based out of Colorado Springs and NYC.
      </p>
      <div class="row">
        <div class="col">
          <motion.div class="card" whileHover={{ scale: 1.1 }}>
            <div class="card-body">
              <h5 class="card-title">General Resume </h5>

              <a
                href="https://drive.google.com/file/d/1VEjTGdlXeYezW_U4QmO8FADICLGaMwfS/view?usp=sharing"
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
              <h5 class="card-title">CS Resume</h5>

              <a
                href="https://drive.google.com/file/d/1lB-Wy2JnjmRFniEXyQjK_YSarmEcG8C7/view?usp=sharing"
                target="blank"
                class="btn"
              >
                View
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
