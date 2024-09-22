import { categoriesShop } from "../../../utils/utils";
import Populartag from "../Populartag";
import OurGallery from "../OurGallery";
import RecentlyAddedBlog from "../RecentlyAddedBlog";
import { MagnifyingGlass } from "@phosphor-icons/react";

const BlogDetail = () => {
  return (
    <div className="w-full min-h-96 flex flex-col gap-2 p-2 rounded-xl">
            {/* Side Filters and Categories */}
            <div className="w-full p-2">
              <form action="">
                <label className="flex gap-2 p-2 bg-white rounded-xl items-center">
                  <MagnifyingGlass size={16} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none"
                  />
                </label>
              </form>
            </div>
            <div className="p-2">
              <div className="p-2 bg-white rounded-xl">
                <h1 className="w-full text-lg mb-2 p-2">Top Categories</h1>
                {categoriesShop.map((item, i) => (
                  <div key={i} className="flex items-center p-2 justify-between">
                    <h3>{item.type}</h3>
                    <span>{item.number}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-2 w-full rounded-xl">
              <Populartag />
            </div>
            <div className="p-2 w-full rounded-xl">
              <OurGallery />
            </div>
            <div className="p-2 w-full rounded-xl">
              <RecentlyAddedBlog />
            </div>
          </div>
  );
};

export default BlogDetail;
