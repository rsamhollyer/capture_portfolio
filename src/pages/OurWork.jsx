import styled from "styled-components";
import { Link } from "react-router-dom";
import { Work, Movie } from "../styles";
import athlete from "../assets/images/athlete-small.png";
import theracer from "../assets/images/theracer-small.png";
import goodtimes from "../assets/images/goodtimes-small.png";

function OurWork() {
  return (
    <Work>
      <Movie>
        <h2>The Athelete</h2>

        <div className="line"></div>
        <Link>
          <img src={athlete} alt="boxer" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>

        <div className="line"></div>
        <Link>
          <img src={theracer} alt="a car" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>

        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="a couple" />
        </Link>
      </Movie>
    </Work>
  );
}

export default OurWork;
