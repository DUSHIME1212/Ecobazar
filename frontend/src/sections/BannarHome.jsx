import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BannarHome = () => {
  return (
    <div className="w-full min-h-[512px] grid grid-rows-5 lg:grid-cols-3 gap-6 lg:grid-rows-2 mt-6">
      {/* Big Banner */}
      <div
        className="row-span-3 lg:col-span-2 rounded-2xl lg:row-span-2 relative bg-center bg-no-repeat bg-cover overflow-hidden group shadow-lg shadow-gray-100"
        style={{
          backgroundImage: `url('/Bannar Big.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="p-8 lg:p-12 flex text-white w-full lg:w-2/3 flex-col gap-6 absolute top-0 left-0 h-full justify-center">
          <h1 className="text-4xl lg:text-6xl  leading-tight tracking-tight">
            Fresh & Healthy <br />
            <span className="text-green-400">Organic Food</span>
          </h1>
          <div className="flex flex-col gap-2 border-l-4 border-green-500 pl-6 py-2">
            <h2 className="text-xl font-medium flex items-center gap-3">
              Sale up to{" "}
              <span className="px-3 py-1 bg-orange-500 text-white rounded-lg text-sm uppercase tracking-widest animate-pulse">
                30% OFF
              </span>
            </h2>
            <p className="text-gray-100 font-medium">
              Free shipping on all your order.
            </p>
          </div>
          <Link to="/shop">
            <Button className="rounded-full px-10 h-14 bg-green-600 hover:bg-green-700 text-white font-medium text-lg shadow-xl shadow-green-900/20 group-hover:translate-x-2 transition-transform">
              Shop now
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Summer Sale Banner */}
      <div
        className="row-span-1 lg:col-span-1 rounded-2xl bg-no-repeat bg-cover relative overflow-hidden shadow-md"
        style={{
          backgroundImage: `url('/BG.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute flex flex-col gap-4 top-8 left-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-800">
              Summer Sale
            </span>
            <h1 className="text-4xl text-gray-900">75% OFF</h1>
          </div>
          <p className="text-sm font-medium text-gray-600">
            Only Fruit & Vegetable
          </p>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-green-600 font-medium group"
          >
            <span>Shop now</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* Best Deal Banner */}
      <div className="col-span-1 rounded-2xl relative overflow-hidden bg-gray-900 shadow-md group">
        <img
          src="/Bannar.png"
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
          alt="Best Deal"
        />
        <div className="relative h-full flex flex-col gap-4 text-center p-8 justify-center items-center text-white">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-green-400">
            Best Deal
          </span>
          <h1 className=" text-2xl leading-tight">
            Special Products <br />
            Deal of the Month
          </h1>
          <Link
            to="/shop"
            className="flex items-center gap-2 font-medium group"
          >
            <span className="border-b-2 border-white group-hover:border-green-400 group-hover:text-green-400 transition-all">
              Shop now
            </span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform group-hover:text-green-400"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannarHome;
