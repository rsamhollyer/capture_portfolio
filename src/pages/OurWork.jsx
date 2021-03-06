import { Link } from "react-router-dom";
import { Work, Movie, Hide, Frame1, Frame2, Frame3, Frame4 } from "../styles";
import athlete from "../assets/images/athlete-small.png";
import theracer from "../assets/images/theracer-small.png";
import goodtimes from "../assets/images/goodtimes-small.png";
import {
  PageAnimation,
  PhotoAnim,
  Fade,
  LineAnim,
  Slider,
  SliderContainer,
} from "../animation";

import { useScroll } from "../components/hooks/useScroll";
import ScrollToTop from "../components/hooks/scrollToTop";
import { motion } from "framer-motion";

function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      style={{ background: "#fff" }}
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={SliderContainer}>
        <Frame1 variants={Slider}> </Frame1>
        <Frame2 variants={Slider}> </Frame2>
        <Frame3 variants={Slider}> </Frame3>
        <Frame4 variants={Slider}> </Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={Fade}>The Athelete</motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={PhotoAnim} src={athlete} alt="boxer" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element} variants={Fade} animate={controls} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img variants={PhotoAnim} src={theracer} alt="a car" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={Fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img variants={PhotoAnim} src={goodtimes} alt="a couple" />
        </Link>
      </Movie>
      <ScrollToTop />
    </Work>
  );
}

export default OurWork;
