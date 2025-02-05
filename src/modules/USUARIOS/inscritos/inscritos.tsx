import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteUser, getAllUsers } from "../../../API/users";
import Header from "../../../primario/header";

interface People {
  id: string;
  name: string;
  email: string;
  senha: string;
}

const Inscritos = () => {
  const [peoples, setPeoples] = useState<People[]>([]); // Use o tipo People[]
  const [idUser, setidUser] = useState<People[]>();

  const navigate = useNavigate();

  const toUpdate = (id: string) => {
    navigate(`/updateUser/${id}`);
  };

  const funcaosla = (): void => {
    navigate("/");
  };
  const fapi = (): void => {
    navigate("/contato");
  };
  const toIns = () => {
    navigate("inscritos");
  };
  const toPro = () => {
    navigate("/produtos");
  };

  const getUser = async () => {
    try {
      const response: any = await getAllUsers();
      console.log(response); // Verifique os dados da API
      setPeoples(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const deletar = async (usuario: People) => {
    const id = usuario.id;

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
    <div>
      <Header />
      <div className="h-[93.5vh] bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid gap-4">
            {peoples?.map((item: People, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-md"
              >
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.email}</p>
                <div className="mt-4">
                  <button
                    onClick={() => deletar(item)}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition-colors duration-300"
                  >
                    Deletar
                  </button>
                  <button
                    onClick={() => toUpdate(item.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};
export default Inscritos;
