import { ArrowRight } from "@phosphor-icons/react";
import CategoriesHolder from "../components/CategoriesHolder";
import { categories, Products } from "../utils/utils";
import ProductsHolder from "../components/ProductsHolder";

const HomepageLanding = () => {
  return (
    <div className="px-8 md:px-16 lg:px-32 flex flex-col gap-4">
      <div className="w-full min-h-[512px] grid grid-cols-3 gap-2 grid-rows-2 mt-2">
        <div
          className="col-span-2 rounded-xl row-span-2 bg-green-500 relative object-cover"
          style={{ backgroundImage: `url('/Bannar Big.png') ` }}
        >
          <div className="p-2 flex text-white w-2/3 flex-col gap-4 absolute top-8 left-8">
            <h1 className="text-5xl">Fresh & Healthy Organic Food</h1>
            <div className="p-4 size-fit border-l-4 flex flex-col gap-2 border-green-200">
              <h1 className="text-lg">
                Sale up to{" "}
                <span className="p-2 ml-2 bg-orange-400 rounded-lg">
                  30% OFF
                </span>
              </h1>
              <p className="text-sm">Free shipping on all your order.</p>
            </div>
            <button className="px-8 p-4 flex items-center gap-4 size-fit bg-white text-green-500 rounded-full">
              <span>Shop now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div
          className="col-span-1 rounded-xl bg-green-300 relative"
          style={{ backgroundImage: `url('/BG.png') ` }}
        >
          <div className="absolute flex flex-col gap-4 top-8 left-8">
            <div>
              <span className="text-xl">Summer Sale</span>
              <h1 className="text-3xl font-bold">75% OFF</h1>
            </div>
            <p className="text-sm opacity-40">Only Fruit & Vegetable</p>
            <button className="flex items-center gap-4 size-fit text-green-500">
              <span>Shop now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div
          className="col-span-1 rounded-xl grid place-items-center bg-gray-300 text-white"
          style={{ backgroundImage: `url('/Bannar.png') ` }}
        >
          <div className="flex flex-col gap-4 text-center p-8 justify-center items-center">
            <span className="text-xl">Best Deal</span>
            <h1 className="font-bold text-3xl">
              Special Products Deal of the Month
            </h1>
            <button className="flex items-center gap-4 size-fit text-green-500">
              <span>Shop now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between p-4 rounded-3xl shadow-lg">
        <div className="p-4 flex items-center">
          <img
            src={"/img/delivery-truck 1.png"}
            className="size-12"
            alt="product1"
          />
          <div className="flex ml-6 flex-col gap-1">
            <span>Free Shipping</span>
            <p className="text-sm opacity-40">
              Free shipping on all your order
            </p>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <img
            src={"/img/headphones 1.png"}
            className="size-12"
            alt="product1"
          />
          <div className="flex ml-6 flex-col gap-1">
            <span>Customer Support 24/7</span>
            <p className="text-sm opacity-40">Instant access to Support</p>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <img
            src={"/img/shopping-bag.png"}
            className="size-12"
            alt="product1"
          />
          <div className="flex ml-6 flex-col gap-1">
            <span>100% Secure Payment</span>
            <p className="text-sm opacity-40">We ensure your money is save</p>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <img src={"/img/package.png"} className="size-12" alt="product1" />
          <div className="flex ml-6 flex-col gap-1">
            <span>Money-Back Guarantee</span>
            <p className="text-sm opacity-40">30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Popular Categories</h1>
          <div className="flex gap-2 items-center text-green-500 underline cursor-pointer">
            <span>Show all</span>
            <ArrowRight size={16} />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap mt-4 justify-between gap-2 p-4 min-h-[512px] rounded-3xl shadow-lg">
            {categories.map((item, i) => (
              <CategoriesHolder key={i} imag={item.image} title={item.text} />
            ))}
          </div>
        </div>
      </div>
      {/* {Popular Products} */}
      <div className="w-full">
        <h1>Popular Products</h1>
        <div className="w-full flex mt-8 flex-row flex-wrap">
          {[...Products,...Products,...Products,...Products,...Products,...Products,...Products,...Products,...Products,...Products].map((item, i) => (
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

export default HomepageLanding;
