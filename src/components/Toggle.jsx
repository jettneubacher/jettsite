import { motion } from "motion/react";
import { BsCloudMoon, BsFillSunFill } from "react-icons/bs";

export const Toggle = ({ handleChange }) => {
  return (
    <div class="footer">
      <div className="toggleCT">
        <motion.div
          whileHover={{ scale: 1.2 }}
          class="btn"
          id="LDbtn"
          role="button"
          onClick={handleChange}
        >
          <BsFillSunFill />
        </motion.div>
      </div>
    </div>
  );
};

export default Toggle;
