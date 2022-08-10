import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";

import Git from "./componentes/Git";
import Tweets from "./componentes/Tweets";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="git" element={<Git />} />
      </Routes>
    </BrowserRouter>
  );
}
