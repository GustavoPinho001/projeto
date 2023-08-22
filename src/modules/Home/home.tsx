import Header from "../../primario/header";
import Logo from "../../primario/logo";

const Home = (): any => {
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
            <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>
           
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">   
              <li className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-white font-semibold mb-2">Design de Interface</h3>
                <p className="text-white">Criamos designs que se destacam e proporcionam uma experiência única para os usuários.</p>
              </li>
              <li className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-white font-semibold mb-2">Desenvolvimento Web</h3>
                <p className="text-white">Criamos sites e aplicações web rápidas, responsivas e otimizadas.</p>
              </li>
              <li className="bg-[#0000009f] hover:scale-105 p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-white font-semibold mb-2">Consultoria em UX</h3>
                <p className="text-white">Oferecemos consultoria especializada em experiência do usuário para melhorar suas soluções digitais.</p>
              </li>
            </ul>
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
