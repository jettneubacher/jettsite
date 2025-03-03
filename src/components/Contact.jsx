import { motion } from "motion/react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -75px 0px" }}
      class="main-item"
      id="contact"
    >
      <h1>Contact</h1>
      <br></br>
      <div>
        <motion.a
          href="mailto:jettneubacher9@gmail.com"
          target="_blank"
          class="btn"
          role="button"
          whileHover={{ scale: 1.1 }}
        >
          jettneubacher9@gmail.com
        </motion.a>
        <br></br>
        <br></br>
        <motion.button class="btn" whileHover={{ scale: 1.1 }}>
          {" "}
          (719)-661-5069{" "}
        </motion.button>
        <br></br>
        <br></br>
        <motion.a
          href="https://www.linkedin.com/in/jett-neubacher"
          target="_blank"
          class="btn"
          role="button"
          whileHover={{ scale: 1.1 }}
        >
          LinkedIn
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Contact;
