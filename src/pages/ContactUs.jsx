import { motion } from "framer-motion";
import { PageAnimation } from "../animation.jsx";

function ContactUs() {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
}

export default ContactUs;
