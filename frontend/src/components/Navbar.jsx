import {
  CaretDown,
  Heart,
  List,
  MagnifyingGlass,
  Phone,
  ShoppingCart,
  X,
} from "@phosphor-icons/react";

import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [like, isliked] = useState(false);
  const [show, setShow] = useState(false);
  const [showcart, setShowcart] = useState(false);
  const [num, setnum] = useState(1);

  function handlelike() {
    isliked((prev) => !prev);
    setShowcart(false);
  }
  function handleshowcart() {
    setShowcart((prev) => !prev);
    isliked(false);
  }

  function handleshow() {
    setShow((prev) => !prev);
    setShowcart(false);
  }
  function handlesetnum(e){
     e.preventDefault() 
    setnum(() => e.target.value)
  }
  const links = [
    { title: "Home", link: "" },
    { title: "Shop", link: "" },
    { title: "Pages", link: "" },
    { title: "Blog", link: "/blog" },
    { title: "About Us", link: "" },
    { title: "Contact Us", link: "/FAQs" },
  ];

  const price = 50

  return (
    <header className="fixed w-full top-0 bg-white z-30">
      <div className="px-8 md:px-16 lg:px-36 py-2">
        <div className="flex flex-row items-center justify-between">
          <Link to={'/'} className={"min-w-6 flex gap-4 items-center"}>
            <img src="/Vector.png" alt="" className="size-8" />
            <span className="max-sm:hidden text-2xl">Ecobazar</span>
          </Link>
          <div className="lg:min-w-96">
            <button className="lg:hidden block">
              <MagnifyingGlass size={16} className="text-black" />
            </button>
            <form action="" className="hidden lg:flex border rounded-xl overflow-clip border-black">
              <label
                htmlFor="ahsj"
                className="w-full p-2 flex items-center"
              >
                <MagnifyingGlass size={16} className="mr-2" />
                <input type="text" name="" id="" className="outline-none" />
              </label>
              <button className="bg-green-500 border size-fit border-green-500 text-white px-8 p-2">
                Search
              </button>
            </form>
          </div>
          <div className="flex relative items-center">
            <div className="">
              <Heart
                onClick={handlelike}
                weight="bold"
                className="text-green-500 cursor-pointer"
                size={32}
              />
              {like && (
                <div className="flex gap-4 flex-col bg-white shadow-2xl ring-2 ring-white rounded-xl -right-8 md:right-0 min-w-96 min-h-8 absolute z-20 p-4">
                  <div className="flex gap-4 p-2 items-center">
                    <img
                      src="/avatar/avatarone.jpg"
                      className="size-16 rounded-full ring-1 ring-white"
                      alt=""
                    />
                    <div>
                      <h1 className="text-lg">Comments</h1>
                      <p className="text-sm">order has arrived in rwanda</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-2 items-center">
                    <img
                      src="/avatar/avatarone.jpg"
                      className="size-16 rounded-full ring-1 ring-white"
                      alt=""
                    />
                    <div>
                      <h1 className="text-lg">Comments</h1>
                      <p className="text-sm">order has arrived in rwanda</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-4 items-center" >
              <div className="relative size-16 grid place-items-center">
                <span className="bg-green-700 size-6 grid place-items-center border-2 border-white text-sm absolute right-0 top-0 rounded-full text-white">
                  3
                </span>
                <ShoppingCart size={32} onClick={handleshowcart} />
              </div>
              {showcart && (
                <div className="flex flex-col justify-between bg-white -right-8 md:right-0 rounded-xl shadow-2xl top-16 min-w-96 min-h-[80vh] absolute z-20 p-4">
                  <div className="flex flex-row gap-4 p-2">
                    <img
                      src="/products/Image-10.png"
                      className="size-32"
                      alt=""
                    />
                    <div className="w-full flex flex-col gap-2">
                      <h1 className="text-xl">Name 1</h1>
                      <p className="text-sm">$ {price} USD</p>
                      <input
                        type="number"
                        max={3}
                        min={0}
                        value={num}
                        className="p-2 w-full rounded-xl"
                        onChange={handlesetnum}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-between">
                    <span className="flex justify-between text-lg">
                      <h3>Sub total</h3>
                      <h4>{price*num}</h4>
                    </span>
                    <button onClick={() => setShowcart(false)} className="w-full p-2 bg-green-500 text-white rounded-xl mt-2">
                      Check out
                    </button>
                  </div>
                </div>
              )}
              <div className="hidden lg:block">
                <h1 className="text-sm">Shopping cart</h1>
                <p className="font-bold text-sm">{ price*num} USD</p>
              </div>
              <div className="flex items-center gap-2 p-2 ring-1 rounded-xl ring-black">
                <Link to={'/login'}>Sign Up</Link>
                <span>/</span>
                <Link to={'/signup'}>Sign In</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black min-h-7 text-white relative p-2 flex flex-row justify-between px-8 md:px-16 lg:px-36">
        <div onClick={handleshow} className="lg:hidden">
          {show ? <X size={32} /> : <List size={32} />}
          {show && (
            <div className="absolute z-20 bg-black lg:hidden w-full min-h-8 left-0 gap-4 flex flex-col py-8 items-start p-8 top-10">
              {links.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="flex gap-2 w-full justify-between opacity-60 hover:opacity-100 duration-300 group items-center "
                >
                  {item.title}
                  <CaretDown
                    className="group-hover:rotate-180 duration-700"
                    size={16}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className=" gap-4 hidden lg:flex items-center">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="flex gap-2 opacity-60 hover:opacity-100 duration-300 group items-center "
            >
              {item.title}
              <CaretDown
                className="group-hover:rotate-180 duration-700"
                size={16}
              />
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={32} />
          <span>(250) 785-0114</span>
        </div>
      </div>
    </header>
  );
}
