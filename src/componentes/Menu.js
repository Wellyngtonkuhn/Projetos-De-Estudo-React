import styled from "styled-components";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
        <Link to="/git">Git</Link>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  a {
    color: ${(props) => props.theme.theme.color};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all ease 0.3s;
  }

  a:hover {
    color: ${(props) => props.theme.theme.hover};
  }
`;
