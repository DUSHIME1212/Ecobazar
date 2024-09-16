import { Quotes, Star } from "@phosphor-icons/react";

const TestimonialCard = () => {
  return (
    <div className="w-1/3 flex flex-col group hover:shadow-xl rounded-xl hover:text-white cursor-pointer hover:bg-green-500 gap-4 py-8 duration-700 p-4">
      <Quotes weight="fill" size={18} />
      <p className="text-sm">
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
        Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
        Donec sed neque eget
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            <img src="/news/Image (2).png" className="size-12 rounded-full object-cover ring ring-white" alt="" />
            <div>
                <h3 className="text-lg">Robert Fox</h3>
                <p className="text-sm">Customer</p>
            </div>
        </div>
        <div className="flex text-yellow-500">
            <Star weight="fill" size={16}/>
            <Star weight="fill" size={16}/>
            <Star weight="fill" size={16}/>
            <Star weight="fill" size={16}/>
            <Star weight="fill" size={16}/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
