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
  // useEffect(() => {
  //   console.log(ciudad);
  // }, [ciudad]);
  const aparece = () => {
    setBuscar(!buscar);
  };

  return (
    <>

      <main className="m">
        <div className="bg-[#1E213A]">
          {!buscar && (
            <div className="mr-5">
              <button className="mt-10 mr-10" onClick={aparece}>
                <svg
                  class="h-8 w-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
                  <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
                  <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </button>
            </div>
          )}

          {buscar && (
            <div>
              <div className="mt-10">
                <button
                  className="btn-close btn-close-white"
                  onClick={aparece}
                ></button>
                <input
                  type="text"
                  onChange={(e) => setCiudad(e.target.value)}
                  value={ciudad}
                />
                <button
                  onClick={() => {
                    changeContry(ciudad);
                  }}
                >
                  <svg
                    class="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <circle cx="11" cy="11" r="8" />{" "}
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
                <button onClick={geoPosition}>
                  <svg
                    class="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
                <div className="text-white                                   ">
                  {week.map((element, i) => (
                    <li>
                      <button
                        key={i}
                        onClick={() =>
                          changeContry({ target: { value: element } })
                        }
                      >
                        {element.name},{element.country}
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {data && (
          <div className="w-100 flex h-auto">

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
            <div className="w-100 bg-[#100E1D] text-white ">
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
