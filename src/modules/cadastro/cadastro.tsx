import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Scrollbar.css";
import Header from "../../primario/header";
import { createUser, deleteUser, getAllUsers } from "../../API/cobranca";
import { toast } from "react-toastify";

export interface Person {
  id: string,
  name: string,
  email: string,
  senha: string,

}



const Cadastro: React.FC = () => {
  //------------------------------------------------------
  const [peoples, setPeoples] = useState<Person[]>([]);
  const [load, setLoad]=useState(false)
  const [numeroId, setNumeroId] =useState<Person>();
  const valoresIniciais: Person = {
    id:"",
    name: "",
    email: "",
    senha:""
  };
  const deletar = async (form : Person)=>{
    const userDeleted: Person = await deleteUser(form.id)
  }
  const handleSub = async (form: Person) => {
    setLoad(true)
    const newPerson: Person = await createUser( form).then((person)=> {
      toast.success("Usuario criado com sucesso")
      setLoad(false)
      return person;
    }).catch(()=> {
      toast.error("deu ruim")
        setLoad(false)
    })
  };
  //------------------------------------------------------
  const navigateHome = useNavigate();

  const funcaosla = (): void => {
    navigateHome("/");
  };


  useEffect(()=>{
    (async () => {
     
        const response = await getAllUsers()
        setPeoples(response)
     
    })();
    
  },[load])

  //------------------------------------------------------
  return (
    <>
      <Header />
      <div className="flex h-[95vh] justify-around ">
        <div className="flex w-[50%] justify-around flex-col items-center">
          <div className="text-center tracking-wider text-white leading-10">
            <h1 className="">TITULO ALEATORIO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus possimus asperiores maiores molestias quam. Nam dolores
              error veritatis corporis minima mollitia nobis, recusandae
              quaerat? Dolores expedita non nulla vel corrupti?
            </p>
          </div>
          <Formik initialValues={valoresIniciais} onSubmit={handleSub}>
            <Form className="">
              <div className="flex flex-col text-white gap-5">
                <label htmlFor="name" className="text-white">
                  name
                </label>
                <Field
                  className="border rounded-md bg-transparent "
                  type="text"
                  required
                  id="name"
                  name="name"
                />

                <label htmlFor="email" className="">
                  Email
                </label>
                <Field
                  className="border rounded-md bg-transparent "
                  type="email"
                  id="email"
                  required
                  name="email"
                />
                <label htmlFor="senha" className="">
                  senha
                </label>
                <Field
                  className="border rounded-md bg-transparent "
                  type="password"
                  id="senha"
                  required
                  name="senha"
                />
                <button

                  type="submit"
                  disabled={load}
                  className="border rounded-md p-2 bg-[#0000006f]"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex w-[50%] flex-col text-center p-5">
          <h1 className="text-2xl tracking-[10px] text-white  ">Inscritos</h1>
          <div className="flex flex-col text-center text-white overflow-y-scroll  p-10 ">
            <ul className="flex gap-4 flex-col ">
              {peoples.map((person, index) => (
                <li
                  key={index}
                  className="flex text-2xl p-10 bg-[#03000050] justify-between items-center rounded-lg  h-[80px]"
                >
                  <p className="text-white text-lg">
                    <span className=" text-white text-2xl">Nome</span>:{" "}
                    {person.name}
                  </p>
                  <p>{person.id}</p>
                  <p className="text-white text-lg">
                    <span className=" text-2xl">Email</span>:{" "}
                    {person.email}
                  </p>
                  <button onClick={deletar} >Deletar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
