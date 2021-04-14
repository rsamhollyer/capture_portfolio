import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import { Headline, Awards, ImageDisplay, Details } from "../styles";
import { PageAnimation } from "../animation.jsx";
import Award from "../components/Award";
import ScrollToTop from "../components/hooks/scrollToTop";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState());
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((state) => state.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={PageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => {
              return <Award key={award.title} award={award} />;
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
      <ScrollToTop />
    </>
  );
}

export default MovieDetail;
