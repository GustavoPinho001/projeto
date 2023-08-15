import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Person {
  content: string;
  number: string;
}

const Cadastro: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const handleSub = (form: React.FormEvent<HTMLFormElement>): void => {
    form.preventDefault();
    const newPerson: Person = {
      content: form.currentTarget[0].value,
      number: form.currentTarget[1].value
    };
    setPeople([...people, newPerson]);
  };

  const navigateHome = useNavigate();

  const funcaosla = (): void => {
    navigateHome("/");
  };

  const navigate = useNavigate();

  const funcao = (): void => {
    navigate("/cadastro");
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-[10%]">
        <button className="w-[50%] bg-gray-600 text-white" onClick={funcao}>
          Cadastro
        </button>
        <button className="w-[50%] bg-black text-white" onClick={funcaosla}>
          home
        </button>
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSub} className="flex flex-col w-[20%]">
          <label htmlFor="nome">Nome</label>
          <input className="border" id="nome" type="text" />
          <label htmlFor="numero">Telefone</label>
          <input className="border" id="numero" type="text" />
          <br />
          <button className="border">inscreva-se</button>
        </form>
        <div>
          <ul>
            {people.map((person, index) => (
              <li key={index}>
                <span>{person.content}</span> - <span>{person.number}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;