import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./modules/Home/home";
import Cadastro from "./modules/cadastro/cadastro";
import NotFound from "./modules/error/NotFound";
import Contato from './modules/contato/contato';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route>
            <Route element={<Home />} path='/' />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/contato" element={<Contato />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;