import home1 from "../assets/images/home1.png";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { TitleAnim, Fade, PhotoAnim } from "../animation";
import Wave from "./Wave";
function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={TitleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnim}>
              your <span>dreams </span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={Fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={Fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={PhotoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
}

export default AboutSection;
