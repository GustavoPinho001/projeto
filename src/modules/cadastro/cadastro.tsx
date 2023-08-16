import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface Person {
  content: string;
  number: string;
}

const Cadastro: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const valoresIniciais: Person = {
    content: "",
    number: "",
  };

  const handleSub = (form: Person) => {
    const newPerson: Person = {
      content: form.content,
      number: form.number,
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
    <div className="flex h-screen w-screen bg-gray-300 flex-col">
      <header className="flex h-28 items-center bg-slate-700">
        <div className="flex justify-around w-full">
          <h1 className="text-white font-bold text-[40px] ">
            Projeto SLA
          </h1>
          <div className="flex  gap-7">
            <button onClick={funcaosla} className="text-white font-bold text-[25px] hover:text-slate-300">
              Home
            </button>
            <button onClick={funcao} className=" font-bold text-[25px] text-slate-300 border-b-[1px] border-b-slate-300">
              cadastro
            </button>
          </div>
        </div>
      </header>
      <div className="flex justify-between">
        <div className="flex flex-col-reverse justify-around w-[50%] box-border p-10 gap-4 items-center">
          <Formik initialValues={valoresIniciais} onSubmit={handleSub}>
            <Form className="flex p-2 flex-col gap-2 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-slate-700">
                  Nome
                </label>
                <Field
                  className="border rounded-md bg-slate-400 text-white"
                  type="text"
                  required
                  id="content"
                  name="content"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="number" className="text-slate-700">
                  Telefone
                </label>
                <Field
                  className="border rounded-md bg-slate-400 text-white"
                  type="number"
                  id="number"
                  required
                  name="number"
                />
              </div>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="flex border rounded-md p-2 bg-gray-300 font-bold"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
          <div className="text-center tracking-wider leading-10 text-xl">
            <h1 className="text-2xl text-slate-700 ">TITULO ALEATORIO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus possimus asperiores maiores molestias quam. Nam dolores
              error veritatis corporis minima mollitia nobis, recusandae
              quaerat? Dolores expedita non nulla vel corrupti?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio nulla accusamus sunt incidunt quis inventore debitis at
              natus sed odit, exercitationem qui! Alias dolores ad suscipit qui
              recusandae perferendis debitis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              modi voluptate cum impedit excepturi possimus in quaerat molestiae
              ipsum esse, totam soluta maxime, perferendis natus omnis suscipit
              fuga libero quam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus vitae non sed, repellendus maiores labore magni neque
              perspiciatis expedita nihil rerum animi repudiandae facere
              voluptate voluptatum saepe modi. Facere, porro?
            </p>
          </div>
        </div>
        <div className="flex w-[50%] flex-col text-center  p-10 ">
          <ul className="flex gap-4 flex-col h-[80px] border-blue-100 border-dashed">
            {people.map((person, index) => (
              <li key={index} className="flex text-2xl p-10 bg-slate-400 justify-between items-center rounded-lg  h-[80px]">
                <p className="text-white text-lg"><span className="text-black text-2xl">Nome</span>: {person.content}</p>  
                <p className="text-white text-lg"><span className="text-black text-2xl">Numero</span>: {person.number}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
