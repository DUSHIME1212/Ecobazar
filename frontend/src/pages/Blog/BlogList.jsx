import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { categoriesShop } from "../../utils/utils";
import BlogCard from "../../components/Blog/BlogCard";
import { useState, useMemo } from "react";
import matter from "gray-matter";
import Pagination from "../../components/Blog/Pagination";
import Filter from "../../components/Blog/Sidebar/filter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function BlogList() {
  const blogs = useMemo(() => {
    const blogFiles = import.meta.glob("../../content/blogs/*.md", {
      as: "raw",
      eager: true,
    });

    const allBlogs = Object.entries(blogFiles).map(([path, content]) => {
      const { data } = matter(content);
      const slug = path.split("/").pop().replace(".md", "");
      return {
        id: slug,
        slug,
        title: data.title,
        category: data.category,
        date: data.date,
        image: data.image,
        author: data.author
      };
    });

    // Sort by date (latest first)
    return allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const page = useLocation().pathname.split("/").pop();
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    if (selectedCategory !== "All") {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [blogs, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs pageroute={page} />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Top bar with filters and sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 bg-gray-50 p-6 rounded-3xl border border-gray-100">
           <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-medium shadow-lg shadow-green-100 lg:hidden">
                <SlidersHorizontal size={18} />
                <span>Filter</span>
              </button>
              <span className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                Showing <span className="text-gray-900">{blogs.length}</span> results found
              </span>
           </div>

           <div className="flex items-center gap-3">
              <span className="text-gray-400 font-medium uppercase tracking-widest text-xs">Sort by:</span>
              <Select defaultValue="latest">
                <SelectTrigger className="w-[180px] rounded-full bg-white border-gray-200 font-medium focus:ring-green-500">
                  <SelectValue placeholder="Latest" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl shadow-2xl border-gray-50">
                  <SelectItem value="latest">Latest Posts</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 sr-only lg:not-sr-only">
            <Filter 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </aside>

          {/* Blog Grid */}
          <div className="w-full lg:w-3/4 space-y-12">
             {currentBlogs.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentBlogs.map((blog, i) => (
                  <div key={blog.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                    <BlogCard 
                      title={blog.title} 
                      category={blog.category} 
                      image={blog.image}
                      date={blog.date}
                      author={blog.author}
                      slug={blog.slug}
                    />
                  </div>
                ))}
              </div>
             ) : (
               <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-4">
                 <p className="text-xl font-medium">No results found for "{searchQuery}"</p>
                 <button 
                  onClick={() => {setSearchQuery(""); setSelectedCategory("All")}}
                  className="text-green-600 font-medium hover:underline"
                 >
                   Clear all filters
                 </button>
               </div>
             )}

            {totalPages > 1 && (
              <div className="flex justify-center pt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
