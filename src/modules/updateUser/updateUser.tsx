import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserApi, updateUsers } from "../../API/cobranca";
import Header from "../../primario/header";
interface Personup {
  id: number;
  name: string;
  email: string;
  senha: string;
}
const TelaUp = () => {
  const [values, setValues] = useState<Personup>({
    id: 0,
    name: "",
    email: "",
    senha: "",
  });

  const { id } = useParams();
  console.log(id);



  async function submit(params: Personup) {
    console.log(params);
    const response = await updateUsers(params)
  }

  useEffect(() => {
    (async () => {
      const user = await getUserApi(id as string);
      console.log(user);
      setValues(user);
    })();
  }, []);

 
  return (
    <div >
      <Header/>
      <div className=" ">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        
            <h2 className="text-2xl mb-4">Atualização de Login</h2>
            <Formik initialValues={values} onSubmit={submit} enableReinitialize>
              <Form>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded-sm"
                    required
                  />
                </div>
                {/* <div className="mb-4">
                  <label htmlFor="password" className="block mb-1">
                    Senha
                  </label>
                  <Field
                    type=""
                    id="password"
                    name="password"
                    className="w-full p-2 border rounded-sm"
                    required
                  />
                </div> */}
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1">
                    Nome
                  </label>
                  <Field
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-sm"
                    name="name"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Atualizar Login
                </button>
              </Form>
            </Formik>
        
        </div>
      </div>
    </div>
  );
};
export default TelaUp;
