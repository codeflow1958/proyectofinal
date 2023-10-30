import "./App.css";
import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";
import Info from "./componentes/Info";
import Pronostico from "./componentes/Pronostico";
import { useEffect, useState } from "react";

function App() {
  // aca esta la cosntante de la data obtenida del la api
  const [ciudad, setCiudad] = useState("");
  const [buscar, setBuscar] = useState(false);

  const { data, country, changeContry, geoPosition, week } = useClima();
  //console.log(data);
  ///console.log(country);
  useEffect(() => {
    console.log(ciudad);
  }, [ciudad]);
  const aparece = () => {
    setBuscar(!buscar);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={aparece}>
        Buscar por lugares
      </button>

      {buscar && (
        <div className="">
          <input
            type="text"
            onChange={(e) => setCiudad(e.target.value)}
            value={ciudad}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              changeContry(ciudad);
            }}
          >
            Buscar
          </button>
          <button className="btn btn-primary " onClick={geoPosition}>
            localizar
          </button>
          <div>
            {week.map((element, i) => (
              <li>
                <button
                  key={i}
                  onClick={() => changeContry({ target: { value: element } })}
                >
                  {element.name},{element.country}
                </button>
              </li>
            ))}
          </div>
        </div>
      )}

      {data && (
        <div className="w-100 flex">
          <Tarjetap data={data} />
          <div className="w-100">
            <Pronostico data={data} />
            <Info data={data} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
