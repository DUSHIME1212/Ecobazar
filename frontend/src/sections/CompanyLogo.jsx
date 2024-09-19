import { InstagramLogo } from "@phosphor-icons/react";
import { InstagramPost } from "../utils/utils";

const CompanyLogo = () => {


  const logos = [
    "/logos/bookoff-corporation-logo.png",
    "/logos/food.png",
    "/logos/Group-1.png",
    "/logos/Group.png",
    "/logos/Vector.png",
  ];
  
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col lg:flex-row items-center gap-4 justify-evenly py-8 overflow-hidden">
          {logos.map((logo, index) => (
            <img
              src={logo}
              className="w-32 h-auto object-contain"
              alt={`Logo ${index}`}
              key={index}
            />
          ))}
      </div>
      <div className="flex w-full flex-col items-center gap-4 justify-center">
        <h1 className="mt-8">Follow us on Instagram</h1>
        <div className="flex flex-col lg:flex-row gap-2 mt-8">
          {InstagramPost.map((post, index) => (
            <div key={index} className="relative w-full lg:w-auto rounded-xl overflow-clip h-56 group">
              <img src={post} alt={`Instagram Post ${index}`} className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="absolute z-20 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <InstagramLogo className="text-white" size={24} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
