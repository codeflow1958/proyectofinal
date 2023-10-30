function Info({ data }) {
  return (
    <>
      <div className=" grid place-content-center">
        <div className="">
          <h1 className=" text-xl text-left "> Today Hightlights</h1>
        </div>
        <div>
          <section className="w-96 grid grid-cols-2 gap-4 py-3 px-3 ">
            <div className="bg-[#1E213A]">

        <div className="mt-5">
          <h1> Today Hightlights</h1>
        </div>
        <div>
          <section className="w-96 grid grid-cols-2 gap-4 py-3 px-3 mt-2 ">
            <div>

              <p>Wind Status</p>
              <p>{data.current?.wind_speed}Mph</p>
            </div>
            <div className="bg-[#1E213A]">
              <p>Humidity</p>
              <p>{data.current?.humidity}</p>
              <div class="mb-5 h-2 rounded-full bg-gray-200">
                <div
                  class="h-2 rounded-full bg-orange-500"
                  style={{ width: data.current?.humidity }}
                ></div>

                <p className="text-withe">{data.current?.humidity} %</p>
              </div>
            </div>
          </section>
          <section className="w-96 grid grid-cols-2 gap-4 py-3  px-3">
            <div className="bg-[#1E213A]">

          <section className="w-96 grid grid-cols-2 gap-4 py-3  px-3 mt-3">
            <div>
              <p>visibilyti</p>
              <p>{data.current?.visibility} </p>
            </div>

            <div className="bg-[#1E213A] ">
              <p>Air Presure</p>
              <p>{data.current?.pressure}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Info;
