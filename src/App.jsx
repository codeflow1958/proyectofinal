import "./App.css";
import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";
import Info from "./componentes/Info";
import Pronostico from "./componentes/Pronostico";
import { useEffect, useState } from "react";

function App() {
  // aca esta la cosntante de la data obtenida del la api
  const [ciudad, setCiudad] = useState("");

  const { data, country, changeContry } = useClima();
  //console.log(data);
  ///console.log(country);
  useEffect(() => {
    console.log(ciudad);
  }, [ciudad]);
  return (
    <>
      <main className=" h-screen ">
        <nav className="flex">
          <div className="flex-1 w-64">
            <input
              type="text"
              onChange={(e) => setCiudad(e.target.value)}
              value={ciudad}
            />
            <button
              className=" bg-blue-400 rounded- hover:bg-blue-500 text-white font-bold py-2 px-4 rounded "
              onClick={() => {
                changeContry(ciudad);
              }}
            >
              Buscar
            </button>
          </div>
          <div className=" flex gap-2 flex-1 w-32">
            <p>Weather</p>
            <p> {ciudad}</p>
          </div>
        </nav>

        {data && (
          <div className="w-100 flex mt-5">
            <Tarjetap data={data} />
            <div className="w-100">
              <Pronostico data={data} />
              <Info data={data} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
