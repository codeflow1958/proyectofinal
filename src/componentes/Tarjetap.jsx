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
      <div className="w-96 aling-center  md:mx-auto  h-auto bg-[#1E213A] mr-5">
        <div className=" grid place-items-center mt-14 bg-fixed ...">
          <img
            class="scale-150 "
            src={`https://openweathermap.org/img/wn/${data.current?.weather[0].icon}.png`}
            alt=""
          />
        </div>
        <div className="grid  place-items-center">
          <p className="text-7xl text-white">{data.current?.temp} c </p>
          <p className="text-4xl p-10 text-white">
            {data.current?.weather[0].description}
          </p>

          <div>
            <div>
              <p className="text-2xl text-white m-20">Today</p>
              <i> </i>
            </div>
            <p> </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tarjetap;
