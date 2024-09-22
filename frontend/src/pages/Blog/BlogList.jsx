import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { MagnifyingGlass, SlidersHorizontal } from "@phosphor-icons/react";
import { categoriesShop } from "../../utils/utils";
import Populartag from "../../components/Blog/Populartag";
import OurGallery from "../../components/Blog/OurGallery";
import RecentlyAddedBlog from "../../components/Blog/RecentlyAddedBlog";
import BlogCard from "../../components/Blog/BlogCard";
import { useState } from "react";
import Pagination from "../../components/Blog/Pagination";

export default function BlogList() {
  const page = useLocation().pathname.split("/").pop();
  const blogsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const totalBlogs = categoriesShop.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = categoriesShop.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div>
      <Breadcrumbs pageroute={page} />
      <div className="px-8 md:px-16 lg:px-32 py-8">
        {/* Top Section */}
        <div>
          <h1 className="mb-4 flex justify-between">
            <button className="flex px-8 rounded-full text-sm gap-2 items-center">
              <span>Filter</span>
              <SlidersHorizontal size={16} />
            </button>
            <div className="p-2 flex items-center text-sm gap-2">
              <h3 className="opacity-50">Sort by:</h3>
              <select
                name="Fruit"
                id="fruit"
                className="p-2 outline-none bg-gray-200 text-sm rounded-xl"
              >
                <option value="apple" className="px-4">Apple</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <span className="flex gap-1 items-center">
              <h3 className="text-black font-bold text-sm">{totalBlogs}</h3>
              <p className="text-sm">Results Found</p>
            </span>
          </h1>
        </div>
        {/* Bottom Section */}
        <div className="flex gap-4">
          <div className="w-1/3 min-h-96 bg-gray-200 flex flex-col gap-2 p-2 rounded-xl">
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
          <div className="w-2/3 min-h-96 bg-gray-200 flex flex-row flex-wrap gap-4 p-4 rounded-xl">
            {[...currentBlogs,...currentBlogs].map((item, i) => (
              <BlogCard key={i} />
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
