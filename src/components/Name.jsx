import { motion } from "motion/react";

function Name() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      class="main-item"
      id="name"
    >
      <p>Hello, my name is</p>
      <h1>Jett Neubacher.</h1>
      <h4>2024 CS Graduate, Academic Tutor, Drummer</h4>
    </motion.div>
  );
}

export default Name;
