import { ArrowRight, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogCard = ({ title, category, image, date, author, slug }) => {
  const blogDate = new Date(date);
  const day = blogDate.getDate();
  const month = blogDate.toLocaleString('default', { month: 'short' });

  return (
    <article className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"} 
          alt={title || "Blog post"} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 flex flex-col items-center shadow-lg">
          <span className="text-xl font-medium text-gray-900 leading-none">{day}</span>
          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-1">{month}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 gap-4">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-widest">
              <User size={14} className="text-green-600" />
              <span>{author || "Admin"}</span>
           </div>
           {category && (
             <div className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-widest border-l border-gray-100 pl-4">
                <span>{category}</span>
             </div>
           )}
           <div className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-widest border-l border-gray-100 pl-4">
              <MessageCircle size={14} className="text-green-600" />
              <span>{Math.floor(Math.random() * 20) + 1}</span>
           </div>
        </div>

        <h3 className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors leading-tight line-clamp-2">
          {title}
        </h3>

        <div className="mt-auto pt-4">
          <Button variant="ghost" asChild className="p-0 h-auto text-green-600 hover:text-green-700 hover:bg-transparent group/btn transition-all font-medium text-base">
            <Link to={`/blog/${slug}`} className="flex items-center gap-2">
              Read More
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
