import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer({ children }) {
  const { cartItems, subtotal, removeFromCart } = useCart();

  return (
    <Sheet className="bg-white">
      <SheetTrigger asChild className="bg-white hover:bg-gray-50">
        {children || (
          <button className="relative p-2 g-gray-100 rounded-full transition-colors hover:bg-gray-50">
            <ShoppingCart size={32} className="text-gray-900" />
            <span className="absolute top-0 right-0  text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartItems.length}
            </span>
          </button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-white border-l border-gray-100">
        <SheetHeader className="p-6 border-b border-gray-50">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-medium">
              Shopping Card ({cartItems.length})
            </SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 group">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-50 bg-gray-50 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-medium text-gray-900 leading-tight">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {item.weight} x{" "}
                  <span className="font-medium text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>
                </p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all self-center border border-gray-100"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 space-y-4 border-t border-gray-50 bg-gray-50/30">
          <div className="flex items-center justify-between font-medium text-lg">
            <span className="text-gray-600">{cartItems.length} Product</span>
            <span className="text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          <div className="space-y-2">
            <Link to="/checkout" className="block w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full h-12 font-medium text-lg shadow-lg shadow-green-100">
                Checkout
              </Button>
            </Link>
            <Link to="/shopping-cart" className="block w-full">
              <Button
                variant="outline"
                className="w-full bg-white hover:bg-gray-50 text-green-600 border-none h-12 font-medium text-lg"
              >
                Go To Cart
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
