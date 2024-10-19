import { Eye, Heart, ShoppingBag, Star } from "@phosphor-icons/react";
import ProductsHolder from "../components/ProductsHolder";
import { Products } from "../utils/utils";

const HotDeals = () => {
  const off = 50;
  return (
    <div className="grid grid-rows-8 lg:grid-rows-3 lg:grid-cols-5 min-h-[720px]">
      {Products.slice(0, 1).map((product, index) => (
        <div
          key={index}
          className="bg-white row-span-2 border col-span-2 border-black/20 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500 p-2"
        >
          <div className="w-full flex flex-row gap-2">
            <span className="p-1 px-2 bg-red-500 text-white rounded-xl">
              Sale {off}%
            </span>
            <span className="p-1 px-2 bg-blue-500 text-white rounded-xl">
              Best Sale
            </span>
          </div>
          <img
            src={product.img}
            className="w-full object-cover"
            alt={product.name}
          />
          <div className="flex flex-row gap-4 items-center text-sm">
            <span className="p-4 rounded-full bg-gray-100">
              <Heart size={24} />
            </span>
            <span className="flex-1 flex items-center justify-center gap-2 text-white bg-green-500 rounded-full p-2 text-center">
              <h3 className="text-sm w-fit font-bold">Add to cart</h3>
              <ShoppingBag size={24} />
            </span>
            <span className="p-4 rounded-full bg-gray-100">
              <Eye size={24} />
            </span>
          </div>
          <div className="flex items-center flex-col justify-center">
            <h3>{product.name}</h3>
            <div className="flex gap-2">
              <span>{product.price}</span>
              <span className="line-through">{product.oldprice}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-c gap-2 text-yellow-500">
                <Star weight="fill" size={16} />
                <Star weight="fill" size={16} />
                <Star weight="fill" size={16} />
                <Star weight="fill" size={16} />
                <Star weight="fill" size={16} />
              </div>
              <p>(512 Feedback)</p>
            </div>
            <div className="flex flex-col text-black gap-4 items-center h-full p-4">
            <p className="text-xl">Hot Deals</p>
            <h1 className="text-sm">Hurry up! Offer ends In:</h1>
            <div className="flex flex-row gap-2 items-start">
              <h1 className="flex justify-center flex-col items-center text-sm">
                <span>00</span>
                <span>Days</span>
              </h1>
              :
              <h1 className="flex justify-center flex-col items-center text-sm">
                <span>00</span>
                <span>Hours</span>
              </h1>
              :
              <h1 className="flex justify-center flex-col items-center text-sm">
                <span>00</span>
                <span>Mins</span>
              </h1>
              :
              <h1 className="flex justify-center flex-col items-center text-sm">
                <span>00</span>
                <span>Secs</span>
              </h1>
            </div>
          </div>
          </div>
        </div>
      ))}

      {[...Products].slice(0, 11).map((item, i) => (
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
  );
};

export default HotDeals;
