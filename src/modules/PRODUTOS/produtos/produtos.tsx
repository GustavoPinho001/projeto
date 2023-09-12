import { useEffect, useState } from "react";
import Header from "../../../primario/header";
import { getAllProductsAPI } from "../../../API/products";
import {  useNavigate } from "react-router-dom";
interface Produtos {
  id: string,
  name: string,
	description: string,
	price: number,
  images:string
}


const Produtos = () => {
const navigate = useNavigate();
 const [products, setProducts]=useState<Produtos[]>([])

 const getProducts = async () => {
    try {
      const response = await getAllProductsAPI();
      console.log(response); // Verifique os dados da API
      setProducts(response);
    } catch (error) {
      console.error("Error fetching Product:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toEditProduct = (id: string)=>{
    navigate(`/updateProduct/${id}`)
  }


  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-[93.5vh] bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((item, index) => (
              <div key={index} className="border rounded-t-lg flex flex-col justify-between bg-white">
                <div className=" flex items-center h-[50%] justify-center rounded-t-lg ">
                  <img src={item.images} alt="" className="h-full w-full"/>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                </div>
                <p className="text-base font-semibold text-gray-800">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => {
                    toEditProduct(item.id);
                  }}
                  className="mt- px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                >
                  Alterar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
