import React from "react";
function Pronostico({ data }) {
  //console.log(data.weather.icon);
  const dateFormat = (date) => {
    const fecha = new Date(date * 1000);
    return fecha.toLocaleDateString("en-gb");
  };

  return (
    <>
      <div className="w-100 grid grid-cols-4 gap-5 text-white ">
        {data.daily?.map((item, idx) => (
          <div
            key={idx}
            className="py-2 px-2 mt-10 grid place-items-center bg-[#1E213A] mx-15"
          >
            <div> {dateFormat(item.dt)}</div>
            <div>
              <img
                class="scale-125 "
                src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}.png`}
                alt="Weather"
              />
            </div>
            <div className=" grid grid-cols-2 gap-3 text-white">
              <div className="">{item.temp?.min}C</div>
              <div className="maxima">{item.temp?.max}C</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pronostico;

/*
 <div className="pronostico">
      <div>
        <div>day{dateFormat(data?.list[3].dt)}</div>
        <div> </div>
        <div>
          <div></div>
          <div>temp {data?.list[3].main.temp} </div>
        </div>
      </div>
      
    </div>

*/
