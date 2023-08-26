import { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "../../API/cobranca/";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


interface People {
  id: string;
  name: string;
  email: string;
  senha: string;
}


const Inscritos = () => {
  const [peoples, setPeoples] = useState<People[]>([]); // Use o tipo People[]
  const [idUser, setidUser]=useState <People[]>()

  const navigate = useNavigate();
  
  const toUpdate =(id:string)=>{

    navigate(`/updateUser/${id}`)
  }
  
  
  const funcaosla = (): void => {
    navigate("/");
  };
  const fapi = (): void => {
    navigate("/contato");
  };
  const toIns = () => {
    navigate("inscritos");
  };
  
  
  
  const getUser = async () => {
    try {
      const response = await getAllUsers();
      console.log(response); // Verifique os dados da API
      setPeoples(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
    const deletar = async (usuario: People) => {
    const id = usuario.id
    
    const response = await deleteUser(id)
      .then((response) => {
        toast.success("usuario deletado");
        
        return response;
      })
      .catch(() => {
        toast.error("deu ruim");
        
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="flx flex-col">
      <div className="flex bg-white items-center h-[9vh] text-xl justify-around w-full ">
        <h1 className="text-black font-bold">One.Gus</h1>
        <div className="flex font-bold gap-7">
          <button onClick={funcaosla} className="hover:text-slate-500">
            home
          </button>
          <button onClick={fapi} className="hover:text-slate-500">
            contato
          </button>
          <button  className="text-slate-500">
            inscritos
          </button>
        </div>
      </div>
      <div className="h-[91vh] flex bg-white flex-col justify-between">
        <div className=" w-full overflow-y-scroll">
          {peoples?.map((item: People, index)  => (
            <div key={index} className="mb-4 border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.email}</p>
              <div className="mt-2">
                <button onClick={()=>deletar(item)} className="bg-red-500 text-white px-2 py-1 rounded mr-2">
                  Deletar
                </button>
                <button onClick={()=>toUpdate(item.id)} className="bg-blue-500 text-white px-2 py-1 rounded">
                  Atualizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Inscritos;
