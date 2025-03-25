import { motion } from "motion/react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      class="main-item"
      id="about"
    >
      <div class="row">
        <div class="col">
          <div class="main-header">About me</div>
        </div>
        <div class="col">
          <ul class="resumeList">
            <li>
              <motion.a
                href="https://drive.google.com/file/d/1VEjTGdlXeYezW_U4QmO8FADICLGaMwfS/view?usp=sharing"
                target="_blank"
                class="btn"
                role="button"
                whileHover={{ scale: 1.1 }}
              >
                General Resume{" "}
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://drive.google.com/file/d/1lB-Wy2JnjmRFniEXyQjK_YSarmEcG8C7/view?usp=sharing"
                target="_blank"
                class="btn"
                role="button"
                whileHover={{ scale: 1.1 }}
              >
                CS Resume{" "}
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <p>
        Born and raised in Colorado Springs, CO, I am a recent Fordham
        University CS graduate with a love for learning, coding, and playing the
        drums. I am based out of NYC.
      </p>
      <p>
        While in school, I developed a strong proclivity for all things software
        related. Since I graduated in 2024, I have made it my mission to develop
        my skills through personal projects and independent research. It is my
        goal to build a carreer in computer science rooted in technical
        expertise and my love for problem solving.
      </p>
      <p>
        While not pursuing my passion for coding, I spend my time making music
        for my band <i>Beautiful</i>, playing with my cat Phil, and exploring
        the great outdoors in the northeast. I am grateful for any opportunites
        that present themselves to me and I am always looking for new
        connections. Please don't hesitate to reach out!
      </p>
    </motion.div>
  );
}

export default About;
