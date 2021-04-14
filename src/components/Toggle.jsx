import { motion } from "framer-motion";
import { useState } from "react";

function Toggle(props) {
  const { children, title } = props;
  const [toggle, setToggle] = useState(true);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
}

export default Toggle;
