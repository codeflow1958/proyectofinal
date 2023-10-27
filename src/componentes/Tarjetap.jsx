import React from "react";

function Tarjetap({ data }) {
  // let url = "https://openweathermap.org/img/wn/";
  //let iconurl = url + data?.weather[0].icon + ".png";

  const dateFormat = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date(date);
    return day.toLocaleDateString("en-gb", options);
  };

  return (
    <>
      <div className="w-60 h-screen bg-blue-900 ">
        <div></div>
        <div className=" grid  justify-center bg ">
          <img
            className=" object-cover h-48 w-96 "
            src={`https://openweathermap.org/img/wn/${data.current?.weather[0].icon}.png`}
            alt=""
          />
        </div>
        <div className=" grid  justify-center  text-white">
          <p>{data.current?.temp} c </p>
          <p>{data.current?.weather[0].description}</p>

          <div>
            <div>
              <p>Today</p>
              <i> </i>
            </div>
            <p> </p>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Tarjetap;
