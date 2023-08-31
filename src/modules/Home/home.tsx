import Header from "../../primario/header";
import Logo from "../../primario/logo";
import { useNavigate } from "react-router-dom";
const Home = (): any => {
  const navigate = useNavigate();

  
  const toIns = ()=>{
    navigate('/inscritos')
  }
  const toPro = ()=> {
    navigate('/produtos')
  }
  const toAddPro = ()=> {
    navigate ('/addprodutos')
  }
  return (
    <>
      <Header/>
      <div className="h-[91vh] flex flex-col  justify-between">
        <section className="flex w-[50%] justify-around mb-[6.6rem] mt-[6.6rem]  flex-col items-center">
 
                <Logo/>
        </section>
        <hr />
        <section className=" bg-[#ddddffcc]     py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">APIS</h2>   
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">   
              <button  onClick={toIns} className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-white font-semibold mb-2">Ver todos os usuarios</h3>
                <p className="text-white">API buscar todos os Usuarios</p>
              </button>
              <button onClick={toAddPro} className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-white font-semibold mb-2">Cadastrar um produto</h3>
                <p className="text-white">API para cadastrar um produto</p>
              </button>
              <button onClick={toPro} className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-white font-semibold mb-2">Veja todos os Produtos</h3>
                <p className="text-white">API buscar todos os produtos</p>
              </button>
            </div>
          </div>
        </section>
       <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            &copy; 2023 melhorzin que ta teno mas o zoro sola.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
