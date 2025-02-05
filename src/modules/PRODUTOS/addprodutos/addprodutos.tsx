import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addProductsAPI } from '../../../API/products';
import Header from '../../../primario/header';
import { toast } from 'react-toastify';

export interface Product {
  name: string;
  description: string;
  price: number;
  images:string;
}

const ProductForm: React.FC = () => {

    const navigate =useNavigate()
    const valoresIniciais: Product = {     
        name: "",
        description: "",
        price:0, 
        images: ""
      };
  const handleSubmit= async (form :Product)=>{
    try {
    toast.success('deu bom')
    const response = await addProductsAPI(form)
    console.log(response)
    }catch(error){
      toast.error('deu ruim')
    }
  }

  return (
    <>
        <Header/>      
        <div className='h-[91vh] flex items-center'>
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Cadastrar Produto</h2>
              <Formik initialValues={valoresIniciais} onSubmit={handleSubmit}>
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
            
                        className="mt-1 p-2 border w-full rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
                      <Field
                        id="description"
                        name="description"
            
                        className="mt-1 p-2 border w-full rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço</label>
                      <Field
                        type="number"
                        id="price"
                        name="price"
            
                        className="mt-1 p-2 border w-full rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="images" className="block text-sm font-medium text-gray-700">Imagem (  Adicione uma URL)</label>
                      <Field
                        type="text"
                        id="images"
                        name="images"
                        className="mt-1 p-2 border w-full rounded"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Cadastrar
                    </button>
                  </Form>
              </Formik>
            </div>
        </div>
    </>
  );
};

export default ProductForm;
