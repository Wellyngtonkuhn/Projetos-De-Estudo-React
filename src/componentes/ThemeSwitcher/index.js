import styled from "styled-components";

import { useContext } from "react";
import context from "../../styles/themes/context";

export default function ThemeSwitcher({ toggleTheme }) {

  const theme = useContext(context);

  return (
    <>
      <Button onClick={toggleTheme}>
        {theme.theme.background === "#000" ? "Light Mode" : "Dark Mode"}
      </Button>
    </>
  );
}


const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 15px;
  border: unset;
  cursor: pointer;
  background-color: ${(props) => props.theme.theme.buttonColorBackground};
  color: ${(props) => props.theme.theme.buttonColor};
`;
