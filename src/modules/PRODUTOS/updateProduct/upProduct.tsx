import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../primario/header";
import {
  deleteThisProduct,
  getProductByid,
  updateProducts,
} from "../../../API/products";

export interface PoductUP {
  id: number;
  price: string;
  description: string;
  name: string;
  images: string
}
const UpProduct = () => {
  const [values, setValues] = useState<PoductUP>({
    id: 0,
    price: "",
    description: "",
    name: "",
    images: ""
  });

  const { id } = useParams();
  console.log(id);

  const deleteProduct = async () => {
    const response = await deleteThisProduct(id as string);
  };

  async function submit(params: PoductUP) {
    console.log(params);
    const response = await updateProducts(params);
  }

  useEffect(() => {
    (async () => {
      const pro = await getProductByid(id as string);
      console.log(pro);
      setValues(pro);
    })();
  }, []);
  return (
    <div>
      <Header />
      <div className="min-h-[91vh] flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md">
          <Formik initialValues={values} onSubmit={submit} enableReinitialize>
            <Form className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Nome do Produto
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="description" className="text-sm font-medium">
                  Descrição do Produto
                </label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                  className="w-full p-2 border rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="price" className="text-sm font-medium">
                  Preço do Produto
                </label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  className="w-full p-2 border rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="images" className="text-sm font-medium">
                 Adiciona uma imagem
                </label>
                <Field
                  type="text"
                  id="images"
                  name="images"
                  className="w-full p-2 border rounded-sm"
                />
              </div>
              <button
                type="submit"
                className="p-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={deleteProduct}
                className="p-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
              >
                Deletar Produto
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default UpProduct;
