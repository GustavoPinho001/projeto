import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cobranca, getCobranca, getCobrancaById } from "../../API/cobranca";
import Header from "../../primario/header";


const TesteAPI = (): any => {
    const navigateHome = useNavigate();
    const [cobranca, setCobranca] = useState<Cobranca[]>([]);
    const [cobrancaId, setCobrancaId] = useState<Cobranca>();


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
  const fetchData = async () => {
      try {
          const response = await getCobranca();
          setCobranca(response)
      } catch (error) {
          console.log(error);
      }
  };

  const fetchDataByid = useCallback(async () => {
    try {
        const response = await getCobrancaById(1);
        setCobrancaId(response); // Verifique se response é um array
    } catch (error) {
        console.log(error);
    }
}, []);

  useEffect(() => {
    fetchData();
}, []);




    return(
        <Header/>

   
    );
}
export default TesteAPI;