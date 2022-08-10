import Menu from "./Menu";
import styled from "styled-components";
import { Main } from "../styles/Default";

export default function Home() {
  return (
    <>
      <Menu />
      <Main>
        <H1 font={40}>
          Home<span> page</span>
        </H1>
      </Main>
    </>
  );
}

const H1 = styled.h1`
  font-size: ${(props) => `${props.font}px`};

  span {
    font-size: 15px;
  }
`;
