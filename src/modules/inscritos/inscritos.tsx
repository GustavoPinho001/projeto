import { useEffect, useState } from "react";
import { getAllUsers } from "../../API/cobranca";
import Header from "../../primario/header";

const Inscritos = () => {
  const [peoples, setPeoples] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getAllUsers();
      setPeoples(response);
    })();
  }, [load]);

  return (
    <div>

      <Header />
      
      <div className="h-[91vh] flex flex-col justify-between">
        <div className="h-[91vh] flex flex-col justify-between">

          <div className="h-40">
            {peoples.map((items, index): any => {
              <div className="Text-white text-5xl" key={index}>
                <p>{items}</p>
                <p>{items}</p>
              </div>;
            })}
          </div>

        </div>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            &copy; 2023 melhorzin que ta teno mas o zoro sola.
          </div>
        </footer>

      </div>
    </div>
  );
};
export default Inscritos;
