import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const goToHome = (): void => {
    navigate("/");
  };

  const goToContact = (): void => {
    navigate("/contato");
  };

  const goToSubscribers = (): void => {
    navigate("/inscritos");
  };

  const goToProducts = (): void => {
    navigate("/produtos");
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold cursor-pointer" onClick={goToHome}>
          One.Gus
        </h1>
        <nav className="space-x-4">
          <button
            onClick={goToHome}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={goToContact}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Contato
          </button>
          <button
            onClick={goToSubscribers}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Inscritos
          </button>
          <button
            onClick={goToProducts}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Produtos
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
