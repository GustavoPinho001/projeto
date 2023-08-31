import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByid, getUserApi, updateUsers, updateProducts, deleteThisProduct } from "../../../API/cobranca";
import Header from "../../../primario/header";

export interface PoductUP {
  id: number;
  price: string;
  description:string,
  name: string
}
const UpProduct =()=>{
  const [values, setValues] = useState<PoductUP>({
    id: 0,
    price:"",
    description:"",
    name: "",
  });
  
  
  
  const { id } = useParams();
  console.log(id);
  
  const deleteProduct = async () =>{
    const response = await deleteThisProduct(id as string)
 
  }

  async function submit(params: PoductUP) {
    console.log(params);
    const response = await updateProducts(params)
  }

  useEffect(() => {
    (async () => {
      const pro = await getProductByid(id as string);
      console.log(pro);
      setValues(pro);
    })();
  }, []);
  return(
<Formik initialValues={values} onSubmit={submit} enableReinitialize>
    <Form>
        <div>
          <label htmlFor=""></label>
          <Field
          type="text "
          id="name"
          name="name"
          className="w-full p-2 border rounded-sm"
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <Field
          type="text "
          id="description"
          name="description"
          className="w-full p-2 border rounded-sm"
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <Field
          type="number"
          id="price"
          name="price"
          className="w-full p-2 border rounded-sm"
         />
        </div>
        <button className="p-10 bg-white">Enviar</button>
        <button onClick={deleteProduct} className="p-10 bg-white">Deletar</button>
        
    </Form>
</Formik>  
    

 ) 
}
export default UpProduct;