import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation.jsx";
import ScrollToTop from "../components/hooks/scrollToTop";
function AboutUs() {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollToTop />
    </motion.div>
  );
}

export default AboutUs;
