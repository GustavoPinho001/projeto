import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { createUser } from "../../../API/users";

export interface Person {
  name: string;
  email: string;
  senha:string
}

const Cadastro: React.FC = () => {
  const [load, setLoad] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    senha: "",
  };

  const toLog = () => {
    navigate("/login");
  };

  const handleSub = async (form: Person) => {
    setLoad(true);
    try {
      const newPerson = await createUser(form);
      toast.success("Usuário criado com sucesso");
      setLoad(false);
    } catch (error) {
      toast.error("Algo deu errado");
      setLoad(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`bg-${darkMode ? "gray-900" : "gray-100"} min-h-screen flex flex-col justify-center items-center transition-colors duration-300`}>
      <section className={`w-full h-[60%] sm:h-[40%] p-6 flex flex-col justify-center items-center bg-${darkMode ? "gray-800" : "white"}`}>
        <div className={`text-center text-${darkMode ? "white" : "gray-800"} text-2xl sm:text-3xl mb-4`}>
          <h1>Crie uma conta</h1>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSub}>
          <Form className="w-full max-w-md flex flex-col gap-4">
            <div>
              <label htmlFor="name" className={`text-${darkMode ? "white" : "gray-800"} font-semibold mb-1`}>
                Nome completo
              </label>
              <Field
                className={`border p-2 rounded-md bg-${darkMode ? "gray-800" : "gray-200"} w-full text-${darkMode ? "white" : "gray-800"}`}
                type="text"
                required
                id="name"
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className={`text-${darkMode ? "white" : "gray-800"} font-semibold mb-1`}>
                Email
              </label>
              <Field
                className={`border p-2 rounded-md bg-${darkMode ? "gray-800" : "gray-200"} w-full text-${darkMode ? "white" : "gray-800"}`}
                type="email"
                id="email"
                required
                name="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div>
              <label htmlFor="senha" className={`text-${darkMode ? "white" : "gray-800"} font-semibold mb-1`}>
                senha
              </label>
              <Field
                className={`border p-2 rounded-md bg-${darkMode ? "gray-800" : "gray-200"} w-full text-${darkMode ? "white" : "gray-800"}`}
                type="password"
                id="senha"
                required
                name="senha"
                placeholder="Your Password"
              />
            </div>
            <button
              type="submit"
              disabled={load}
              className={`bg-${darkMode ? "blue-600" : "red-500"} text-white rounded-md p-2 hover:bg-${darkMode ? "blue-700" : "red-600"} transition duration-300`}
            >
              Cadastrar
            </button>
            <p>ja tem uma conta?<Link to={"/login"} className="text-blue-600">Log in</Link></p>
          </Form>
        </Formik>
        <button
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 p-2 rounded-full bg-${darkMode ? "gray-800" : "gray-200"} text-${darkMode ? "white" : "gray-800"} hover:bg-${darkMode ? "gray-600" : "gray-300"} transition duration-300`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </section>
    </div>
  );
};

export default Cadastro;







