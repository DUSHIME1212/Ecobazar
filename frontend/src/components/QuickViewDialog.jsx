import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState } from "react";

function QuickViewDialog({ product, open, onOpenChange }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    product?.image ||
      "https://images.unsplash.com/photo-1590411641322-076f7df12613?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566270832367-e95e4e73d328?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563203362-09419b48995a?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1000px] p-0 overflow-hidden border-none bg-white rounded-2xl">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img
                src={images[selectedImage]}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                alt={product?.name}
              />
              <button className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-800 transition-all font-medium">
                ←
              </button>
              <button className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-800 transition-all font-medium">
                →
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-green-600" : "border-transparent hover:border-gray-200"}`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="Thumb"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 p-4 md:p-8 space-y-6 overflow-y-auto">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-medium text-gray-900">
                  {product?.name || "Chinese Cabbage"}
                </h2>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-3">
                  In Stock
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex text-orange-400">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <span className="text-gray-500 font-medium whitespace-nowrap">
                  4 Review
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-700 whitespace-nowrap">
                  SKU: <span className="font-medium">2,51,594</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-300 line-through text-xl">
                  $48.00
                </span>
                <span className="text-2xl font-medium text-green-600">
                  ${product?.price || "17.28"}
                </span>
              </div>
              <Badge className="bg-red-50 text-red-600 border-none font-medium">
                64% Off
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Brand:
                </span>
                <div className="w-12 h-6 bg-gray-100 rounded flex items-center justify-center italic font-serif text-[10px] border border-gray-200">
                  farmery
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Share item:
                </span>
                <div className="flex gap-2">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                    <button
                      key={idx}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 ${idx === 0 ? "bg-green-600" : "text-gray-400 hover:text-green-600 hover:bg-green-50"}`}
                    >
                      <Icon size={14} fill={idx === 0 ? "white" : "none"} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <Button className="flex-1 w-full bg-green-600 hover:bg-green-700 rounded-full h-12 font-medium text-white shadow-lg shadow-green-100">
                Add To Cart <ShoppingCart size={20} className="ml-2" />
              </Button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center bg-green-50 text-green-600 hover:bg-green-100 transition-all">
                <Heart size={20} />
              </button>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="text-sm">
                <span className="text-gray-900 font-medium">Category:</span>{" "}
                <span className="text-gray-500">Vegetables</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-900 font-medium">Tag:</span>{" "}
                <span className="text-gray-500">
                  Vegetables Healthy{" "}
                  <span className="text-gray-900 font-medium underline">
                    Chinese
                  </span>{" "}
                  Cabbage Green Cabbage
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default QuickViewDialog;
