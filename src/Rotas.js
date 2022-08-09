import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./componentes/Main";

import Git from "./componentes/Git";
import Tweets from "./componentes/Tweets";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="git" element={<Git />} />
      </Routes>
    </BrowserRouter>
  );
}
