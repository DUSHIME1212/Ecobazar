const AdsHotDeals = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 my-8">
      <div
        className="w-full lg:w-1/3 min-h-[512px] rounded-3xl object-cover"
        style={{ backgroundImage: `url('/timestamp/Rectangle 54.png')` }}
      >
        <div className="flex flex-col text-white gap-4 items-center h-full p-4">
          <p className="text-xl">Hot Deals</p>
          <h1>Sale of the Month</h1>
          <div className="flex flex-row gap-2 items-start">
            <h1 className="flex justify-center flex-col items-center text-lg">
              <span>00</span>
              <span>Days</span>
            </h1>
            :
            <h1 className="flex justify-center flex-col items-center text-lg">
              <span>00</span>
              <span>Hours</span>
            </h1>
            :
            <h1 className="flex justify-center flex-col items-center text-lg">
              <span>00</span>
              <span>Mins</span>
            </h1>
            :
            <h1 className="flex justify-center flex-col items-center text-lg">
              <span>00</span>
              <span>Secs</span>
            </h1>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-1/3  min-h-[512px] rounded-3xl object-cover"
        style={{ backgroundImage: `url('/timestamp/Rectangle 54 (1).png')` }}
      >
        <div className="flex justify-center items-center flex-col gap-4 p-4 text-white">
          <h2>85% Fat Free</h2>
          <h1>Low-Fat Meat</h1>
          <h1 className="text-lg">
            Started at
            <span className="text-orange-500 opacity-100"> $79.99</span>{" "}
          </h1>
        </div>
      </div>
      <div
        className="w-full lg:w-1/3  min-h-[512px] rounded-3xl object-cover"
        style={{ backgroundImage: `url('/timestamp/Rectangle 54 (2).png')` }}
      >
        <div className="flex justify-center items-center flex-col gap-4 p-4 text-black">
          <h2>Summer Sale</h2>
          <h1>100% Fresh Fruit</h1>
          <h1 className="text-xl">
            Started at{" "}
            <span className="text-yellow-500 bg-black p-1 px-2 rounded-lg opacity-100">
              {" "}
              $79.99
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdsHotDeals;
