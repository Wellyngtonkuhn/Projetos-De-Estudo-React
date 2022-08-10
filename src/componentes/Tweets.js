import { useState } from "react";

import Menu from "./Menu";

import styled from "styled-components";
import { Main } from "../styles/Default";

export default function Tweets() {
  const [tweet, setTweet] = useState([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
    "Tweet 5",
  ]);

  const addTweet = () => {
    setTweet([...tweet, " New Tweet "]);
  };

  return (
    <>
      <Menu />
      <Main>
        <ul>
          {tweet.length > 0
            ? tweet.map((item) => {
                return (
                  <Li key={item}>
                    <A href="">{item}</A>
                  </Li>
                );
              })
            : "Sem Tweets"}
        </ul>
        <Button onClick={addTweet}>Adicionar Tweet</Button>
      </Main>
    </>
  );
}

const Button = styled.button`
  padding: 0.6rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: all ease 0.5s;
  background-color: ${(props) => props.theme.theme.buttonColorBackground};
  color: ${(props) => props.theme.theme.buttonColor};
  :hover {
    padding: 0.8rem;
    border-radius: 15px;
  }
`;

const Li = styled.li`
  transition: all ease 0.1s;
  cursor: pointer;
  line-height: 1.7rem;
  :hover {
    padding: 0.5rem;
    border-radius: 15px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.theme.color};
  text-transform: capitalize;
  :hover {
    background-color: ${(props) => props.theme.theme.hoverBackground};
    color: ${(props) => props.theme.theme.hoverColor};
    padding: 0.5rem;
    border-radius: 15px;
  }
`;
