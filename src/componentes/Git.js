import { useState, useEffect } from "react";
import Menu from "./Menu";

import styled from "styled-components";

function Git() {
  const [repo, setRepo] = useState([]);
  const [pesquisar, setPesquisar] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Wellyngtonkuhn/repos", {
      headers: {
        "User-Agent": "request",
      },
    })
      .then((response) => response.json())
      .then((data) => setRepo(data));
  }, []);

  const repoFilter =
    pesquisar.length > 0
      ? repo.filter((repo) => repo.name.includes(pesquisar))
      : [];

  return (
    <>
      <Menu />
      <Input
        name="pesquisar"
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setPesquisar(e.target.value)}
        value={pesquisar}
      />

      {pesquisar.length > 0 ? (
        <ul>
          {repoFilter.map((item) => {
            return (
              <Li key={item.id ? item.name : "123"}>
                <A href={item.html_url} target="_blak">
                  {item.name ? item.name : "Carregando..."}
                </A>
              </Li>
            );
          })}
        </ul>
      ) : (
        <ul>
          {repo.length > 0
            ? repo.map((item) => {
                return (
                  <Li key={item.id ? item.name : "123"}>
                    <A href={item.html_url} target="_blak">
                      {item.name ? item.name : "Carregando..."}
                    </A>
                  </Li>
                );
              })
            : "Carregando..."}
        </ul>
      )}
    </>
  );
}

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 15px;
  border: unset;
  background-color: ${props => props.theme.theme.imputBackground};
  color: ${props => props.theme.theme.inputColor};
`;

const Li = styled.li`
  transition: all ease 0.1s;
  cursor: pointer;
  line-height: 1.7rem;
  :hover{
    padding: 0.5rem;
    border-radius: 15px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: ${props => props.theme.theme.color};;
  text-transform: capitalize;
  :hover {
    background-color: ${props => props.theme.theme.hoverBackground};
    color: ${props => props.theme.theme.hoverColor};
    padding: 0.5rem;
    border-radius: 15px;
  }
`;

export default Git;
