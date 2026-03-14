import { categoriesShop } from "../../../utils/utils";
import Populartag from "../Populartag";
import OurGallery from "../OurGallery";
import RecentlyAddedBlog from "../RecentlyAddedBlog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Filter = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="w-full space-y-10">
      {/* Search Filter */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4">Search</h4>
        <div className="relative group">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" />
          <Input
            type="text"
            placeholder="Search blog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-6 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-gray-900 placeholder:text-gray-400 h-14"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4">Top Categories</h4>
        <div className="space-y-4">
          <div 
            onClick={() => setSelectedCategory("All")}
            className={`flex items-center justify-between group cursor-pointer ${selectedCategory === "All" ? 'text-green-600' : ''}`}
          >
            <span className="text-gray-500 font-medium group-hover:text-green-600 transition-colors">All Posts</span>
          </div>
          {categoriesShop.slice(0, 6).map((item, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedCategory(item.type)}
              className={`flex items-center justify-between group cursor-pointer ${selectedCategory === item.type ? 'text-green-600' : ''}`}
            >
              <span className="text-gray-500 font-medium group-hover:text-green-600 transition-colors">{item.type}</span>
              <span className="text-[10px] font-medium text-gray-300 group-hover:text-green-400 transition-colors tracking-widest">{item.number}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4 mb-6">Popular Tags</h4>
        <Populartag />
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4 mb-6">Recently Added</h4>
        <RecentlyAddedBlog />
      </div>

      {/* Our Gallery */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4 mb-6">Our Gallery</h4>
        <OurGallery />
      </div>
    </div>
  );
};

export default Filter;
