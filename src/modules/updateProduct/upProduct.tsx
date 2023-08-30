import axios from "axios";

const UpProduct = ()=>{
    const deleteProduct = async () => {
        const response = await axios.delete('')
    }
    return(
        <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Editar Produto</h2>
        <div>
          <label className="block mb-1">Nome:</label>
          <input
            type="text"
           
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Preço:</label>
          <input
            type="text"
            
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Descrição:</label>
          <textarea
         
            
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
         
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Salvar
        </button>
        <button onClick={deleteProduct}>Deletar Produto</button>
      </div>
    );
};
export default UpProduct;