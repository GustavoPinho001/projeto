import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./modules/Home/home";
import Cadastro from "./modules/USUARIOS/cadastro/cadastro";
import NotFound from "./modules/Home/error/NotFound";
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
    {/* criar um layout para melhor entendimento da estrutura do codigo */}
      <div className="h-screen w-screen ">
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />            
            <Route
              path="/"
              element={
                  <Home />
              }
            />
            <Route
              path="/contato"
              element={
                
                  <ContactPage />
                
              }
            />
            <Route
              path="/inscritos"
              element={
                
                  <Inscritos />
                
              }
            />
             <Route
              path="/updateUser/:id"
              element={
                
                  <TelaUp/>
                
              }
            />
          </Route>
          <Route
              path="/produtos"
              element={
                
                  <Produtos/>
                
              }
            />
                <Route
              path="/addprodutos"
              element={
                
                  <ProductForm/>
                
              }
            />
             <Route
              path="/updateProduct/:id"
              element={
                
                  <UpProduct/>
                
              }
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
