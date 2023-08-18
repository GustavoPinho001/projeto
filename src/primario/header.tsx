import { useNavigate } from "react-router-dom";


const Header=(): any =>{
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
  
   
      return (   
            <header className="flex h-[5vh] items-center bg-[#0000006f]">
              <div className="text-sm flex justify-around w-full">
                <h1 className="text-white font-bold  ">
                  Projeto SLA
                </h1>
                <div className="flex text-white font-bold  gap-7">
                  <button onClick={funcaosla}  className="hover:text-slate-300">
                    Home
                  </button>
                  <button onClick={funcao} className="hover:text-slate-300">
                    cadastro
                  </button>
                  <button  onClick={fapi} className="hover:text-slate-300">
                    TesteAPI
                  </button>
                  <button  className="hover:text-slate-300">
                    contato
                  </button>
                  <button  className="hover:text-slate-300">
                   sobre
                  </button>
                </div>
              </div>
            </header>
        );
  };
  
  export default Header;