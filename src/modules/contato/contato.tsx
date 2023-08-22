import { useNavigate } from "react-router-dom";
import Header from "../../primario/header";


const Contato = (): any => {
    const navigateHome = useNavigate();



  const funcaosla = (): void => {
    navigateHome("/");
  };

  const navigate = useNavigate();

  const funcao = (): void => {
    navigate("/cadastro");
  };
  const fapi =(): void => {
    navigate ("/testeAPI")
  
}
    return(
    <>  
      <Header/>
      <div>
        <h1 className="text-white">oi né</h1>
      </div>
    </>
    );
}
export default Contato;