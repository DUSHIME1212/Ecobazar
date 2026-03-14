import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Facebook, Twitter, Instagram, Youtube, Search } from "lucide-react";

export default function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.99,
      oldPrice: 20.99,
      image:
        "https://images.unsplash.com/photo-1563203362-09419b48995a?q=80&w=200&auto=format&fit=crop",
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: 45.0,
      image:
        "https://images.unsplash.com/photo-1590411641322-076f7df12613?q=80&w=200&auto=format&fit=crop",
      stock: "In Stock",
    },
    {
      id: 3,
      name: "Fresh Sujapuri Mango",
      price: 9.0,
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=200&auto=format&fit=crop",
      stock: "Out of Stock",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
        <Link to="/" className="hover:text-green-600 transition-colors">
          Home
        </Link>
        <span>&gt;</span>
        <span className="text-gray-900 font-medium">Wishlist</span>
      </div>

      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-12 uppercase tracking-tight">
        My Wishlist
      </h1>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm shadow-gray-100/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-xs font-medium uppercase tracking-widest">
                <th className="px-8 py-4">Product</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Stock Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {wishlistItems.map((item) => (
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
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <span className="text-sm text-gray-300 line-through">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <Badge
                      className={`${item.stock === "In Stock" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-red-50 text-red-600 hover:bg-red-50"} border-none font-medium uppercase tracking-tighter text-[10px] px-3 py-1`}
                    >
                      {item.stock}
                    </Badge>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-3">
                      <Button
                        disabled={item.stock === "Out of Stock"}
                        className={`rounded-full px-6 h-11 font-medium shadow-md shadow-green-100 ${item.stock === "Out of Stock" ? "bg-gray-100 text-gray-400" : "bg-green-600 hover:bg-green-700 text-white"}`}
                      >
                        Add to Cart
                      </Button>
                      <button className="w-11 h-11 rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100">
                        <X size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Share Section */}
        <div className="p-8 flex items-center gap-4 bg-gray-50/30 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-900 uppercase tracking-widest">
            Share:
          </span>
          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${idx === 0 ? "bg-green-600 text-white" : "text-gray-400 hover:text-green-600 hover:bg-green-50"}`}
              >
                <Icon size={18} fill={idx === 0 ? "white" : "none"} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
