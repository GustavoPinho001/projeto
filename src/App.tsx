import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./modules/Home/home";
import Cadastro from "./modules/cadastro/cadastro";
import NotFound from "./modules/error/NotFound";
import Login from "./modules/loginTela/login";
import PrivateRoute from "./modules/private";
import ContactPage from "./modules/contato/contato";
import Inscritos from "./modules/inscritos/inscritos";
import TelaUp from "./modules/updateUser/updateUser";



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />            
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/contato"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/inscritos"
              element={
                <PrivateRoute>
                  <Inscritos />
                </PrivateRoute>
              }
            />
             <Route
              path="/updateUser/:id"
              element={
                <PrivateRoute>
                  <TelaUp/>
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
