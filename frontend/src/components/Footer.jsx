import {
   FacebookLogo,
   InstagramLogo,
   PinterestLogo,
   TwitterLogo,
 } from "@phosphor-icons/react";
 
 function Footer() {
   const logos = [
     { name: <PinterestLogo size={20} />, url: "https://example.com/logo1" },
     { name: <FacebookLogo size={20} />, url: "https://example.com/logo1" },
     { name: <TwitterLogo size={20} />, url: "https://example.com/logo1" },
     { name: <InstagramLogo size={20} />, url: "https://example.com/logo1" },
   ];
   return (
     <footer className="">
       {/* top */}
       <div className="flex justify-between my-8 items-center px-8 md:px-16 lg:px-32">
         <div className="w-1/2 flex flex-col gap-4 my-4">
           <h1 className="font-bold text-3xl">Subcribe our Newsletter</h1>
           <p className="opacity-40">
             Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
             Phasellus imperdiet elit eu magna.
           </p>
         </div>
         <div className="w-1/2 flex items-center gap-4 justify-between">
           <form
             action=""
             className="overflow-clip border flex-1 flex flex-row border-black/30 rounded-full"
           >
             <input
               type="text"
               name=""
               id=""
               className="p-4 flex-1 outline-none"
             />
             <button className="h-full w-fit rounded-full text-white px-8 p-4 bg-green-500">
               Subscribe
             </button>
           </form>
           <div className="flex flex-row">
             {logos.map((item, i) => (
               <span
                 className="p-2 group size-fit hover:bg-green-500 duration-700 rounded-full"
                 key={i}
               >
                 <div className="group-hover:text-white">{item.name}</div>
               </span>
             ))}
           </div>
         </div>
       </div>
       {/* bottom */}
       <div className="bg-black text-white min-h-72 px-8 md:px-16 lg:px-32 py-8 flex gap-4 flex-row">
         <div className="w-1/2 flex flex-col gap-4">
           <h1 className="flex gap-4">
             <img src="/Vector.png" alt="" />
             <span>Ecobazar</span>
           </h1>
           <p className="w-2/3 text-sm">
             Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
             dui, eget bibendum magna congue nec.
           </p>
           <div className="flex flex-row gap-4">
             <p className="underline">(219) 555-0114</p>
             or
             <p className="underline">Proxy@gmail.com</p>
           </div>
         </div>
         <div className="w-full flex">
           <div className="w-[30%] flex flex-col gap-4">
             <h2>My Account</h2>
             <ul className="flex flex-col gap-2">
               <li>My Account</li>
               <li>Order History</li>
               <li>Shoping Cart</li>
               <li>Wishlist</li>
             </ul>
           </div>
           <div className="w-[30%] flex flex-col gap-4">
             <h2>My Account</h2>
             <ul className="flex flex-col gap-2">
               <li>My Account</li>
               <li>Order History</li>
               <li>Shoping Cart</li>
               <li>Wishlist</li>
             </ul>
           </div>
           <div className="w-[30%] flex flex-col gap-4">
             <h2>My Account</h2>
             <ul className="flex flex-col gap-2">
               <li>My Account</li>
               <li>Order History</li>
               <li>Shoping Cart</li>
               <li>Wishlist</li>
             </ul>
           </div>
           <div className="w-[30%] flex flex-col gap-4">
             <h2>My Account</h2>
             <ul className="flex flex-col gap-2">
               <li>My Account</li>
               <li>Order History</li>
               <li>Shoping Cart</li>
               <li>Wishlist</li>
             </ul>
           </div>
         </div>
       </div>
     </footer>
   );
 }
 
 export default Footer;