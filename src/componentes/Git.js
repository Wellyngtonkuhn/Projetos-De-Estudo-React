import { useState, useEffect } from "react";
import Menu from "./Menu";

import styled from "styled-components";
import { Main } from "../styles/Default";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Git() {
  const [repo, setRepo] = useState([]);
  const [pesquisar, setPesquisar] = useState("");
  const [favoriteRepo, setFavoriteRepo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://api.github.com/users/Wellyngtonkuhn/repos"
      );
      const repos = await data.json();
      setRepo(repos);
    }
    fetchData();
  }, []);

  const repoFilter =
    pesquisar.length > 0
      ? repo.filter((repo) => repo.name.includes(pesquisar))
      : [];

  const handleFavorite = (id) => {
    repo.map((item) => {
      return item.id === id && setFavoriteRepo(...favoriteRepo, item);
    });
  };

  return (
    <>
      <Menu />
      <Main>
        <Input
          name="pesquisar"
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setPesquisar(e.target.value)}
          value={pesquisar}
        />
        <H1>Favoritos {favoriteRepo.id ? favoriteRepo.id : "Sem id"}</H1>
        {pesquisar.length > 0 ? (
          <ul>
            {repoFilter.map((item) => {
              return (
                <Li key={item.id ? item.name : "123"}>
                  <A href={item.html_url} target="_blak">
                    {item.name ? item.name : "Carregando..."}
                  </A>
                  <FontAwesomeIcon
                    onClick={() => handleFavorite(item.id)}
                    style={{ paddingLeft: "15px" }}
                    icon={faStar}
                  />
                </Li>
              );
            })}
          </ul>
        ) : (
          <ul>
            {repo.length > 0
              ? repo.map((item) => {
                  return (
                    <>
                      <Li key={item.id ? item.name : "123"}>
                        <A href={item.html_url} target="_blak">
                          {item.name ? item.name : "Carregando..."}
                        </A>
                        <FontAwesomeIcon
                          onClick={() => handleFavorite(item.id)}
                          style={{ paddingLeft: "15px" }}
                          icon={faStar}
                        />
                      </Li>
                    </>
                  );
                })
              : "Carregando..."}
          </ul>
        )}
      </Main>
    </>
  );
}

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 15px;
  border: unset;
  background-color: ${(props) => props.theme.theme.imputBackground};
  color: ${(props) => props.theme.theme.inputColor};
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

const H1 = styled.h1`
  color: ${(props) => props.theme.theme.color};
`;
