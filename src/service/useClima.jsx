import { useState, useEffect } from "react";

function useClima() {
  const [data, setData] = useState([]);
  const [week, setWeek] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [country, setCountry] = useState("guatemala");

  // costante para realizar el fetch
  const getData = async (url, setState) => {
    const res = await fetch(url);
    const datos = await res.json();

    setState(datos);
  };

  //console.log(week);
  //console.log(data);
  console.log(lat);
  console.log(lon);

  useEffect(() => {
    if (lat === "" && lon === "") return;
    getData(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric`,
      setData
    );
  }, [lat, lon]);
  //// aca esta el use efect

  // fetch a la segunda api
  useEffect(() => {
    getData(
      `http://api.openweathermap.org/geo/1.0/direct?q=${
        country == undefined ? "guatemala" : country
      }&limit=5&appid=2f9b41a511d1351d341bc7bd79cd2e13`,
      setWeek
    );
  }, [country]);

  const changeContry = (ciudad) => {
    setCountry(ciudad);
  };

  const dateFormat = (date) => {
    const fecha = new Date(date * 1000);
    return fecha.toLocaleDateString("en-gb");
  };

  useEffect(() => {
    setLat(week[0]?.lat);
  }, [week]);
  useEffect(() => {
    setLon(week[0]?.lon);
  }, [week]);
  ///// funcion para la geo localizacion
  const geoPosition = async () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLat(latitude);
    setLon(longitude);
    console.log(latitude);
    console.log(longitude);
  };

  const handleError = () => {
    console.log("Sin permisos de ubicación");
    window.alert("Sin Permisos de Ubicacion");
  };

  ///------- aca termina la funcion de geolocalizacion------------////

  /// aca estoy retornando la data

  return { data, week, dateFormat, changeContry, country, geoPosition };
}
// aca estoy exportando
export default useClima;
