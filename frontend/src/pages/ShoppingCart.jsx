import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.0,
      quantity: 5,
      weight: "1 kg",
      image:
        "https://images.unsplash.com/photo-1563203362-09419b48995a?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Red Capsicum",
      price: 14.0,
      quantity: 1,
      weight: "1 kg",
      image:
        "https://images.unsplash.com/photo-1589412227349-33166bff3bb0?q=80&w=200&auto=format&fit=crop",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
        <Link to="/" className="hover:text-green-600 transition-colors">
          Home
        </Link>
        <span>&gt;</span>
        <span className="text-gray-900 font-medium">Shopping Cart</span>
      </div>

      <h1 className="text-3xl font-medium text-center text-gray-900 mb-12 uppercase tracking-tight">
        My Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Cart Table */}
        <div className="flex-1 space-y-8 w-full">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm shadow-gray-100/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-xs font-medium uppercase tracking-widest">
                    <th className="px-8 py-4">Product</th>
                    <th className="px-8 py-4">Price</th>
                    <th className="px-8 py-4 text-center">Quantity</th>
                    <th className="px-8 py-4">Subtotal</th>
                    <th className="px-8 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="group hover:bg-gray-50/30 transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-6">
                          <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <span className="font-medium text-gray-900 text-lg">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1 w-fit mx-auto">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all text-gray-600"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-10 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all text-gray-600"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100">
                          <X size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 flex items-center justify-between border-t border-gray-100 bg-gray-50/20">
              <Link to="/shop">
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 font-medium bg-white hover:bg-gray-100 text-gray-600 border-none shadow-sm"
                >
                  Return to shop
                </Button>
              </Link>
              <Button className="rounded-full px-8 h-12 font-medium bg-gray-100 hover:bg-gray-200 text-gray-900 border-none">
                Update Cart
              </Button>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
            <h3 className="font-medium text-xl text-gray-900 shrink-0">
              Coupon Code
            </h3>
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Enter code"
                className="w-full h-14 pl-6 pr-32 border border-gray-200 rounded-full outline-none focus:border-green-600 font-medium"
              />
              <button className="absolute right-1 top-1 h-12 px-8 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-900 transition-all">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Totals */}
        <aside className="w-full lg:w-96 sticky top-36">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-xl shadow-gray-100/50 space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 border-b border-gray-50 pb-4">
              Cart Total
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-gray-600 font-medium">
                <span>Subtotal:</span>
                <span className="text-gray-900 font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600 font-medium">
                <span>Shipping:</span>
                <span className="text-gray-900 font-medium">Free</span>
              </div>
              <div className="h-px bg-gray-100"></div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-900 font-medium">Total:</span>
                <span className="text-green-600 font-black text-2xl">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>
            <Link to="/checkout" className="block pt-2">
              <Button className="w-full h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium text-lg shadow-xl shadow-green-100 transition-all transform hover:-translate-y-1">
                Proceed to checkout
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
