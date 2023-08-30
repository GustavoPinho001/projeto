import { useEffect, useState } from "react";
import Header from "../../primario/header";
import { getAllProductsAPI } from "../../API/cobranca";
interface Produtos {
    name: string,
	description: string,
	price: number,
}


const produtos = () => {
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


  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[91vh] w-screen">
        <div className="items-center bg-white flex justify-center h-full w-full">
          <div className="grid grid-cols-4 gap-4">
          {products?.map((items, index)  => (
            <div key={index} className=" flex flex-col items-center p-5  bg-[#EBD8E4]" >
                <div className="w-20 h-20 text-center bg-black">
                    imagem
                </div>
                <h2>{items.name}</h2>
                <p>{items.description}</p>
                <p>{items.price}</p>
            </div>          
          ))} 
        </div>
        </div>
      </div>
    </>
  );
};

export default produtos;
