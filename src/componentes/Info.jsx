function Info({ data }) {
  return (
    <>
      <div className=" grid place-content-center">
        <div className="">
          <h1> Today Hightlights</h1>
        </div>
        <div>
          <section className="w-96 grid grid-cols-2 gap-4 py-3 px-3 ">
            <div className="bg-[#1E213A]">
              <p>Wind Status</p>
              <p>{data.current?.wind_speed}Mph</p>
            </div>
            <div className="bg-[#1E213A]">
              <p>Humidity</p>
              <p>{data.current?.humidity}</p>
              <div class="w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                  class="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                  style={{ width: data.current?.humidity }}
                >
                  <p className="text-withe">{data.current?.humidity} %</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-96 grid grid-cols-2 gap-4 py-3  px-3">
            <div className="bg-[#1E213A]">
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
