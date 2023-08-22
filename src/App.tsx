import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./modules/Home/home";
import Cadastro from "./modules/cadastro/cadastro";
import NotFound from "./modules/error/NotFound";
import Contato from "./modules/contato/contato";
import Login from "./modules/loginTela/login";
import PrivateRoute from "./modules/private";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route>
            <Route element={<Login />} path="/" />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/contato" element={<Contato />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
