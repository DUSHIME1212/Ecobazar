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
  ChevronDown,
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
            <svg
              width="183"
              height="38"
              viewBox="0 0 183 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2749 7.34308C27.4022 7.34308 21.9311 7.66711 19.1352 10.4615C17.9247 11.672 17.3202 13.6454 17.4771 15.8789C17.4975 16.174 17.6937 16.4253 17.9756 16.5184C18.256 16.6099 18.5641 16.5241 18.7559 16.2989C20.3108 14.4694 22.2435 13.0032 24.5046 11.9409C24.6964 11.8494 24.9231 11.8421 25.1295 11.9147C25.3111 11.9801 25.4535 12.1036 25.5276 12.2621C25.6816 12.5876 25.6322 13.0163 25.1207 13.2575C25.0917 13.272 25.0655 13.2909 25.0365 13.304C25.0263 13.3083 25.0147 13.3069 25.006 13.3113C19.4346 15.9299 16.6954 20.4986 15.4514 25.1966C14.5446 19.3143 12.6294 15.8514 10.8202 13.7254C9.51095 12.0282 8.22341 11.1286 7.47943 10.62C7.34136 10.5256 6.92435 10.2408 6.7514 10.0678C6.46803 9.78445 6.46803 9.32378 6.7514 9.04041C7.03477 8.75848 7.49687 8.75848 7.81218 9.07236C7.88923 9.14068 8.01272 9.22787 8.16966 9.3325L8.29902 9.41969C9.35108 10.1404 11.31 11.4788 13.0479 14.3604C13.2034 14.6176 13.5042 14.7557 13.7963 14.7005C14.0928 14.6481 14.3252 14.42 14.3834 14.125C14.7627 12.188 14.5927 9.31356 12.8649 7.58578C10.069 4.79278 4.59789 4.46875 0.726671 4.46875C0.32553 4.46868 0 4.79421 0 5.19528C0 9.06793 0.324032 14.5391 3.11846 17.335C4.28387 18.5004 6.08147 19.0236 7.86736 19.0236C9.32486 19.0236 10.7533 18.6588 11.8476 18.0267C13.3399 21.119 14.5316 25.7386 14.5316 32.8053C14.5316 33.2064 14.8571 33.5319 15.2582 33.5319C15.6592 33.5319 15.9848 33.2064 15.9848 32.8053C15.9848 28.8629 16.6605 24.1314 19.173 20.2369C20.18 21.2207 21.9137 21.8441 23.8347 21.9022C23.9306 21.9052 24.0251 21.9066 24.1195 21.9066C26.0711 21.9066 27.796 21.2948 28.8815 20.2078C31.6773 17.412 31.9999 11.9408 31.9999 8.06811C32.0015 7.66711 31.6774 7.34308 31.2749 7.34308Z"
                fill="#00B307"
              />
              <path
                d="M46.048 10.704V17.232H53.728V20.208H46.048V27.024H54.688V30H42.4V7.728H54.688V10.704H46.048ZM57.0052 21.168C57.0052 19.3547 57.3679 17.7653 58.0933 16.4C58.8399 15.0133 59.8639 13.9467 61.1653 13.2C62.4666 12.4533 63.9599 12.08 65.6453 12.08C67.7786 12.08 69.5386 12.592 70.9253 13.616C72.3333 14.6187 73.2826 16.0587 73.7733 17.936H69.8373C69.5173 17.0613 69.0053 16.3787 68.3013 15.888C67.5973 15.3973 66.7119 15.152 65.6453 15.152C64.1519 15.152 62.9573 15.6853 62.0613 16.752C61.1866 17.7973 60.7493 19.2693 60.7493 21.168C60.7493 23.0667 61.1866 24.5493 62.0613 25.616C62.9573 26.6827 64.1519 27.216 65.6453 27.216C67.7573 27.216 69.1546 26.288 69.8373 24.432H73.7733C73.2613 26.224 72.3013 27.6533 70.8933 28.72C69.4853 29.7653 67.7359 30.288 65.6453 30.288C63.9599 30.288 62.4666 29.9147 61.1653 29.168C59.8639 28.4 58.8399 27.3333 58.0933 25.968C57.3679 24.5813 57.0052 22.9813 57.0052 21.168ZM84.0968 30.288C82.4328 30.288 80.9288 29.9147 79.5848 29.168C78.2408 28.4 77.1848 27.3333 76.4168 25.968C75.6488 24.5813 75.2648 22.9813 75.2648 21.168C75.2648 19.376 75.6594 17.7867 76.4488 16.4C77.2381 15.0133 78.3154 13.9467 79.6808 13.2C81.0461 12.4533 82.5714 12.08 84.2568 12.08C85.9421 12.08 87.4674 12.4533 88.8328 13.2C90.1981 13.9467 91.2754 15.0133 92.0648 16.4C92.8541 17.7867 93.2488 19.376 93.2488 21.168C93.2488 22.96 92.8434 24.5493 92.0328 25.936C91.2221 27.3227 90.1128 28.4 88.7048 29.168C87.3181 29.9147 85.7821 30.288 84.0968 30.288ZM84.0968 27.12C85.0354 27.12 85.9101 26.896 86.7208 26.448C87.5528 26 88.2248 25.328 88.7368 24.432C89.2488 23.536 89.5048 22.448 89.5048 21.168C89.5048 19.888 89.2594 18.8107 88.7688 17.936C88.2781 17.04 87.6274 16.368 86.8168 15.92C86.0061 15.472 85.1314 15.248 84.1928 15.248C83.2541 15.248 82.3794 15.472 81.5688 15.92C80.7794 16.368 80.1501 17.04 79.6808 17.936C79.2114 18.8107 78.9768 19.888 78.9768 21.168C78.9768 23.0667 79.4568 24.5387 80.4168 25.584C81.3981 26.608 82.6248 27.12 84.0968 27.12ZM99.543 14.992C100.162 14.1387 101.004 13.4453 102.071 12.912C103.159 12.3573 104.364 12.08 105.687 12.08C107.244 12.08 108.652 12.4533 109.911 13.2C111.17 13.9467 112.162 15.0133 112.887 16.4C113.612 17.7653 113.975 19.3333 113.975 21.104C113.975 22.8747 113.612 24.464 112.887 25.872C112.162 27.2587 111.159 28.3467 109.879 29.136C108.62 29.904 107.223 30.288 105.687 30.288C104.322 30.288 103.106 30.0213 102.039 29.488C100.994 28.9547 100.162 28.272 99.543 27.44V30H95.895V6.32H99.543V14.992ZM110.263 21.104C110.263 19.888 110.007 18.8427 109.495 17.968C109.004 17.072 108.343 16.4 107.511 15.952C106.7 15.4827 105.826 15.248 104.887 15.248C103.97 15.248 103.095 15.4827 102.263 15.952C101.452 16.4213 100.791 17.104 100.279 18C99.7883 18.896 99.543 19.952 99.543 21.168C99.543 22.384 99.7883 23.4507 100.279 24.368C100.791 25.264 101.452 25.9467 102.263 26.416C103.095 26.8853 103.97 27.12 104.887 27.12C105.826 27.12 106.7 26.8853 107.511 26.416C108.343 25.9253 109.004 25.2213 109.495 24.304C110.007 23.3867 110.263 22.32 110.263 21.104ZM115.407 21.104C115.407 19.3333 115.769 17.7653 116.495 16.4C117.241 15.0347 118.244 13.9787 119.503 13.232C120.783 12.464 122.191 12.08 123.727 12.08C125.113 12.08 126.319 12.3573 127.343 12.912C128.388 13.4453 129.22 14.1173 129.839 14.928V12.368H133.519V30H129.839V27.376C129.22 28.208 128.377 28.9013 127.311 29.456C126.244 30.0107 125.028 30.288 123.663 30.288C122.148 30.288 120.761 29.904 119.503 29.136C118.244 28.3467 117.241 27.2587 116.495 25.872C115.769 24.464 115.407 22.8747 115.407 21.104ZM129.839 21.168C129.839 19.952 129.583 18.896 129.071 18C128.58 17.104 127.929 16.4213 127.119 15.952C126.308 15.4827 125.433 15.248 124.495 15.248C123.556 15.248 122.681 15.4827 121.871 15.952C121.06 16.4 120.399 17.072 119.887 17.968C119.396 18.8427 119.151 19.888 119.151 21.104C119.151 22.32 119.396 23.3867 119.887 24.304C120.399 25.2213 121.06 25.9253 121.871 26.416C122.703 26.8853 123.577 27.12 124.495 27.12C125.433 27.12 126.308 26.8853 127.119 26.416C127.929 25.9467 128.58 25.264 129.071 24.368C129.583 23.4507 129.839 22.384 129.839 21.168ZM140.582 27.024H148.582V30H136.358V27.024L144.39 15.344H136.358V12.368H148.582V15.344L140.582 27.024ZM150.236 21.104C150.236 19.3333 150.599 17.7653 151.324 16.4C152.071 15.0347 153.074 13.9787 154.332 13.232C155.612 12.464 157.02 12.08 158.556 12.08C159.943 12.08 161.148 12.3573 162.172 12.912C163.218 13.4453 164.05 14.1173 164.668 14.928V12.368H168.348V30H164.668V27.376C164.05 28.208 163.207 28.9013 162.14 29.456C161.074 30.0107 159.858 30.288 158.492 30.288C156.978 30.288 155.591 29.904 154.332 29.136C153.074 28.3467 152.071 27.2587 151.324 25.872C150.599 24.464 150.236 22.8747 150.236 21.104ZM164.668 21.168C164.668 19.952 164.412 18.896 163.9 18C163.41 17.104 162.759 16.4213 161.948 15.952C161.138 15.4827 160.263 15.248 159.324 15.248C158.386 15.248 157.511 15.4827 156.7 15.952C155.89 16.4 155.228 17.072 154.716 17.968C154.226 18.8427 153.98 19.888 153.98 21.104C153.98 22.32 154.226 23.3867 154.716 24.304C155.228 25.2213 155.89 25.9253 156.7 26.416C157.532 26.8853 158.407 27.12 159.324 27.12C160.263 27.12 161.138 26.8853 161.948 26.416C162.759 25.9467 163.41 25.264 163.9 24.368C164.412 23.4507 164.668 22.384 164.668 21.168ZM175.828 14.928C176.361 14.032 177.065 13.3387 177.94 12.848C178.836 12.336 179.892 12.08 181.108 12.08V15.856H180.18C178.751 15.856 177.663 16.2187 176.916 16.944C176.191 17.6693 175.828 18.928 175.828 20.72V30H172.18V12.368H175.828V14.928Z"
                fill="#002603"
              />
            </svg>
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
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.999 28.0717C-10.6672 13.3329 7.9995 -2.66711 15.999 7.4503C23.9995 -2.66711 42.6661 13.3329 15.999 28.0717Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
              />
            </svg>
          </Link>

          <CartDrawer>
            <div className="flex items-start gap-4 cursor-pointer group p-2 hover:bg-gray-50 transition-all">
              <div className="relative">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 17.1667H7.08333L4.25 32.75H29.75L26.9167 17.1667H22.6667M11.3333 17.1667V12.9167C11.3333 9.78705 13.8704 7.25 17 7.25C20.1296 7.25 22.6667 9.78705 22.6667 12.9167V17.1667M11.3333 17.1667H22.6667M11.3333 17.1667V21.4167M22.6667 17.1667V21.4167"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="17.5"
                    y="0.5"
                    width="19"
                    height="19"
                    rx="9.5"
                    fill="#2C742F"
                  />
                  <rect
                    x="17.5"
                    y="0.5"
                    width="19"
                    height="19"
                    rx="9.5"
                    stroke="white"
                  />
                  <path
                    d="M25.3443 11.95C25.9843 11.3967 26.4876 10.9433 26.8543 10.59C27.2276 10.23 27.5376 9.85667 27.7843 9.47C28.0309 9.08333 28.1543 8.69667 28.1543 8.31C28.1543 7.91 28.0576 7.59667 27.8643 7.37C27.6776 7.14333 27.3809 7.03 26.9743 7.03C26.5809 7.03 26.2743 7.15667 26.0543 7.41C25.8409 7.65667 25.7276 7.99 25.7143 8.41H24.6143C24.6343 7.65 24.8609 7.07 25.2943 6.67C25.7343 6.26333 26.2909 6.06 26.9643 6.06C27.6909 6.06 28.2576 6.26 28.6643 6.66C29.0776 7.06 29.2843 7.59333 29.2843 8.26C29.2843 8.74 29.1609 9.20333 28.9143 9.65C28.6743 10.09 28.3843 10.4867 28.0443 10.84C27.7109 11.1867 27.2843 11.59 26.7643 12.05L26.3143 12.45H29.4843V13.4H24.6243V12.57L25.3443 11.95Z"
                    fill="white"
                  />
                </svg>

                <span className="absolute -top-1 -right-1 bg-[#2C742F] text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {cartItems.length}
                </span>
              </div>
              <div className="hidden lg:block">
                <p className="text-[10px] text-black font-medium uppercase tracking-widest leading-none mb-1">
                  Shopping cart:
                </p>
                <p className="text-sm font-medium text-gray-900 leading-none">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
            </div>
          </CartDrawer>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-900 hover:text-[#2C742F] transition-colors"
          >
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
                  <Menu size={20} /> All Categories{" "}
                  <ChevronDown size={14} className="ml-auto opacity-70" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-2xl py-6 hidden group-hover:block border border-gray-100 animate-in fade-in slide-in-from-top-2 z-50">
                  {categories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to="/shop"
                      className="block px-8 py-3 text-sm text-gray-600 hover:text-[#2C742F] hover:bg-green-50 transition-colors font-medium tracking-tight"
                    >
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
                      `flex items-center gap-1 transition-all hover:text-[#2C742F] py-4 ${isActive ? "text-[#2C742F]" : "text-gray-500"}`
                    }
                  >
                    {link.title}{" "}
                    {["Home", "Shop", "Pages", "Blog"].includes(link.title) && (
                      <ChevronDown size={12} className="opacity-40" />
                    )}
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
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
                Categories
              </p>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to="/shop"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-4 bg-gray-50 rounded-2xl text-xs font-medium text-gray-900 border border-transparent hover:border-green-600 hover:bg-green-50 transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Mobile */}
            <div className="space-y-4">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
                Navigation
              </p>
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
                  <p className="text-xs font-medium opacity-70">
                    Support (24/7)
                  </p>
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
