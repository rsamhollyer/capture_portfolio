import { AwardStyle } from "../styles";

function Award(props) {
  const { award } = props;
  return (
    <AwardStyle>
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </AwardStyle>
  );
}

export default Award;
