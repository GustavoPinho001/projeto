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
          <div className="flex h-screen w-screen bg-gray-300 flex-col">
            <header className="flex h-28 items-center bg-slate-700">
              <div className="flex justify-around w-full">
                <h1 className="text-white font-bold text-[40px] ">
                  Projeto SLA
                </h1>
                <div className="flex  gap-7">
                  <button onClick={funcaosla}  className="text-white font-bold text-[25px] hover:text-slate-300">
                    Home
                  </button>
                  <button onClick={funcao} className="text-white font-bold text-[25px] hover:text-slate-300">
                    cadastro
                  </button>
                  <button onClick={fapi} className="  text-white font-bold text-[25px] hover:text-slate-300">
                    TesteAPI
                  </button>
                </div>
              </div>
            </header>
            
          </div>
        );
  };
  
  export default Header;