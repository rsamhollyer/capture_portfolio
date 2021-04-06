import styled from "styled-components";
const lobster = `"Lobster",cursive`;

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    display: flex;
    align-items: center;
  }
`;

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: ${lobster};
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
