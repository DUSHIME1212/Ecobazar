import { ArrowRight } from '@phosphor-icons/react'

const BannarHome = () => {
  return (
    <div className="w-full min-h-[512px] grid grid-rows-5 lg:grid-cols-3 gap-2 lg:grid-rows-2 mt-2">
        <div
          className="row-span-3 lg:col-span-2 rounded-xl lg:row-span-2 relative bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/Bannar Big.png') ` }}
        >
          <div className="p-2 flex text-white w-full lg:w-2/3 flex-col gap-4 absolute top-8 left-8">
            <h1 className="text-5xl">Fresh & Healthy Organic Food</h1>
            <div className="p-4 size-fit border-l-4 flex flex-col gap-2 ">
              <h1 className="text-lg">
                Sale up to{" "}
                <span className="p-2 ml-2 bg-orange-400 rounded-lg">
                  30% OFF
                </span>
              </h1>
              <p className="text-sm">Free shipping on all your order.</p>
            </div>
            <button className="px-8 p-4 flex items-center gap-4 size-fit bg-transparent text-green-500 rounded-full">
              <span>Shop now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div
          className="row-span-1 lg:col-span-1 rounded-xl bg-no-repeat bg-cover  relative"
          style={{ backgroundImage: `url('/BG.png') ` }}
        >
          <div className="absolute flex flex-col gap-4 top-8 left-8">
            <div>
              <span className="text-xl">Summer Sale</span>
              <h1 className="text-3xl font-bold">75% OFF</h1>
            </div>
            <p className="text-sm opacity-40">Only Fruit & Vegetable</p>
            <button className="flex items-center bg-transparent gap-4 size-fit text-green-500">
              <span>Shop now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div
          className="col-span-1 rounded-xl grid place-items-center bg-no-repeat bg-cover  text-white"
          style={{ backgroundImage: `url('/Bannar.png') ` }}
        >
          <div className="flex flex-col gap-4 text-center p-8 justify-center items-center">
            <span className="text-xl">Best Deal</span>
            <h1 className="font-bold text-3xl">
              Special Products Deal of the Month
            </h1>
            <button className="flex items-center bg-transparent gap-4 size-fit text-green-500">
              <span>Shop now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
  )
}

export default BannarHome