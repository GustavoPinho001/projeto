import { Field, Form, Formik } from "formik";
import { Person } from "../cadastro/cadastro";
import { useState } from "react";
import axios from "axios";
import { login } from "../../../API/cobranca";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const[newLogin, setNewLogin]=useState()
    const navigate = useNavigate();

    const valoresIniciais:any = {
        id: "",
        name: "",
        email: "",
        senha: "",
      };

      const toCad =()=>{
        navigate('/cadastro')
      }
      const hundleLogin = async (form : Person) => {
        try {
            const response = await login(form);            
            toast.success ('logado com sucesso');
            // window.location.replace('/')
            navigate('/')
            localStorage.setItem("token", response.token);
          } catch (error) {
            console.log(error);
            toast.error('deu ruim');
        }
      }


  return (
    <div className="bg-slate-600 h-screen w-screen flex items-center justify-center">
      <Formik initialValues={valoresIniciais} onSubmit={ hundleLogin }>
        <Form className="flex flex-col justify-around gap-3">
          <label htmlFor="email">E-mail</label>
          <Field
            className="border border-gray-900 p-2 text-center rounded-md bg-transparent "
            type="email"
            required
            id="email"
            name="email"
          />
          <label htmlFor="senha">senha</label>

          <Field
            className="border border-gray-900 p-2 text-center rounded-md bg-transparent "
            type="password"
            required
            id="senha"
            name="senha"
          />
          <button className="border p-2 rounded-md" type="submit">Enviar</button>
          <button className="border p-2 rounded-md" onClick={toCad} >Cadastrar-se</button>

          </Form>
      </Formik>
          
    </div>
  );
};
export default Login