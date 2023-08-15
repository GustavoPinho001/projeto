import { useNavigate } from "react-router-dom";

const Cadastro=(): any =>{
    
    const navigateHome = useNavigate()
    const funcaosla = ()=>{
        navigateHome("/")
    }
    const navigate= useNavigate();

    const funcao =() =>{
        navigate("/cadastro")
    }

    return(
    <div className="flex h-screen w-screen flex-col">
        <div className="flex h-[10%]">
            <button className=" w-[50%] bg-gray-600 text-white " onClick={funcao}>Cadastro</button> 
            <button className=" w-[50%] bg-black text-white " onClick={funcaosla}>home</button> 
        </div>
        <div className="flex flex-col items-center" >         
            <form className=" flex flex-col w-[20%]">
                <label htmlFor="nome">Nome</label>
                <input className="border" id="nome" type="text" />
                <label htmlFor="numero">Telefone</label>
                <input className="border"id="numero" type="text" />
                <br/>
                <button className="border ">enviar</button>
                <button className="border ">enviar</button>
            </form>
        </div>
    </div>
    )
}
export default Cadastro;