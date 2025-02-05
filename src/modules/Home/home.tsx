import Header from "../../primario/header";
import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const toSubscribers = (): void => {
    navigate("/inscritos");
  };

  const toAddProduct = (): void => {
    navigate("/addprodutos");
  };

  const toProducts = (): void => {
    navigate("/produtos");
  };

  return (
    <div className="bg-gray-700 h-screen w-screen">
      <Header />
      <div className="h-[90%] w-full flex flex-col justify-between">
        <section className="flex w-[50%] justify-around mb-16 mt-16 flex-col items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">
              <span className="text-red-600">O</span>ne
              <span className="text-base text-red-600">.gus</span>
            </h1>
            <p className="text-gray-300 text-sm mt-1">
              Desenvolvedor Web Top 1 Nasus BR
            </p>
          </div>
        </section>
        <hr />
        <section className="bg-[#ddddffcc] py-16">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Consumo de APIS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <button
                onClick={toSubscribers}
                className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg text-white font-semibold mb-2">
                  Ver todos os usuários
                </h3>
                <p className="text-white">API buscar todos os Usuários</p>
              </button>
              <button
                onClick={toAddProduct}
                className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg text-white font-semibold mb-2">
                  Cadastrar um produto
                </h3>
                <p className="text-white">API para cadastrar um produto</p>
              </button>
              <button
                onClick={toProducts}
                className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg text-white font-semibold mb-2">
                  Veja todos os Produtos
                </h3>
                <p className="text-white">API buscar todos os produtos</p>
              </button>
            </div>
          </div>
        </section>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            &copy; 2023 melhorzin que tá tendo mas o Zoro sola.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
