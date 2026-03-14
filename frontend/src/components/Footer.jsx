import { Link } from "react-router-dom";
import { 
  FacebookLogo, 
  InstagramLogo, 
  PinterestLogo, 
  TwitterLogo 
} from "@phosphor-icons/react";

function Footer() {
  const logos = [
    { name: <FacebookLogo size={20} />, url: "https://facebook.com" },
    { name: <TwitterLogo size={20} />, url: "https://twitter.com" },
    { name: <PinterestLogo size={20} />, url: "https://pinterest.com" },
    { name: <InstagramLogo size={20} />, url: "https://instagram.com" },
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/Vector.png" alt="Ecobazar Logo" className="w-8 h-8" />
              <span className="text-2xl font-semibold tracking-tight text-white group-hover:text-green-500 transition-colors">Ecobazar</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-50 text-sm border-b border-green-600 pb-0.5">(219) 555-0114</span>
                <span className="text-gray-500 text-sm">or</span>
                <span className="text-gray-50 text-sm border-b border-green-600 pb-0.5">Proxy@gmail.com</span>
              </div>
            </div>
          </div>

          {/* My Account */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">My Account</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/settings" className="hover:text-white transition-colors">My Account</Link></li>
              <li><Link to="/order-history" className="hover:text-white transition-colors">Order History</Link></li>
              <li><Link to="/shopping-cart" className="hover:text-white transition-colors">Shoping Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Helps */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Helps</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/FAQs" className="hover:text-white transition-colors">Faqs</Link></li>
              <li><Link to="/settings" className="hover:text-white transition-colors">Terms & Condition</Link></li>
              <li><Link to="/settings" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Proxy */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Proxy</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/product/1" className="hover:text-white transition-colors">Product</Link></li>
              <li><Link to="/order-history" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/shop" className="hover:text-white transition-colors">Fruit & Vegetables</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Meat & Fish</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Bread & Bakery</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Beauty & Health</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-white/5 border border-gray-800 rounded px-3 py-1.5 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">Apple Pay</span>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded px-3 py-1.5 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white tracking-widest uppercase italic">VISA</span>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded px-3 py-1.5 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">Mastercard</span>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded px-3 py-1.5 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
