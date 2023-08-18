import { useNavigate } from "react-router-dom";
import Header from "../../primario/header";


const TesteAPI = (): any => {
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
        <Header/>
    );
}
export default TesteAPI;