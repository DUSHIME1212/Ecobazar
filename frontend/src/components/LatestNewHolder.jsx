import { ArrowRight, MessageCircle, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LatestNewHolder = () => {
  return (
    <div className="w-full lg:w-1/3 group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"
          alt="Latest News"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center min-w-14 shadow-sm">
          <span className="text-xl font-black text-gray-900 leading-none">
            18
          </span>
          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-1">
            Nov
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1 gap-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 text-gray-400 font-medium text-xs uppercase tracking-widest hover:text-green-600 cursor-pointer transition-colors">
            <Tag size={14} className="text-green-500" />
            <span>Food</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-medium text-xs uppercase tracking-widest">
            <User size={14} className="text-green-500" />
            <span>By Admin</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-medium text-xs uppercase tracking-widest">
            <MessageCircle size={14} className="text-green-500" />
            <span>65 Comments</span>
          </div>
        </div>

        <h3 className="text-xl  text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
          Curabitur porttitor orci eget neque accumsan venenatis. Nunc
          fermentum.
        </h3>

        <div className="mt-auto">
          <Link to="/blog/singleblog">
            <Button
              variant="link"
              className=" h-auto text-white hover:text-green-700 font-black flex items-center gap-2 group/btn"
            >
              <span>Read More</span>
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNewHolder;
