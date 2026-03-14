import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  PlayCircle,
  Loader2,
} from "lucide-react";
import { productAPI } from "../services/api";
import ProductsHolder from "../components/ProductsHolder";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await productAPI.getById(id);
        setProduct(data);
        // Fetch related products (e.g., from the same category)
        if (data.category?.id) {
          const related = await productAPI.getAll({
            category: data.category.id,
            limit: 4
          });
          setRelatedProducts(related.filter(p => p.id !== id));
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-24 py-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900">Product Not Found</h2>
        <Link to="/shop" className="text-green-600 hover:underline mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = product.images.length > 0 ? product.images : [
    "https://images.unsplash.com/photo-1590411641322-076f7df12613?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="container mx-auto px-24 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-green-600 transition-colors">
          Home
        </Link>
        <span>&gt;</span>
        <Link to="/shop" className="hover:text-green-600 transition-colors">
          Category
        </Link>
        <span>&gt;</span>
        <Link
          to={`/shop?category=${product.category?.name}`}
          className="hover:text-green-600 transition-colors"
        >
          {product.category?.name || "Uncategorized"}
        </Link>
        <span>&gt;</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-visible no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 min-w-[80px] h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${selectedImage === idx ? "border-green-600" : "border-transparent hover:border-gray-200"}`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="Thumb"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 order-1 md:order-2">
            <img
              src={images[selectedImage]}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              alt="Product"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-medium text-gray-900">
                {product.name}
              </h1>
              <Badge className={`${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} hover:bg-opacity-80 border-none px-3 font-semibold`}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm mt-2">
              <div className="flex text-orange-400">
                {"★★★★★".split("").map((s, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating || 0) ? "currentColor" : "none"}
                    className={i < Math.floor(product.rating || 0) ? "" : "text-gray-200"}
                  />
                ))}
              </div>
              <span className="text-gray-500 font-medium whitespace-nowrap">
                {product.reviews?.length || 0} Review
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-700 whitespace-nowrap uppercase tracking-wider text-xs">
                SKU: <span className="font-medium text-gray-900">{product.id.slice(-6).toUpperCase()}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-2">
              {product.oldPrice && (
                <span className="text-gray-300 line-through text-2xl font-medium">
                  ${product.oldPrice}
                </span>
              )}
              <span className="text-3xl font-medium text-green-600">
                ${product.price}
              </span>
            </div>
            {product.oldPrice && (
              <Badge className="bg-red-50 text-red-600 border-none font-medium text-xs uppercase px-2 py-1">
                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off
              </Badge>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-900">
                Brand:
              </span>
              <div className="px-3 py-1 bg-gray-50 rounded border border-gray-100 italic font-medium text-xs text-gray-600">
                farmery
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-900">
                Share item:
              </span>
              <div className="flex gap-2">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                  <button
                    key={idx}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${idx === 0 ? "bg-green-600 text-white" : "text-gray-400 hover:text-green-600 hover:bg-green-50"}`}
                  >
                    <Icon size={16} fill={idx === 0 ? "white" : "none"} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-base leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 py-6 border-b border-t border-gray-100">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1 w-fit">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all text-gray-600"
              >
                <Minus size={20} />
              </button>
              <span className="w-14 text-center font-medium text-lg">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all text-gray-600"
              >
                <Plus size={20} />
              </button>
            </div>
            <Button 
              onClick={() => addToCart(product, quantity)}
              className="flex-1 w-full bg-green-600 hover:bg-green-700 rounded-full h-14 font-medium text-lg text-white shadow-xl shadow-green-100"
            >
              Add To Cart <ShoppingCart size={24} className="ml-2" />
            </Button>
            <button 
              onClick={() => toggleWishlist(product)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border ${isInWishlist(product?.id) ? "bg-green-600 text-white border-green-600" : "bg-green-50 text-green-600 border-green-100 hover:bg-green-100"}`}
            >
              <Heart size={24} fill={isInWishlist(product?.id) ? "white" : "none"} />
            </button>
          </div>

          <div className="space-y-3 pt-4">
            <div className="text-sm">
              <span className="text-gray-900 font-medium uppercase tracking-wider text-xs">
                Category:
              </span>{" "}
              <span className="text-gray-500 ml-2">{product.category?.name || "Other"}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-900 font-medium uppercase tracking-wider text-xs">
                Tag:
              </span>
              <span className="text-gray-500 ml-2">
                Vegetables Healthy{" "}
                <span className="text-gray-900 font-medium underline cursor-pointer hover:text-green-600">
                  Chinese
                </span>{" "}
                Cabbage Green Cabbage
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="descriptions" className="w-full flex flex-col mb-16">
        <TabsList className="w-full justify-center bg-transparent border-b border-gray-100 rounded-none h-auto p-0 mb-8 overflow-x-auto no-scrollbar">
          <TabsTrigger
            value="descriptions"
            className="px-8 py-4 data-[state=active]:border-b-4 data-[state=active]:border-green-600 rounded-none bg-transparent data-[state=active]:bg-transparent font-medium text-lg text-gray-400 data-[state=active]:text-gray-900 transition-all"
          >
            Descriptions
          </TabsTrigger>
          <TabsTrigger
            value="info"
            className="px-8 py-4 data-[state=active]:border-b-4 data-[state=active]:border-green-600 rounded-none bg-transparent data-[state=active]:bg-transparent font-medium text-lg text-gray-400 data-[state=active]:text-gray-900 transition-all"
          >
            Additional Information
          </TabsTrigger>
          <TabsTrigger
            value="feedback"
            className="px-8 py-4 data-[state=active]:border-b-4 data-[state=active]:border-green-600 rounded-none bg-transparent data-[state=active]:bg-transparent font-medium text-lg text-gray-400 data-[state=active]:text-gray-900 transition-all"
          >
            Customer Feedback
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="descriptions"
          className="space-y-8 animate-in fade-in duration-500"
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <p className="text-gray-500 leading-relaxed text-sm">
                Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                convallis. Morbi urna ipsum, placerat quis commodo quis, egestas
                elementum leo. Donec convallis enim enim, Aliquam id mi quam.
                Phasellus nec fringilla elit.
              </p>
              <div className="space-y-3">
                {[
                  "100 g of fresh leaves provides.",
                  "Aliquam ac est at augue volutpat elementum.",
                  "Quisque nec enim eget sapien molestie.",
                  "Proin convallis odio volutpat finibus posuere.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <span className="text-[10px]">✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                Nulla blandit eros non turpis lobortis iaculis at ut massa.
              </p>
            </div>
            <div className="lg:w-[450px]">
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-video bg-gray-100 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Video"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <PlayCircle
                    size={64}
                    className="text-white fill-white/20 group-hover:fill-white/40 transition-all"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white/95 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium">
                      %
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        64% Discount
                      </h4>
                      <p className="text-[10px] text-gray-400">
                        Save your 64% money with us
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium">
                      🍃
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        100% Organic
                      </h4>
                      <p className="text-[10px] text-gray-400">
                        100% Organic Vegetables
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="info" className="animate-in fade-in duration-500">
          <div className="max-w-2xl mx-auto border border-gray-100 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-50">
                {[
                  { label: "Weight:", value: "03" },
                  { label: "Color:", value: "Green" },
                  { label: "Type:", value: "Organic" },
                  { label: "Category:", value: "Vegetables" },
                  { label: "Stock Status:", value: "Available (14, 413)" },
                  {
                    label: "Tags:",
                    value:
                      "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage,",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-gray-900 w-1/3">
                      {row.label}
                    </td>
                    <td className="p-4 text-gray-500">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent
          value="feedback"
          className="animate-in fade-in duration-500"
        >
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium">4 Reviews</h3>
              <Button
                variant="outline"
                className="rounded-full font-medium text-green-600 border-green-100 hover:bg-green-50"
              >
                Write a Review
              </Button>
            </div>
            <div className="divide-y divide-gray-100">
              {(product.reviews || []).map((review, idx) => (
                <div key={idx} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-medium text-gray-400">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {review.name}
                        </h4>
                        <div className="flex text-orange-400 text-xs">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              fill={i < review.rating ? "currentColor" : "none"}
                              className={
                                i < review.rating ? "" : "text-gray-200"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-16">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-8">
              <Button
                variant="outline"
                className="rounded-full px-10 py-6 font-medium border-green-200 text-green-600 hover:bg-green-50"
              >
                Load More
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-medium text-gray-900 text-center w-full">
            Related Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductsHolder
              key={product.id}
              id={product.id}
              imag={product.image}
              name={product.name}
              newprise={product.price}
              oldprise={product.oldPrice}
              rate={product.rating}
              sale={product.isSale}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
