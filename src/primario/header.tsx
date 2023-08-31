import { useNavigate } from "react-router-dom";


const Header=(): any =>{
    const navigate = useNavigate();
  
    const funcaosla = (): void => {
      navigate("/");
    };
    const fapi =(): void => {
      navigate ("/contato")
    }
    const toIns = ()=>{
      navigate('/inscritos')
    }
    const toPro = ()=> {
      navigate ('/produtos')
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
                  <button onClick={toIns}  className="hover:text-slate-500">
                      inscritos
                  </button>
                  <button onClick={toPro}  className="hover:text-slate-500">
                      Produtos
                  </button>
                </div>
              </div>
            </header>
        );
  };
  
  export default Header;