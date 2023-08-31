import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./modules/Home/home";
import Cadastro from "./modules/USUARIOS/cadastro/cadastro";
import NotFound from "./modules/error/NotFound";
import Login from "./modules/USUARIOS/loginTela/login";
import PrivateRoute from "./modules/private";
import ContactPage from "./modules/contato/contato";
import Inscritos from "./modules/USUARIOS/inscritos/inscritos";
import TelaUp from "./modules/USUARIOS/updateUser/updateUser";
import Produtos from "./modules/PRODUTOS/produtos/produtos";
import ProductForm from "./modules/PRODUTOS/addprodutos/addprodutos";
import UpProduct from "./modules/PRODUTOS/updateProduct/upProduct";




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
          <Route
              path="/produtos"
              element={
                <PrivateRoute>
                  <Produtos/>
                </PrivateRoute>
              }
            />
                <Route
              path="/addprodutos"
              element={
                <PrivateRoute>
                  <ProductForm/>
                </PrivateRoute>
              }
            />
             <Route
              path="/updateProduct/:id"
              element={
                <PrivateRoute>
                  <UpProduct/>
                </PrivateRoute>
              }
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
