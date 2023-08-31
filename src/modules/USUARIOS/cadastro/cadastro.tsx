import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Scrollbar.css";
import Header from "../../../primario/header";
import { createUser, deleteUser, getAllUsers } from "../../../API/cobranca";
import { toast } from "react-toastify";
import Logo from "../../../primario/logo";

export interface Person {
  id: string | number;
  name: string;
  email: string;
  senha: string;
}

const Cadastro: React.FC = () => {
  //------------------------------------------------------
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const valoresIniciais: Person = {
    id: "",
    name: "",
    email: "",
    senha: "",
  };


  const toLog= ()=>{
    navigate('/login')
  }

  const handleSub = async (form: Person) => {
    setLoad(true);
    const newPerson: Person = await createUser(form)
      .then((person) => {
        toast.success("Usuario criado com sucesso");
        setLoad(false);
        return person;
      })
      .catch(() => {
        toast.error("deu ruim");
        setLoad(false);
      });
  };
  //------------------------------------------------------

  //------------------------------------------------------
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div className="flex h-[100%] items-center  ">
          <section className="flex w-[50%]  h-[100%] bg-[#000000cc] justify-around items-center rounded-lg flex-col ">
            <Logo />
          </section>
          <section className=" w-[50%] h-[100%] p-10 items-center justify-center rounded-lg flex flex-col gap-7 bg-[#ddddffcc] py-16">
            <div className=" text-center text-slate-900 text-3xl">
              <h1>Cadastre-se</h1>
            </div>
            <Formik initialValues={valoresIniciais} onSubmit={handleSub}>
              <Form className="flex flex-col font-medium text-xl  text-black gap-5">
                <div className="flex justify-around gap-4">
                  <div>
                    <label htmlFor="name">name </label>
                  </div>
                  <div>
                    <Field
                      className="border border-gray-900 p-2 text-center rounded-md bg-transparent "
                      type="text"
                      required
                      id="name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="flex justify-around gap-4">
                  <div>
                    <label htmlFor="email" className="">
                      Email
                    </label>
                  </div>
                  <div>
                    {" "}
                    <Field
                      className="border border-gray-900 text-center p-2 rounded-md bg-transparent "
                      type="email"
                      id="email"
                      required
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex justify-around gap-4">
                  <div>
                    <label htmlFor="senha" className="">
                      senha
                    </label>
                  </div>
                  <div>
                    <Field
                      className="border border-gray-900 text-center p-2 rounded-md bg-transparent "
                      type="password"
                      id="senha"
                      required
                      name="senha"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={load}
                  className="border text-white rounded-md p-2 bg-[#000000cc] hover:bg-slate-700"
                >
                  Enviar
                </button>
                <button onClick={toLog} className="border text-white rounded-md p-2 bg-[#000000cc] hover:bg-slate-700">back tolog-in</button>
              </Form>
            </Formik>
          </section>
        </div>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            &copy; 2023 melhorzin que ta teno mas o zoro sola.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Cadastro;
