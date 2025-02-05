import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../../../API/users";
import { Person } from "../cadastro/cadastro";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name:"",
    email: "",
    senha: "",
  };

  const handleLogin = async (form: Person) => {
    setIsLoading(true);
    try {
      const response :any = await login(form);
      toast.success("Login realizado com sucesso!");
      navigate("/");
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado ao fazer o login.");
    } finally {
      setIsLoading(false);
    }
  };

  const toCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
        <Form className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Bem-vindo de volta!
          </h1>
          <label className="text-gray-700 block mb-2" htmlFor="email">
            E-mail
          </label>
          <Field
            className="border p-2 rounded w-full focus:outline-none"
            type="email"
            required
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
          />
          <label className="text-gray-700 block mt-4 mb-2" htmlFor="senha">
            Senha
          </label>
          <Field
            className="border p-2 rounded w-full focus:outline-none"
            type="password"
            required
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
          />
          <button
            className="mt-6 bg-red-500 text-white p-2 rounded w-full hover:bg-red-600 transition duration-300"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Carregando..." : "Fazer Login"}
          </button>
          <div className="flex justify-between mt-4">
            <button
              className="text-blue-500 hover:underline"
              onClick={toCadastro}
            >
              Criar uma conta
            </button>
            <a
              href="#"
              className="text-blue-500 hover:underline"
            >
              Esqueceu a senha?
            </a>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
