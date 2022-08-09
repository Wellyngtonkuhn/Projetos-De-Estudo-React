import Rotas from "./Rotas";
import styled from "styled-components";

function App() {
  return (
    <Main >
      <header >
        <Rotas />
      </header>
    </Main>
  );
}

export default App;



const Main = styled.main`
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

