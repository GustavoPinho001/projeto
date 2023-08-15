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
 
    return(
        <div className="flex h-screen w-screen flex-col">
        <div className="flex h-[10%]">
            <button className=" w-[50%] bg-black text-white " onClick={funcao}>Cadastro</button> 
            <button className=" w-[50%] bg-gray-600 text-white " onClick={funcaosla}>home</button> 
        </div>
            <div className="flex flex-col items-center" >         
             
            </div>
        </div>
        )
    }
export default Home;