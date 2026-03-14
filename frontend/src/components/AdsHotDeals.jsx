import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdsHotDeals = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 my-12">
      {/* 85% Fat Free Banner */}
      <div
        className="w-full lg:w-1/3 min-h-[400px] rounded-3xl relative overflow-hidden group shadow-md"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607623273573-41eb3064e43f?q=80&w=600&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center p-8 text-white gap-4">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-green-400">
            85% Fat Free
          </span>
          <h1 className="text-4xl font-black leading-tight uppercase tracking-tight">
            Low-Fat Meat
          </h1>
          <p className="text-lg font-medium">
            Started at{" "}
            <span className="text-orange-500 text-2xl ml-1">$79.99</span>
          </p>
          <Link to="/shop">
            <Button className="rounded-full px-8 bg-white text-green-600 hover:bg-green-50 font-medium shadow-lg">
              Shop Now <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Fresh Fruit Banner */}
      <div
        className="w-full lg:w-1/3 min-h-[400px] rounded-3xl relative overflow-hidden group shadow-md"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center p-8 text-white gap-4">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
            Summer Sale
          </span>
          <h1 className="text-4xl font-black leading-tight uppercase tracking-tight">
            100% Fresh Fruit
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">Started at</span>
            <span className="bg-black text-yellow-500 px-3 py-1 rounded-lg font-black text-xl">
              $14.99
            </span>
          </div>
          <Link to="/shop">
            <Button className="rounded-full px-8 bg-white text-gray-900 hover:bg-gray-50 font-medium shadow-lg">
              Shop Now <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Drink Banner */}
      <div className="w-full lg:w-1/3 min-h-[400px] rounded-3xl relative overflow-hidden group shadow-md bg-[#1A1A1A]">
        <img
          src="https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
          alt="Drink"
        />
        <div className="relative h-full flex flex-col justify-center items-center text-center p-8 text-white gap-4">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
            Best Deal
          </span>
          <h1 className="text-4xl font-black leading-tight uppercase tracking-tight">
            Organic Juice
          </h1>
          <p className="text-lg font-medium">
            Up to <span className="text-green-500 text-2xl ml-1">45% OFF</span>
          </p>
          <Link to="/shop">
            <Button className="rounded-full px-8 bg-green-600 text-white hover:bg-green-700 font-medium shadow-lg shadow-green-900/20">
              Shop Now <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdsHotDeals;
