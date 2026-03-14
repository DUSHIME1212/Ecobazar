import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, ShoppingCart, Star, Loader2 } from "lucide-react";
import QuickViewDialog from "@/components/QuickViewDialog";
import { productAPI, categoryAPI } from "../services/api";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsData, categoriesData] = await Promise.all([
          productAPI.getAll({
            category: selectedCategory,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            sort,
          }),
          categoryAPI.getAll(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch shop data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory, priceRange, sort]);

  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-green-600 transition-colors">
          Home
        </Link>
        <span>&gt;</span>
        <span className="text-gray-900">Shop</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 space-y-8">
          <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full py-6 font-medium text-lg mb-4">
            Filter <span className="ml-2">☰</span>
          </Button>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-medium text-xl border-b border-gray-100 pb-2">
              All Categories
            </h3>
            <div className="space-y-2">
              <div 
                className="flex items-center justify-between group cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="all-categories"
                    checked={selectedCategory === null}
                    className="rounded-full border-gray-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                  />
                  <label
                    htmlFor="all-categories"
                    className={`text-sm ${selectedCategory === null ? "text-gray-900 font-medium" : "text-gray-600"} group-hover:text-green-600 transition-colors`}
                  >
                    All Categories
                  </label>
                </div>
              </div>
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center justify-between group cursor-pointer"
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={cat.id}
                      checked={selectedCategory === cat.name}
                      className="rounded-full border-gray-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                    />
                    <label
                      htmlFor={cat.id}
                      className={`text-sm ${selectedCategory === cat.name ? "text-gray-900 font-medium" : "text-gray-600"} group-hover:text-green-600 transition-colors`}
                    >
                      {cat.name}
                    </label>
                  </div>
                  <span className="text-xs text-gray-400">({cat._count.products})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="space-y-4">
            <h3 className="font-medium text-xl border-b border-gray-100 pb-2">
              Price
            </h3>
            <Slider
              defaultValue={priceRange}
              max={1500}
              step={10}
              onValueChange={setPriceRange}
              className="mt-6"
            />
            <div className="text-sm text-gray-600 mt-2">
              Price:{" "}
              <span className="font-medium text-gray-900">
                ${priceRange[0]} — ${priceRange[1]}
              </span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-4">
            <h3 className="font-medium text-xl border-b border-gray-100 pb-2">
              Rating
            </h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div
                  key={star}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <Checkbox
                    id={`star-${star}`}
                    checked={star === 4}
                    className="rounded-full border-gray-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                  />
                  <div className="flex text-orange-400 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < star ? "currentColor" : "none"}
                        className={
                          i < star ? "text-orange-400" : "text-gray-200"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{star}.0 & up</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="space-y-4">
            <h3 className="font-medium text-xl border-b border-gray-100 pb-2">
              Popular Tag
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Healthy",
                "Low fat",
                "Vegetarian",
                "Kid foods",
                "Vitamins",
                "Bread",
                "Meat",
                "Snacks",
                "Tiffin",
                "Launch",
                "Dinner",
                "Breakfast",
                "Fruit",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-colors ${tag === "Low fat" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Discount Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 text-white p-8 aspect-square flex flex-col items-center justify-center text-center">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Discount"
            />
            <div className="relative z-10 space-y-2">
              <h2 className="text-4xl font-medium">
                <span className="text-orange-500">79%</span> Discount
              </h2>
              <p className="text-lg opacity-80">on your first order</p>
              <Link
                to="/shop"
                className="inline-flex items-center text-green-400 font-medium mt-4 hover:underline"
              >
                Shop Now ➜
              </Link>
            </div>
          </div>

          {/* Sale Products */}
          <div className="space-y-4">
            <h3 className="font-medium text-xl border-b border-gray-100 pb-2">
              Sale Products
            </h3>
            <div className="space-y-4">
              {products.slice(6, 9).map((product) => (
                <div key={product.id} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-100 shrink-0">
                    <img
                      src={product.image || ""}
                      className="w-full h-full object-cover"
                      alt={product.name}
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="font-medium">${product.price}</p>
                    <div className="flex text-orange-400 text-xs">
                      {"★★★★★".split("").map((s, i) => (
                        <Star key={i} size={10} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <Select defaultValue={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px] rounded-full">
                  <SelectValue placeholder="Latest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="low-to-high">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="high-to-low">
                    Price: High to Low
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm">
              <span className="font-medium">{products.length}</span>{" "}
              <span className="text-gray-500 font-medium">Results Found</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-50">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image || ""}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                      alt={product.name}
                    />
                  </Link>

                  {/* Badges */}
                  {product.isSale && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white font-medium px-3 py-1">
                      Sale {product.discount}%
                    </Badge>
                  )}
                  {product.outOfStock && (
                    <Badge className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-medium">
                      Out of Stock
                    </Badge>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors shadow-lg">
                      <Heart size={18} />
                    </button>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors shadow-lg"
                    >
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* Add to Cart button on hover bottom */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300 z-10">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full font-medium shadow-lg shadow-green-100">
                      Add To Cart <ShoppingCart size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-gray-700 font-medium group-hover:text-green-600 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex text-orange-400">
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex sm:hidden items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-green-600 hover:text-green-600 transition-all">
              ←
            </button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition-all ${p === 2 ? "bg-green-600 text-white" : "border border-transparent hover:border-green-600 text-gray-600"}`}
              >
                {p}
              </button>
            ))}
            <span className="flex items-end pb-2 px-1 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent hover:border-green-600 text-gray-600 font-medium transition-all">
              21
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-green-600 hover:text-green-600 transition-all">
              →
            </button>
          </div>
        </main>
      </div>

      {selectedProduct && (
        <QuickViewDialog
          product={selectedProduct}
          open={!!selectedProduct}
          onOpenChange={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default Shop;
