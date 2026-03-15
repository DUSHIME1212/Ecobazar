import { useLocation, Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { 
  User, 
  MessageCircle, 
  Tag, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Filter from "../../components/Blog/Sidebar/filter";
import { useMemo } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const SingleBlog = () => {
  const { singleblog: slug } = useParams();
  const page = useLocation().pathname.split("/").pop();

  const blogData = useMemo(() => {
    const blogFiles = import.meta.glob("../../content/blogs/*.md", {
      as: "raw",
      eager: true,
    });

    const path = `../../content/blogs/${slug}.md`;
    const content = blogFiles[path];

    if (!content) return null;

    const { data, content: markdownContent } = matter(content);
    return { ...data, content: markdownContent };
  }, [slug]);

  if (!blogData) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <Link to="/blog" className="text-green-600 mt-4 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const blogDate = new Date(blogData.date);
  const day = blogDate.getDate();
  const month = blogDate.toLocaleString('default', { month: 'short' });

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
                    src={blogData.image} 
                    className="w-full h-full object-cover" 
                    alt={blogData.title}
                  />
                  <div className="absolute top-8 left-8 bg-green-600 text-white rounded-2xl p-4 flex flex-col items-center min-w-16 shadow-lg">
                    <span className="text-2xl font-black leading-none">{day}</span>
                    <span className="text-xs font-medium uppercase tracking-widest mt-1">{month}</span>
                  </div>
               </div>

               {/* Meta Info */}
               <div className="flex flex-wrap gap-6 items-center border-b border-gray-100 pb-8">
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-xs uppercase tracking-widest">
                    <Tag size={16} className="text-green-600" />
                    <span>{blogData.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-xs uppercase tracking-widest">
                    <User size={16} className="text-green-600" />
                    <span>By {blogData.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-xs uppercase tracking-widest">
                    <MessageCircle size={16} className="text-green-600" />
                    <span>06 Comments</span>
                  </div>
               </div>

               {/* Content */}
               <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                    {blogData.title}
                  </h1>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                    <ReactMarkdown 
                      components={{
                        h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                        li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="font-medium text-xl text-gray-900 italic border-l-4 border-green-500 pl-6 my-8" {...props} />
                      }}
                    >
                      {blogData.content}
                    </ReactMarkdown>

                    {blogData.image1 && blogData.image2 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                        <img src={blogData.image1} className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Organic 1" />
                        <img src={blogData.image2} className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Organic 2" />
                      </div>
                    )}
                  </div>
               </div>

               {/* Tags and Share */}
               <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-b border-gray-100 gap-6">
                 <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Tags:</span>
                    <div className="flex gap-2">
                       {blogData.tags?.map(tag => (
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
                    <h4 className="text-2xl font-black text-gray-900">{blogData.author}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed italic">
                      "I am a full-time blogger and food lover. Creating content about healthy lifestyle and organic food is my passion. Follow me for more tips!"
                    </p>
                    <Link to="/blog" className="inline-block text-green-600 font-black border-b-2 border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-all">
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
