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
      <div className="w-full flex justify-evenly py-8">
        {logos.map((logo, index) => (
          <img
            src={logo}
            className="w-32 h-auto object-contain"
            alt=""
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 justify-center">
        <h1>Follow us on Instagram</h1>
        <div className="flex gap-2">
        {
            InstagramPost.map((post, index) => (
                <div key={index} className="size-56 group relative">
                    <img src={post} alt="" className="size-full object-contain'"/>
                    <div className="absolute top-0 left-0 z-10 size-full duration-700 group-hover:bg-black/30"/>
                    <span className="absolute z-20 top-1/2 left-1/2 duration-700 -translate-y-1/2 -translate-x-1/2">
                    
                        <InstagramLogo className="text-white hidden duration-700 group-hover:block" size={24} />
                    </span>
                </div>
            ))

        }
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
