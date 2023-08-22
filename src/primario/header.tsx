import { useNavigate } from "react-router-dom";


const Header=(): any =>{
    const navigate = useNavigate();
  
    const funcaosla = (): void => {
      navigate("/");
    };
  
  
    const funcao = (): void => {
      navigate("/cadastro");
    };
    const fapi =(): void => {
      navigate ("/contato")
    }
  
   
      return (   
            <header className="flex h-[9vh] items-center bg-[#0000002f]">
              <div className="text-xl flex justify-around items-center w-full">
                <h1 className="text-white font-bold  ">
                  One.Gus
                </h1>
                <div className="flex text-white font-bold  gap-7">
                  <button onClick={funcaosla}  className="hover:text-slate-500">
                    home
                  </button>
                  <button onClick={fapi}  className="hover:text-slate-500">
                    contato
                  </button>
                  <button  className="hover:text-slate-500">
                      sobre
                  </button>
                  <button onClick={funcao} className=" rounded-xl p-3 text-black bg-red-500 hover:bg-red-600 hover:text-white active:bg-slate-500">
                    Cadastre-se
                  </button>
                </div>
              </div>
            </header>
        );
  };
  
  export default Header;