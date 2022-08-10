import { useState } from "react";

import Rotas from "./Rotas";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import ThemeSwitcher from "./componentes/ThemeSwitcher/index";

import * as themes from "./styles/themes";
import ThemeContext from "./styles/themes/context";


export default function App() {
  
  const [themeSwitch, setThemeSwitch] = useState({
    theme: themes.dark,
  });

  const toggleTheme = () => {
    setThemeSwitch({
      theme: themeSwitch.theme === themes.dark ? themes.light : themes.dark,
    });
  };

  return (
    <ThemeContext.Provider value={themeSwitch}>
      <ThemeContext.Consumer>
        {(theme) => (
          <ThemeProvider theme={theme}> 
            <Main>
              <header>
                <ThemeSwitcher toggleTheme={toggleTheme} />
                <Rotas />
              </header>
            </Main>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

const Main = styled.main`
  background-color: ${(props) => props.theme.theme.background};
  color: ${(props) => props.theme.theme.color};
  display: flex;
  min-height: 100vh;
  padding-top: 1rem;
  box-sizing:border-box;
`;
