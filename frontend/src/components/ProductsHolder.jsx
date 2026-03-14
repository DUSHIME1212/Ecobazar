import { Eye, Heart, ShoppingBag, Star } from "@phosphor-icons/react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import QuickViewDialog from "./QuickViewDialog";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductsHolder = ({ id, imag, name, newprise, oldprise, rate, sale }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const productForAction = { id, name, price: newprise, image: imag, oldPrice: oldprise, rating: rate };

  return (
    <div className="flex bg-white w-full flex-col justify-between group border relative border-black/20 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500 p-2 min-h-80">
      {sale ? (
        <span className="bg-red-500 p-1 text-sm px-2 size-fit text-white rounded-xl">
          {sale}
        </span>
      ) : (
        <span className="p-1 mt-6"></span>
      )}
      <Link to={`/product/${id}`} className="block">
        <img src={imag} alt={name} className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
      </Link>
      <div className="absolute hidden group-hover:flex flex-col gap-2 duration-700 right-4 top-4">
        <button 
          onClick={() => toggleWishlist(productForAction)}
          className={`p-2 rounded-full cursor-pointer transition-colors ${isInWishlist(id) ? "bg-green-600 text-white" : "bg-black/10 text-gray-900 hover:bg-green-600 hover:text-white"}`}
        >
          <Heart weight={isInWishlist(id) ? "fill" : "light"} size={24} />
        </button>
        <button 
          onClick={() => setIsQuickViewOpen(true)}
          className="p-2 bg-black/10 rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-colors"
        >
          <Eye weight="light" size={24} />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Link to={`/product/${id}`}>
            <h2 className="text-lg font-medium hover:text-green-600 transition-colors cursor-pointer">{name}</h2>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <h1 className="text-xl font-medium">{newprise}</h1>
            {oldprise && <h2 className="line-through opacity-40 font-medium">{oldprise}</h2>}
          </div>
        </div>
        <button 
          onClick={() => addToCart(productForAction)}
          className="size-fit p-3 group-hover:bg-green-500 group-hover:text-white duration-700 bg-black/10 rounded-full transition-colors"
        >
          <ShoppingBag weight="light" size={24} />
        </button>
      </div>
      <QuickViewDialog 
        product={productForAction} 
        open={isQuickViewOpen} 
        onOpenChange={setIsQuickViewOpen} 
      />
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            weight={i < Math.floor(rate || 0) ? "fill" : "light"} 
            className={`w-4 h-4 ${i < Math.floor(rate || 0) ? "text-yellow-500" : "text-gray-300"}`} 
          />
        ))}
      </div>
    </div>
  );
};

ProductsHolder.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  newprise: PropTypes.number.isRequired,
  oldprise: PropTypes.number,
  rate: PropTypes.number,
  sale: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default ProductsHolder;
