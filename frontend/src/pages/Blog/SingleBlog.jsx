```javascript
import { useLocation, Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { 
  Calendar, 
  User, 
  MessageCircle, 
  Tag, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Filter from "../../components/Blog/Sidebar/filter";

const SingleBlog = () => {
  const page = useLocation().pathname.split("/").pop();

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs pageroute={page} />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <main className="w-full lg:w-3/4 space-y-12">
            <article className="space-y-8 animate-in fade-in duration-700">
               {/* Hero Image */}
               <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Blog Hero"
                  />
                  <div className="absolute top-8 left-8 bg-green-600 text-white rounded-2xl p-4 flex flex-col items-center min-w-16 shadow-lg">
                    <span className="text-2xl font-black leading-none">18</span>
                    <span className="text-xs font-medium uppercase tracking-widest mt-1">Nov</span>
                  </div>
               </div>

               {/* Meta Info */}
               <div className="flex flex-wrap gap-6 items-center border-b border-gray-100 pb-8">
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-xs uppercase tracking-widest">
                    <Tag size={16} className="text-green-600" />
                    <span>Food & Healthy</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-xs uppercase tracking-widest">
                    <User size={16} className="text-green-600" />
                    <span>By Ecobazar Admin</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-xs uppercase tracking-widest">
                    <MessageCircle size={16} className="text-green-600" />
                    <span>06 Comments</span>
                  </div>
               </div>

               {/* Content */}
               <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                    Why organic food is good for your health and environment?
                  </h1>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                    <p className="font-medium text-xl text-gray-900 italic border-l-4 border-green-500 pl-6">
                      "Organic food is food produced by methods that comply with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity."
                    </p>
                    <p>
                      Maecenas et ligula non nisl egestas efficitur. Mauris elementum, justo eu interdum pretium, risus nisl egestas dui, vitae maximus leo velit sit amet augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    </p>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Ut accumsan ante ante, sit amet condimentum lacus semper vitae.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                       <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Organic 1" />
                       <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Organic 2" />
                    </div>
                    <p>
                      Nam hendrerit laoreet feugiat. Suspendisse potenti. Nam et elementum elit. Sed ut magna vitae sapien scelerisque scelerisque. Vivamus porta iaculis interdum. Mauris pellentesque lectus iaculis eros cursus, sit amet scelerisque justo sodales.
                    </p>
                  </div>
               </div>

               {/* Tags and Share */}
               <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-b border-gray-100 gap-6">
                 <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Tags:</span>
                    <div className="flex gap-2">
                       {['Organic', 'Healthy', 'Environmental'].map(tag => (
                         <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 font-medium text-xs rounded-full hover:bg-green-600 hover:text-white transition-all cursor-pointer">
                           {tag}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Share:</span>
                    <div className="flex gap-2">
                       {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                         <button key={i} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                           <Icon size={18} />
                         </button>
                       ))}
                    </div>
                 </div>
               </div>

               {/* Author */}
               <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" 
                    className="w-32 h-32 rounded-3xl object-cover shadow-xl border-4 border-white" 
                    alt="Author"
                  />
                  <div className="space-y-4 text-center md:text-left">
                    <h4 className="text-2xl font-black text-gray-900">John Doe</h4>
                    <p className="text-gray-500 font-medium leading-relaxed italic">
                      "I am a full-time blogger and food lover. Creating content about healthy lifestyle and organic food is my passion. Follow me for more tips!"
                    </p>
                    <Link to="#" className="inline-block text-green-600 font-black border-b-2 border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-all">
                      View all posts
                    </Link>
                  </div>
               </div>
            </article>

            {/* Comments Placeholder */}
            <section className="space-y-10">
               <h3 className="text-3xl font-black text-gray-900">Leave a Comment</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Message</label>
                    <textarea rows={6} placeholder="Write your comment here..." className="w-full bg-gray-50 border border-gray-100 rounded-3xl py-4 px-6 outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium resize-none"></textarea>
                  </div>
                  <Button className="rounded-full px-12 h-14 bg-green-600 hover:bg-green-700 text-white font-black text-lg shadow-xl shadow-green-100">
                    Post Comment
                  </Button>
               </form>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <Filter />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
```;
