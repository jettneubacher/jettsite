import { motion } from "motion/react";

function Name() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      class="main-item"
      id="name"
    >
      <div>Hello, my name is</div>
      <div class="main-header">Jett Neubacher.</div>
      <div class="sub-header">
        2024 Computer Science Graduate, Academic Tutor, Drummer
      </div>
    </motion.div>
  );
}

export default Name;
