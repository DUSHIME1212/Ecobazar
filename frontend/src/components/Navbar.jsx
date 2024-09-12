import {CaretDown, Heart, Phone, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [like, isliked] = useState(false);

  function handlelike() {
    isliked((prev) => !prev);
  }
  const links = [
    { title: "Home", link: "" },
    { title: "Shop", link: "" },
    { title: "Pages", link: "" },
    { title: "Blog", link: "" },
    { title: "About Us", link: "" },
    { title: "Contact Us", link: "" },
  ];

  return (
    <header className="">
      <div className="px-8 md:px-16 lg:px-36 py-2">
        <div className="flex flex-row items-center justify-between">
          <div className={"min-w-6 flex gap-4 items-center"}>
            <img src="/Vector.png" alt="" className="size-8" />
            <span className="text-2xl">Ecobazar</span>
          </div>
          <div className="min-w-96">
            <form action="" className="flex">
              <label
                htmlFor="ahsj"
                className="w-full p-2 border border-black rounded-l-xl"
              >
                <input type="text" name="" id="" className="outline-none" />
              </label>
              <button className="bg-green-500 border size-fit border-green-500 rounded-r-xl text-white px-8 p-2">
                Search
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <Heart
              onClick={handlelike}
              weight={like ? "regular" : "fill"}
              className="text-green-500 cursor-pointer"
              size={32}
            />
            <div className="flex gap-4 items-center">
              <div className="relative size-16 grid place-items-center">
                <span className="bg-green-700 size-6 grid place-items-center border-2 border-white text-sm absolute right-0 top-0 rounded-full text-white">
                  3
                </span>
                <ShoppingCart size={32} />
              </div>
              <div>
                <h1 className="text-sm">Shopping cart</h1>
                <p className="font-bold text-lg">$59.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black min-h-7 text-white p-2 flex flex-row justify-between px-8 md:px-16 lg:px-36">
        <div className="flex gap-4 items-center">
          {links.map((item, i) => (
            <Link key={i} to={item.link} className="flex gap-2 opacity-60 hover:opacity-100 duration-300 group items-center">
              {item.title}
              <CaretDown className="group-hover:rotate-180 duration-700" size={16} />
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={32} />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </header>
  );
}
