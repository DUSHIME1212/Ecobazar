import { ArrowRight } from "@phosphor-icons/react";
import ProductsHome from "../sections/ProcuctsHome";
import HotDeals from "../sections/HotDeals";
import AdsHotDeals from "../components/AdsHotDeals";
import DiscountBannar from "../sections/DiscountBannar";
import LatestNewsHome from "../sections/LatestNewsHome";
import { TestimonialsHome } from "../sections/TestimonialsHome";
import PopularCategories from "../sections/PopularCategories";
import Featured from "../sections/Featured";
import BannarHome from "../sections/BannarHome";

const HomepageLanding = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="px-8 md:px-16 lg:px-32">
        <BannarHome />
      </div>
      <div className="flex px-8 md:px-16 lg:px-32">
        <Featured />
      </div>
      {/* Categories */}
      <div className="px-8 md:px-16 lg:px-32">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Popular Categories</h1>
          <div className="flex gap-2 items-center text-green-500 underline cursor-pointer">
            <span>Show all</span>
            <ArrowRight size={16} />
          </div>
        </div>
        <PopularCategories />
      </div>
      {/* {Popular Products} */}
      <div className="w-full px-8 md:px-16 lg:px-32">
        <h1>Popular Products</h1>
        <ProductsHome />
      </div>
      {/* hot deals */}
      <div className="w-full flex px-8 md:px-16 lg:px-32 flex-row gap-2 min-h-[512px]">
        <AdsHotDeals />
      </div>
      <div className="w-full px-8 md:px-16 lg:px-32 gap-2 bg-gray-100 py-16">
        <h1>Hot Deals</h1>
        <HotDeals />
      </div>
      <div className="w-full gap-2 px-8 md:px-16 lg:px-32">
        <DiscountBannar />
      </div>
      <div className="w-full px-8 md:px-16 lg:px-32 gap-2 min-h-[512px] flex flex-col items-center justify-start">
        <h1>Latest News</h1>
        <LatestNewsHome />
      </div>
      <div className="w-full gap-2 px-8 md:px-16 lg:px-32  flex flex-col items-start my-8 justify-start">
        <h1>Client Testimonials</h1>
        <TestimonialsHome />
      </div>
    </div>
  );
};

export default HomepageLanding;
