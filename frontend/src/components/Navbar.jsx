import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Phone, 
  User, 
  Menu, 
  X, 
  ChevronDown 
} from "lucide-react";
import CartDrawer from "./CartDrawer";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems, subtotal } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainLinks = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "Pages", link: "#" },
    { title: "Blog", link: "/blog" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/FAQs" },
  ];

  const categories = [
    "Fresh Fruit",
    "Vegetables",
    "Cooking",
    "Beverages",
    "Desserts",
  ];

  return (
    <header className="fixed w-full top-0 bg-white z-50">
      {/* Top Main Bar */}
      <div className="py-6 px-4 md:px-8 lg:px-36 flex items-center justify-between gap-8 md:gap-12 lg:gap-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
               <path d="M16 2L4 8V24L16 30L28 24V8L16 2Z" fill="currentColor" fillOpacity="0.2"/>
               <path d="M16 28L26 23V9L16 4L6 9V23L16 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <circle cx="16" cy="16" r="4" fill="currentColor"/>
            </svg>
            <span className="text-2xl md:text-3xl font-medium tracking-tighter text-gray-900">Ecobazar</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 hidden md:block">
          <form className="relative flex items-center h-12 w-full max-w-2xl mx-auto border border-gray-200 rounded-lg overflow-hidden group focus-within:border-green-600 transition-colors">
            <div className="pl-4 text-gray-400">
              <Search size={22} />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full h-full px-4 outline-none font-medium text-gray-700 placeholder:text-gray-400 bg-transparent text-sm"
            />
            <button className="h-full px-8 bg-[#2C742F] text-white font-medium hover:bg-green-800 transition-colors text-sm">
              Search
            </button>
          </form>
        </div>

        {/* Utility Icons */}
        <div className="flex items-center gap-4 lg:gap-8">
          <Link to="/wishlist" className="relative group p-2">
            <Heart size={32} className="text-gray-900 group-hover:text-[#2C742F] transition-colors" />
          </Link>
          
          <div className="w-px h-8 bg-gray-100 hidden sm:block"></div>

          <CartDrawer>
            <div className="flex items-center gap-4 cursor-pointer group p-2 hover:bg-gray-50 transition-all">
              <div className="relative">
                <ShoppingBag size={32} className="text-gray-900 group-hover:text-[#2C742F] transition-colors" />
                <span className="absolute -top-1 -right-1 bg-[#2C742F] text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">{cartItems.length}</span>
              </div>
              <div className="hidden lg:block">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest leading-none mb-1">Shopping cart:</p>
                <p className="text-sm font-medium text-gray-900 leading-none">${subtotal.toFixed(2)}</p>
              </div>
            </div>
          </CartDrawer>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-900 hover:text-[#2C742F] transition-colors">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Navigation & Categories Bar */}
      <div className="bg-[#333333] lg:bg-transparent lg:border-t lg:border-gray-100">
        <div className="lg:bg-[#F2F2F2]">
          <div className="px-4 md:px-8 lg:px-36 flex items-center justify-between">
            <div className="flex items-center gap-8 w-full">
              {/* All Categories Button */}
              <div className="relative group flex-shrink-0">
                <button className="flex items-center gap-3 bg-[#2C742F] text-white px-6 py-4 font-medium text-sm transition-all shadow-lg shadow-green-900/10 h-14 min-w-[220px]">
                  <Menu size={20} /> All Categories <ChevronDown size={14} className="ml-auto opacity-70" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-2xl py-6 hidden group-hover:block border border-gray-100 animate-in fade-in slide-in-from-top-2 z-50">
                  {categories.map((cat, idx) => (
                    <Link key={idx} to="/shop" className="block px-8 py-3 text-sm text-gray-600 hover:text-[#2C742F] hover:bg-green-50 transition-colors font-medium tracking-tight">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
                {mainLinks.map((link, idx) => (
                  <NavLink 
                    key={idx} 
                    to={link.link}
                    className={({ isActive }) => 
                      `flex items-center gap-1 transition-all hover:text-[#2C742F] py-4 ${isActive ? 'text-[#2C742F]' : 'text-gray-500'}`
                    }
                  >
                    {link.title} {["Home", "Shop", "Pages", "Blog"].includes(link.title) && <ChevronDown size={12} className="opacity-40" />}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Support Phone number */}
            <div className="hidden lg:flex items-center gap-3 font-medium text-sm text-gray-900 flex-shrink-0">
              <Phone size={22} />
              <span className="tracking-tight">(219) 555-0114</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] pt-20 px-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
          <div className="space-y-8 pt-10">
            {/* Mobile Search */}
            <form className="relative flex items-center h-14 w-full">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full h-full pl-6 pr-12 border border-gray-100 bg-gray-50 rounded-2xl outline-none focus:border-green-600 transition-all font-medium text-sm"
              />
              <button className="absolute right-4 text-gray-400">
                <Search size={22} />
              </button>
            </form>
            
            {/* Categories Mobile */}
            <div className="space-y-4">
               <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">Categories</p>
               <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat, idx) => (
                    <Link key={idx} to="/shop" onClick={() => setIsMenuOpen(false)} className="p-4 bg-gray-50 rounded-2xl text-xs font-medium text-gray-900 border border-transparent hover:border-green-600 hover:bg-green-50 transition-all">
                      {cat}
                    </Link>
                  ))}
               </div>
            </div>

            {/* Links Mobile */}
            <div className="space-y-4">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">Navigation</p>
              <div className="flex flex-col">
                {mainLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    to={link.link} 
                    onClick={() => setIsMenuOpen(false)}
                    className="py-5 text-2xl font-medium text-gray-900 border-b border-gray-50 last:border-0 hover:text-green-600 flex items-center justify-between"
                  >
                    {link.title}
                    <ArrowLeft size={20} className="rotate-180 opacity-20" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Mobile */}
            <div className="pt-8 pb-12">
               <div className="bg-green-600 rounded-[40px] p-8 flex flex-col items-center gap-4 text-white">
                  <Phone size={32} />
                  <div className="text-center">
                    <p className="text-xs font-medium opacity-70">Support (24/7)</p>
                    <p className="text-2xl font-medium">(219) 555-0114</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
