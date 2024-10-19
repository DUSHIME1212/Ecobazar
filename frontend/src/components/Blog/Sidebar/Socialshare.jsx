import {
  Copy,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const Socialshare = () => {
  return (
    <div className="flex gap-2 flex-row">
      <span className="p-2 hover:bg-green-500 hover:text-white duration-700 rounded-full">
        <FacebookLogo size={24} className="" />
      </span>
      <span className="p-2 hover:bg-green-500 hover:text-white duration-700 rounded-full">
        <TwitterLogo size={24} className="" />
      </span>
      <span className="p-2 hover:bg-green-500 hover:text-white duration-700 rounded-full">
        <PinterestLogo size={24} className="" />
      </span>
      <span className="p-2 hover:bg-green-500 hover:text-white duration-700 rounded-full">
        <InstagramLogo size={24} className="" />
      </span>
      <span className="p-2 duration-700 rounded-full">
        <Copy size={24} className="" />
      </span>
    </div>
  );
};

export default Socialshare;
