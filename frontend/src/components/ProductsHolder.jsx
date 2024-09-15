import { Eye, Heart, ShoppingBag, Star } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const ProductsHolder = ({ imag, name, newprise, oldprise, rate, sale }) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/5 flex flex-col justify-between group border relative border-black/20 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500 p-2 min-h-80">
      {sale ? (
        <span className="bg-red-500 p-1 text-sm px-2 size-fit text-white rounded-xl">
          {sale}
        </span>
      ) : (
        <span className='p-1 mt-6'></span>
      )}
      <img src={imag} alt={name} className="w-full h-40 object-contain" />
      <div className="absolute hidden group-hover:flex flex-col gap-2 duration-700 right-4 top-4">
        <span className="p-2 bg-black/10 rounded-full">
          <Heart weight="fill" size={24} />
        </span>
        <span className="p-2 bg-black/10 rounded-full">
          <Eye weight="light" size={24} />
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <div className="flex items-center gap-2 text-sm">
            <h1 className="text-xl">{newprise}</h1>
            <h2 className="line-through opacity-40">{oldprise}</h2>
          </div>
        </div>
        <div className="size-fit p-3 group-hover:bg-green-500 group-hover:text-white duration-700 bg-black/10 rounded-full">
          <ShoppingBag weight="light" size={24} />
        </div>
      </div>
      <div className="flex items-center" onChange={rate}>
        <Star weight="fill" className="w-4 h-4 text-yellow-500" />
        <Star weight="fill" className="w-4 h-4 text-yellow-500" />
        <Star weight="fill" className="w-4 h-4 text-yellow-500" />
        <Star weight="fill" className="w-4 h-4 text-yellow-500" />
        <Star weight="fill" className="w-4 h-4 text-yellow-500" />
      </div>
    </div>
  );
};

ProductsHolder.propTypes = {
  imag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  newprise: PropTypes.string.isRequired,
  oldprise: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  sale: PropTypes.string.isRequired,
};

export default ProductsHolder;
