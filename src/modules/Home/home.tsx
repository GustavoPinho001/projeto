import { Field, Form } from "formik";
import { Formik } from "formik/dist/Formik";
import { useNavigate } from "react-router-dom";

const Home=(): any =>{
    const navigate= useNavigate();

    const funcao =() =>{
        navigate("/cadastro")
    }
    const navigateHome = useNavigate()
    const funcaosla = ()=>{
        navigateHome("/")
    }
 
    return (
        <div className="flex h-screen w-screen bg-gray-300 flex-col">
          <header className="flex h-28 items-center bg-slate-700">
            <div className="flex justify-around w-full">
              <h1 className="text-white font-bold text-[40px] ">
                Projeto SLA
              </h1>
              <div className="flex  gap-7">
                <button onClick={funcaosla} className=" font-bold text-[25px] text-slate-300 border-b-[1px] border-b-slate-300">
                  Home
                </button>
                <button onClick={funcao} className="text-white font-bold text-[25px] hover:text-slate-300">
                  cadastro
                </button>
              </div>
            </div>
          </header>
          <div className="flex justify-between">
            <div className="flex flex-col-reverse justify-around w-[50%] box-border p-10 gap-4 items-center">
              <div className="text-center tracking-wider leading-10 text-xl">     
              </div>
            </div>
            <div className="flex w-[50%] flex-col text-center  p-10 ">
            </div>
          </div>
        </div>
      );
};

export default Home;