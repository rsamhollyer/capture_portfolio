import { motion } from "framer-motion";
import { PageAnimation, TitleAnim } from "../animation.jsx";
import { ContactStyle, Title, Hide, Social, Circle } from "../styles";

function ContactUs() {
  return (
    <ContactStyle
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={TitleAnim}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>Send an email.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>{" "}
    </ContactStyle>
  );
}

export default ContactUs;
