import { useState } from "react";

import Menu from "./Menu";

import styled from "styled-components";

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
      <ul>
        {tweet.length > 0
          ? tweet.map((item) => {
              return <Li key={item}>{item}</Li>;
            })
          : "Sem Tweets"}
      </ul>
      <Button onClick={addTweet}>Adicionar Tweet</Button>
    </>
  );
}

const Button = styled.button`
  padding: 0.6rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: all ease .5s;
  :hover{
    background-color: black;
    color: white;
  }
`

const Li = styled.li`
  transition: all ease .1s;
  :hover{
    cursor: pointer;
    background-color: white;
    padding: .5rem;
    border-radius: 15px;
  }
`
