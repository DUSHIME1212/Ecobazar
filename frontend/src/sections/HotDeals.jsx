import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import ProductsHolder from "../components/ProductsHolder";
import { Products } from "../utils/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HotDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15); // 15 days from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featureProduct = Products[0];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 min-h-[720px]">
      {/* Featured Big Deal */}
      <div className="w-full lg:w-2/5 group">
        <div className="bg-white rounded-2xl border-2 border-green-500/10 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 p-6 flex flex-col h-full relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs font-medium uppercase tracking-wider">
                Sale 50%
              </span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs font-medium uppercase tracking-wider">
                Best Sale
              </span>
            </div>
            <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors border border-gray-100">
              <Heart size={20} />
            </button>
          </div>

          <div className="relative flex-1 py-8">
            <img
              src={featureProduct.img}
              className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-700"
              alt={featureProduct.name}
            />
          </div>

          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-gray-900 group-hover:text-green-600 transition-colors uppercase tracking-tight">
                {featureProduct.name}
              </h3>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl font-black text-green-600">
                  {featureProduct.price}
                </span>
                <span className="text-xl text-gray-300 line-through font-medium">
                  {featureProduct.oldprice}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-400">
                  (512 Feedback)
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-4">
              <p className="text-sm font-black text-gray-400 uppercase tracking-widest italic">
                Hurry up! Offer ends In:
              </p>
              <div className="flex gap-4 items-center">
                {[
                  { label: "Days", val: timeLeft.days },
                  { label: "Hours", val: timeLeft.hours },
                  { label: "Mins", val: timeLeft.mins },
                  { label: "Secs", val: timeLeft.secs },
                ].map((unit, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center min-w-16"
                  >
                    <span className="text-3xl font-black text-gray-900 leading-none">
                      {String(unit.val).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-1">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-black text-lg shadow-xl shadow-green-100 transition-all transform hover:-translate-y-1">
                Add to cart <ShoppingBag size={24} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="w-14 h-14 rounded-full p-0 flex items-center justify-center border-gray-100 hover:bg-gray-50 hover:text-green-600 transition-all"
              >
                <Eye size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of other deals */}
      <div className="flex-1">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Products.slice(1, 13).map((item, i) => (
            <ProductsHolder
              key={i}
              imag={item.img}
              name={item.name}
              newprise={item.price}
              oldprise={item.oldprice}
              rate={item.rate}
              sale={item.forsale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
